import { Dropdown, Input, Radio, Space, Select, Button, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { BsTextareaResize } from "react-icons/bs";
import CssService from "../../Service/css.service";
import { SaveOutlined } from "@ant-design/icons";
import { handleCheckClass, getClass } from "../../utils/class";

export default function Display({ dom }) {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState([]);
  const [defaultValue, setDefault] = useState({
    backgroundColor: [],
  });
  const [size, setSize] = useState({
    width: dom?.offsetWidth,
    height: dom?.offsetHeight,
    display: dom?.style.display,
  });
  const cssService = new CssService()
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    var param =
      "query=name==background-color;library==tailwind&page=0&size=1000";
    cssService
      .getAll(param)
      .then((res) => {
        setBgColor(res);
      });
  }, []);
  useEffect(() => {
    setOpen(false);
    setTimeout(() => {
      if (dom?.id) {
        setDefault({
          backgroundColor: getClass(dom, bgColor),
        });
        setSize({
          width: dom.offsetWidth,
          height: dom.offsetHeight,
          display: dom.style.display,
        });
      }
    }, 200);
  }, [dom?.id, bgColor]);

  const handleChangeBg = (value) => {
    handleCheckClass(dom, bgColor);
    dom.classList.add(value);
  };
  const handleRadioChange = (event) => {
    dom.style.display = event.target.value;
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
            defaultValue={size.width}
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
              dom.id == "root-page"
                ? (dom.style.width = size.width)
                : (dom.style.minWidth = size.width);
            }}></Button>
        </Space.Compact>
      </Space>
      <Space>
        <span className="w-11 block ml-3">height</span>
        <Space.Compact>
          <Input
            defaultValue={size.height}
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
              dom.id == "root-page"
                ? (dom.style.height = size.height)
                : (dom.style.minHeight = size.height);
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
          value={defaultValue.backgroundColor[0]}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeBg}
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
        <Tooltip placement="leftTop" title="display">
          <span onClick={(e) => e.preventDefault()}>
            <BsTextareaResize
              size="25px"
              color="black"
              style={{
                width: "100%",
              }}
            />
          </span>
        </Tooltip>
      </Dropdown>
    </li>
  );
}
