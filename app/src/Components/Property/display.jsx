import { Dropdown, Input, Radio, Space, Select, Button } from "antd";
import { useEffect, useState } from "react";
import { BsTextareaResize } from "react-icons/bs";
import CssService from "../../Service/css.service";
import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined } from "@ant-design/icons";
import { SetStyle } from "../Navbar/element.slice";
import { styleC } from "../../redux/selector";
import { domId } from "../../redux/selector";

export default function Display({ dom }) {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState([]);
  const id = useSelector(domId);
  const style = useSelector(styleC);
  var sizeDefault = {
    width: parseInt(dom?.style.width),
    height: parseInt(dom?.style.height),
    display: dom?.style.display,
  };
  const [size, setSize] = useState({
    width: parseInt(dom?.style.width),
    height: parseInt(dom?.style.height),
    display: dom?.style.display,
  });
  const dispatch = useDispatch();
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    var param =
      "query=name==background-color;library==tailwind&page=0&size=1000";
    CssService()
      .getAll(param)
      .then((res) => {
        setBgColor(res);
      });
  }, []);
  const handleChangeBg = (value, start, end, specials) => {
    const containsBGClass = Array.from(dom.classList).filter(
      (className) => className.startsWith(start) && className.endsWith(end)
    );
    for (const special of specials) {
      console.log(special);
      dom.classList.remove(special);
    }
    dom.classList.remove(containsBGClass[0]);
    dom.classList.add(value);
  };
  const handleRadioChange = (event) => {
    if (id == "rootPage") {
      dispatch(
        SetStyle({
          ...style,
          display: event.target.value,
        })
      );
    } else {
      dom.style.display = event.target.value;
    }
  };
  const fieldNames = {
    value: "classCustom", // Tên trường dùng làm value
    label: "classCustom", // Tên trường dùng làm label
  };
  const menu = (
    <Space
      className=" absolute -left-60 -top-9 bg-white border shadow-md p-3 w-56"
      direction="vertical">
      <h3>
        <b>Display</b>{" "}
      </h3>
      <Radio.Group
        className="ml-3"
        onChange={handleRadioChange}
        defaultValue={size.display}>
        <Radio value={"block"}>block</Radio>
        <Radio value={"inline-block"}>inline-block</Radio>
      </Radio.Group>
      <h3>
        <b>Size</b>{" "}
      </h3>
      <Space>
        <span className=" w-11 block ml-3">width</span>
        <Space.Compact>
          <Input
            defaultValue={sizeDefault.width}
            onChange={(e) => {
              setSize({ ...size, width: e.target.value + "px" });
            }}
            suffix="px"
          />
          <Button
            type="primary"
            size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              if (id == "rootPage") {
                dispatch(
                  SetStyle({
                    ...style,
                    width: size.width,
                  })
                );
                return;
              }
              dom.style.width = size.width;
            }}></Button>
        </Space.Compact>
      </Space>
      <Space>
        <span className="w-11 block ml-3">height</span>
        <Space.Compact>
          <Input
            defaultValue={sizeDefault.height}
            onChange={(e) => {
              setSize({ ...size, height: e.target.value + "px" });
            }}
            suffix="px"
          />
          <Button
            type="primary"
            size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              if (id == "rootPage") {
                dispatch(
                  SetStyle({
                    ...style,
                    height: size.height,
                  })
                );
                return;
              }
              dom.style.height = size.height;
            }}></Button>
        </Space.Compact>
      </Space>
      <h3>
        <b>Background</b>{" "}
      </h3>
      <Space>
        <span className=" w-11 block ml-3">color</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          // listHeight="200"
          placement="bottomLeft"
          placeholder="Select"
          onChange={(value) => {
            let special = ["bg-transparent", "bg-black", "bg-white"];
            handleChangeBg(value, "bg", "0", special);
          }}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={bgColor}
        />
        {/* <Input type="color" /> */}
      </Space>
    </Space>
  );

  return (
    <li className="relative flex items-center justify-center list-none cursor-pointer border rounded m-1 hover:border-blue-600 aspect-square hover:bg-blue-200 bg-gray-200">
      <Dropdown
        placement="bottomRight"
        // menu={{ menu }}
        overlay={menu}
        trigger={["click"]}
        onOpenChange={handleOpenChange}
        open={open}>
        <span onClick={(e) => e.preventDefault()}>
          <BsTextareaResize
            size="25px"
            color="red"
            style={{
              width: "100%",
            }}
          />
        </span>
      </Dropdown>
    </li>
  );
}
