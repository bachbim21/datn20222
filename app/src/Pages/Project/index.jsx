import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import design1 from "../../assets/images/design.jpg";
import design3 from "../../assets/images/design3.jpg";
import design_size from "../../assets/images/bg-size.jpg";
import { sizeWindown } from "../../redux/selector";
import {
  dragLeaveCopy,
  dragOverCopy,
  dropCopy,
} from "../../utils/app.function";
import { Form, Input, Button, Card } from "antd";
import NavbarElement from "../../Components/Navbar/navbar";
import { element, domId, file } from "../../redux/selector";
import { SetRoot } from "../../Components/Navbar/element.slice";
import Property from "../../Components/Property";
import { SetDomId } from "../../Components/Navbar/element.slice";
import { styleC } from "../../redux/selector";
const { Meta } = Card;
export default function Project() {
  const size = useSelector(sizeWindown);
  const currentDomId = useSelector(domId);
  const currentNode = useSelector(file);
  const [style, setStyle] = useState({
    width: "1920px",
    height: "1080px",
    transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
  });
  var styleRedux = useSelector(styleC);
  useEffect(() => {
    if (
      currentDomId == "rootPage" &&
      styleRedux.width != null &&
      styleRedux.height != null
    ) {
      setStyle({
        width: styleRedux.width,
        height: styleRedux.height,
        transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
      });
    }
  }, [styleRedux.width, styleRedux.height]);
  const dispatch = useDispatch();
  const dataElement = useSelector(element);
  var index = 0;
  const wrapper = useRef(null);
  useEffect(() => {
    // dispatch(SetRoot("rootPage"));
    const rootPage = document.getElementById("rootPage");
    if (!rootPage) return;
    rootPage.addEventListener("click", (e) => handleClick(e, rootPage));
    rootPage.addEventListener("mouseover", (e) => handleMouseOver(e, rootPage));
    rootPage.addEventListener("mouseleave", (e) =>
      handleMouseLeave(e, rootPage)
    );
    rootPage.addEventListener("dragleave", (e) => dragLeaveCopy(e));
    rootPage.addEventListener("drop", (e) =>
      dropCopy(e, dataElement, dispatch)
    );
    rootPage.addEventListener("dragover", (e) => dragOverCopy(e));
    return () => {
      rootPage.removeEventListener("click", handleClick);
      rootPage.removeEventListener("mouseover", handleMouseOver);
      rootPage.removeEventListener("mouseleave", handleMouseLeave);
      rootPage.removeEventListener("dragleave", dragLeaveCopy);
      rootPage.removeEventListener("drop", dropCopy);
      rootPage.removeEventListener("dragover", dragOverCopy);
    };
  }, [index]);

  const handleClick = (e, rootPage) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(SetDomId(e.target.id));
  };
  const handleMouseLeave = (event, rootPage) => {
    event.stopPropagation();
    event.target.classList.remove("hover-dashed");
  };

  const handleMouseOver = (event, rootPage) => {
    event.stopPropagation();
    if (event.target === rootPage) {
      rootPage.classList.add("hover-dashed");
      let currentDomHover = document.getElementById(currentDomId);
      currentDomHover?.classList.remove("hover-dashed");
    } else {
      rootPage.classList.remove("hover-dashed");
    }
  };
  const onFinish = (values) => {
    let root = document.createElement("div");
    root.id = "rootPage";
    root.classList.add("hover-dashed");
    root.classList.add("bg-gray-300");
    root.style.width = values.width + "px";
    root.style.height = values.height + "px";
    root.style.display = "block";
    root.style.transition = "width 0.5s ease-in-out, height 0.5s ease-in-out";
    root.style.transformOrigin = "top left";
    let rate = 1;
    if (values.width > size.width - 200) {
      rate = (size.width - 200) / values.width;
    } else {
      rate = values.width / (size.width - 200);
    }
    root.style.transform = `scale(${rate})`;
    wrapper.current.appendChild(root);
    root.addEventListener("click", (e) => handleClick(e, root));
    root.addEventListener("mouseover", (e) => handleMouseOver(e, root));
    root.addEventListener("mouseleave", (e) => handleMouseLeave(e, root));
    root.addEventListener("dragleave", (e) => dragLeaveCopy(e));
    root.addEventListener("drop", (e) => dropCopy(e, dataElement, dispatch));
    root.addEventListener("dragover", (e) => dragOverCopy(e));
    index++;
  };
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
        ref={wrapper}
        className="block p-4 overflow-scroll bottom-0"
        style={{
          width: `calc(${size.width}px - 160px)`,
          height: `calc(${size.height}px - 56px)`,
        }}>
        {/* {currentNode?.code && (
          <div
            id="rootPage"
            // ref={elementRoot}
            style={style}
            className="h-screen"
            onDragLeave={(e) => dragLeaveCopy(e)}
            onDrop={(e) => dropCopy(e, dataElement, dispatch)}
            onDragOver={(e) => dragOverCopy(e)}></div>
        )} */}
        {currentNode == null && (
          <div className="h-full py-5 flex justify-center items-center gap-x-8 ">
            <Card hoverable cover={<img src={design3} alt="" />}>
              <Meta
                title="Thiết kế trang web chỉ bằng kéo thả"
                description="Có thể chỉnh sửa thuộc tính"
              />
            </Card>
            <Card hoverable cover={<img src={design1} alt="" />}>
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
