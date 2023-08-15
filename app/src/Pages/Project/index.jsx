import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import design1 from "../../assets/images/design.jpg";
import design3 from "../../assets/images/design3.jpg";
import design_size from "../../assets/images/bg-size.jpg";
import {
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  handleMouseDown,
  generateUniqueId,
  handleZoom
} from "../../utils/drag";
import { Form, Input, Button, Card, message } from "antd";
import NavbarElement from "../../Components/Navbar/navbar";
import { node, focusId, hoverId } from "../../redux/selector";
import Property from "../../Components/Property";
import { UpdateNode } from "./node.slice";
import { LoadingService } from "../../Components/Layout/layout.slice";
import NodeService from "../../Service/node.service";
import "../../assets/css/app.module.css";
import { useParams } from "react-router";
import DesignBootstrap from "./design.bootstrap";
import DesignTailwind from "./design.tailwind";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"

const { Meta } = Card;
export default function Project() {
  const currentNode = useSelector(node);
  const { id } = useParams();
  const currentFocusId = useSelector(focusId);
  const currentHoverId = useSelector(hoverId);
  const dispatch = useDispatch();
  const wrapper = "wrapper-root"
  var wrapperDom = null
  const [root, setRoot] = useState(null);
  let rateScale = null;
  const nodeService = new NodeService();

  let mouse = {
    x: 0,
    y: 0
  };

  document.body.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  useEffect(() => {
    nodeService.getRoot(id).then((res) => {
      setRoot(res);
    });
  }, [id]);

  function ctrlC() {
    let elementToCopy = document.getElementById(currentFocusId);
    if (elementToCopy) {
      let htmlCopy = elementToCopy.outerHTML;
      navigator.clipboard
        .writeText(htmlCopy)
        .then(function() {
          message.info("Copy!")
        })
        .catch(function(error) {
          console.error("Failed to read copy text:", error);
        });
    }
  }

  function ctrlV() {
    let parent = document.getElementById(currentHoverId);
    let wrapperChild = document.createElement("div");
    if(!parent) return;
    navigator.clipboard
      .readText()
      .then(function(pastedText) {
        wrapperChild.innerHTML = pastedText;
        let childV = wrapperChild.firstElementChild
        childV.id = generateUniqueId()
        setLocationPasted(childV, parent, rateScale)
        parent.appendChild(childV)
        wrapperChild.remove();
        message.info("Pasted!")
      })
      .catch(function(error) {
        console.error("Failed to read pasted text:", error);
      });
  }
  function ctrlX() {
    if(currentFocusId =='root-page') return
    let elementToCopy = document.getElementById(currentFocusId);
    if (elementToCopy) {
      let htmlCopy = elementToCopy.outerHTML;
      navigator.clipboard
        .writeText(htmlCopy)
        .then(function() {
          elementToCopy.remove()
          message.info("Cut!")
        })
        .catch(function(error) {
          console.error("Failed to read copy text:", error);
        });
    }
  }
  function setLocationPasted(element, parent, rateScale) {
    let rect = parent.getBoundingClientRect();
    element.style.left = `${(
      (mouse.x - rect.left) /
      rateScale
    ).toFixed(4)}px`;
    element.style.top = `${(
      (mouse.y - rect.top) /
      rateScale
    ).toFixed(4)}px`;
    element.setAttribute("data-x", (mouse.x - rect.left) / rateScale);
    element.setAttribute("data-y", (mouse.y - rect.top) / rateScale);
  }
  function handleScale() {
    let rate = 1;
    let rootDom = document.getElementById("root-page");
    if (!rootDom) return;
    rate = (window.innerWidth - 220) / parseInt(rootDom.style.width);
    rootDom.style.transform = `scale(${rate.toFixed(2)})`;
    rateScale = rate.toFixed(2);
  }
  function addEvent(rootDom) {
    rootDom.addEventListener("click", handleClick);
    rootDom.addEventListener("mouseover", handleMouseOver);
    rootDom.addEventListener("mouseleave", handleMouseLeave);
    // rootDom.addEventListener("keydown",handleZoom)
  }


  useEffect(() => {
    const handleKeyDown = (ev) => {
      ev = ev || window.event;
      const key = ev.which || ev.keyCode;
      const ctrl = ev.ctrlKey
      if (key === 86 && ctrl && currentHoverId) {
        ctrlV()
      } else if (key === 67 && ctrl && currentFocusId) {
        ctrlC()
      } else if (key === 88 && ctrl && currentFocusId) {
        ctrlX()
      }
    };

    document.body.addEventListener("keydown", handleKeyDown, false);

    // Xóa sự kiện khi component unmount
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);
  useEffect(() => {
    if (currentNode != null && currentNode.code != null) {
      wrapperDom = document.getElementById(wrapper)
      wrapperDom.innerHTML = "";
      wrapperDom.innerHTML = currentNode.code;
      let rootDom = document.getElementById("root-page");
      const scale = parseFloat(rootDom.style.transform.match(/scale\((.+?)\)/)[1]);
      rateScale = scale;
      handleScale();
      addEvent(rootDom);
    }
    var children = document.querySelectorAll(".node");
    if (children == null || children.length == 0) return;

    children.forEach((child) => {
      child.addEventListener("click", handleClick);
      child.addEventListener("mouseover", handleMouseOver);
      child.addEventListener("mouseleave", handleMouseLeave);
      child.addEventListener("mousedown", handleMouseDown);
      // child.setAttribute("draggable", "true");
    });
  }, [currentNode?.code, currentNode?.id]);
  useEffect(() => {
    window.addEventListener("resize", function() {
      handleScale();
    });
  }, []);


  const onFinish = (values) => {
    let rootDom = document.createElement("div");
    rootDom.id = "root-page";
    if(root.tech.cssFrameWork='tailwind'){
      rootDom.classList.add("bg-gray-300");
    }else {
      rootDom.classList.add("bg-secondary");
    }
    rootDom.style.width = values.width + "px";
    rootDom.style.height = values.height + "px";
    rootDom.style.display = "block";
    rootDom.style.transition = "width 0.5s ease-in-out, height 0.5s ease-in-out";
    rootDom.style.transformOrigin = "top left";
    let rate = 1;
    if (values.width > window.innerWidth - 220) {
      rate = (window.innerWidth - 220) / values.width;
    } else {
      rate = values.width / (window.innerWidth - 220);
    }
    rootDom.style.transform = `scale(${rate})`;
    wrapperDom = document.getElementById(wrapper)
    wrapperDom.appendChild(rootDom);
    addEvent(rootDom);
    let update = {
      ...currentNode,
      code: rootDom.outerHTML
    };
    updateNode(update);
  };

  function updateNode(update) {
    dispatch(
      LoadingService({
        status: true,
        text: null
      })
    );
    nodeService.update(update, update.id).then((response) => {
      dispatch(UpdateNode(response));
      message.success("Thành công");
    });
    dispatch(
      LoadingService({
        status: false,
        text: null
      })
    );
  }

  const validatePositiveNumber = (_, value) => {
    if (value <= 0) {
      return Promise.reject("Vui lòng nhập một số lớn hơn 0");
    }
    return Promise.resolve();
  };
  return (
    <div
      id="page-content"
      className={clsx(s['bg-default'], s['ml-40'], s['relative'])}
    >
      <NavbarElement data={root}/>
      <div
        className={clsx(
          s['block'],
          s['p-3'],
          s['bg-custom'],
          s['overflow-scroll'],
          s['bottom-0']
        )}
        style={{
          width: `calc(${window.innerWidth}px - 10rem)`,
          height: `calc(${window.innerHeight}px - 3.5rem)`
        }}
      >
        {root?.tech?.id % 2 == 0 ? <DesignBootstrap /> : <DesignTailwind />}
        {currentNode == null && (
          <div
            className={clsx(
              s['flex'],
              s['flex-row'],
              s['w-fit'],
              s['justify-evenly']
            )}
          >
            <Card
              hoverable
              className={clsx(s['w-1/3'], s['inline-block'], s['border-2'])}
              cover={<img src={design3} alt="dt1" />}
            >
              <Meta
                className={clsx(s['border-none'])}
                title="Thiết kế trang web chỉ bằng kéo thả"
                description="Có thể chỉnh sửa thuộc tính"
              />
            </Card>
            <Card
              hoverable
              className={clsx(s['w-1/3'], s['inline-block'], s['border-2'])}
              cover={<img src={design1} alt="dt" />}
            >
              <Meta
                className={clsx(s['border-none'])}
                title="Quản lý thư mục dễ dàng"
                description="Tạo 1 file để bắt đầu"
              />
            </Card>
          </div>
        )}
        {currentNode != null &&
          (currentNode.code == null || currentNode.code == undefined) && (
            <div
              className={clsx(
                s['h-full'],
                s['flex'],
                s['justify-center'],
                s['items-center']
              )}
              style={{
                backgroundImage: `url(${design_size})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "80%",
                backgroundPosition: "center"
              }}
            >
              <Form
                name="root-page"
                onFinish={onFinish}
                className={clsx(
                  s['border'],
                  s['border-blue-600'],
                  s['p-3'],
                  s['rounded'],
                  s['bg-gray-400/70']
                )}
                style={{ maxWidth: 300, margin: "auto" }}
                layout="vertical"
                autoComplete="off"
              >
                <h1 className={clsx(s['text-center'], s['my-4'], s['font-bold'], s['text-xl'])}>
                  Size
                </h1>
                <Form.Item
                  label="Width"
                  name="width"
                  rules={[{ validator: validatePositiveNumber }]}
                >
                  <Input type="number" suffix="px" />
                </Form.Item>

                <Form.Item
                  label="Height"
                  name="height"
                  rules={[{ validator: validatePositiveNumber }]}
                >
                  <Input type="number" suffix="px" />
                </Form.Item>
                <Form.Item className={clsx(s['flex'], s['justify-center'])}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={clsx(s['bg-blue-500'])}
                  >
                    OK
                  </Button>
                </Form.Item>
              </Form>
            </div>
          )}
      </div>
      <Property data={root}/>
      <input style={{
        position: "absolute",
        bottom: "-50px"
      }} type="file" id="imageInput" accept="image/*"/>
    </div>

  );
}
