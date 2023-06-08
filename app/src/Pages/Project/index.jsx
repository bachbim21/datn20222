import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import design1 from "../../assets/images/design.jpg";
import design3 from "../../assets/images/design3.jpg";
import design_size from "../../assets/images/bg-size.jpg";
import {
  handleClick,
  handleMouseLeave,
  handleMouseOver,
  handleMouseDown,
} from "../../utils/app.function";
import { Form, Input, Button, Card, message } from "antd";
import NavbarElement from "../../Components/Navbar/navbar";
import { node } from "../../redux/selector";
import Property from "../../Components/Property";
import { UpdateNode } from "./node.slice";
import NodeService from "../../Service/node.sevice";
const { Meta } = Card;
export default function Project() {
  const currentNode = useSelector(node);
  const dispatch = useDispatch();
  const wrapper = useRef(null);
  let rateScale = null;
  useEffect(() => {
    if (currentNode != null && currentNode.code != null) {
      wrapper.current.innerHTML = "";
      wrapper.current.innerHTML = currentNode.code;
      let root = document.getElementById("root-page");
      const scale = parseFloat(root.style.transform.match(/scale\((.+?)\)/)[1]);
      rateScale = scale;
      addEvent(root);
    }
    var children = document.querySelectorAll(".node");
    if (children == null || children.length == 0) return;

    children.forEach((child) => {
      child.addEventListener("click",handleClick);
      child.addEventListener("mouseover", handleMouseOver);
      child.addEventListener("mouseleave", handleMouseLeave);
      child.addEventListener("mousedown", handleMouseDown);
      // child.setAttribute("draggable", "true");
    });
  }, [currentNode?.code, currentNode?.id]);
  useEffect(() => {
    window.addEventListener("resize", function () {
      handleScale();
    });
  }, [window.innerWidth, window.innerHeight]);

  function handleScale() {
    let rate = 1;
    let rootDom = document.getElementById("root-page");
    if (!rootDom) return;
    rate = (window.innerWidth - 220) / parseInt(rootDom.style.width);
    rootDom.style.transform = `scale(${rate.toFixed(2)})`;
    rateScale = rate.toFixed(2);
  }

  const onFinish = (values) => {
    let root = document.createElement("div");
    root.id = "root-page";
    root.classList.add("bg-gray-300");
    root.style.width = values.width + "px";
    root.style.height = values.height + "px";
    root.style.display = "block";
    root.style.transition = "width 0.5s ease-in-out, height 0.5s ease-in-out";
    root.style.transformOrigin = "top left";
    let rate = 1;
    if (values.width > window.innerWidth - 220) {
      rate = (window.innerWidth - 220) / values.width;
    } else {
      rate = values.width / (window.innerWidth - 220);
    }
    root.style.transform = `scale(${rate})`;
    wrapper.current.appendChild(root);
    addEvent(root);
    let update = {
      ...currentNode,
      code: root.outerHTML,
    };
    updateNode(update);
  };
  function addEvent(root) {
    root.addEventListener("click", handleClick);
    root.addEventListener("mouseover", handleMouseOver);
    root.addEventListener("mouseleave", handleMouseLeave);
  }
  function updateNode(update) {
    NodeService()
      .update(update, update.id)
      .then((response) => {
        dispatch(UpdateNode(response));
      })
      .catch((e) => {
        message.error("Không thành công!");
      });
  }
  const validatePositiveNumber = (_, value) => {
    if (value <= 0) {
      return Promise.reject("Vui lòng nhập một số lớn hơn 0");
    }
    return Promise.resolve();
  };
  return (
    <div id="page-content" className="bg-default ml-40 relative">
      <NavbarElement />
      <div
        className="block overflow-scroll p-4 bottom-0"
        style={{
          width: `calc(${window.innerWidth}px - 160px)`,
          height: `calc(${window.innerHeight}px - 56px)`,
        }}>
        <div ref={wrapper} className="top-0 block"></div>
        {currentNode == null && (
          <div className="">
            <Card
              hoverable
              className=" inline-block"
              cover={<img src={design3} alt="" />}>
              <Meta
                title="Thiết kế trang web chỉ bằng kéo thả"
                description="Có thể chỉnh sửa thuộc tính"
              />
            </Card>
            <Card
              hoverable
              className=" inline-block"
              cover={<img src={design1} alt="" />}>
              <Meta
                title="Quản lý thư mục dễ dàng"
                description="Tạo 1 file để bắt đầu"
              />
            </Card>
          </div>
        )}
        {currentNode != null && currentNode.code == null && (
          <div
            className=" h-full flex justify-center items-center "
            style={{
              backgroundImage: `url(${design_size})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "80%",
              backgroundPosition: "center",
            }}>
            <Form
              name="root-page"
              onFinish={onFinish}
              className="border border-blue-600 p-3 rounded bg-gray-400/40"
              style={{ maxWidth: 300, margin: "auto" }}
              layout="vertical"
              autoComplete="off">
              <h1 className="text-center my-4 font-bold text-xl">Size</h1>
              <Form.Item
                label="Width"
                name="width"
                rules={[{ validator: validatePositiveNumber }]}>
                <Input type="number" suffix="px" />
              </Form.Item>

              <Form.Item
                label="Height"
                name="height"
                rules={[{ validator: validatePositiveNumber }]}>
                <Input type="number" suffix="px" />
              </Form.Item>
              <Form.Item className="flex justify-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-blue-500">
                  OK
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
      </div>
      <Property />
    </div>
  );
}
