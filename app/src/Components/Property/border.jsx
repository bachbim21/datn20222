import { Dropdown, Space, Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineBorderOuter } from "react-icons/ai";
import CssService from "../../Service/css.service";
import { getClass, handleCheckClass } from "../../utils/class";

export default function Border({ dom }) {
  const [open, setOpen] = useState(false);
  const [borderWidth, setBorderWidth] = useState([]);
  const [borderRadius, setBorderRadius] = useState([]);
  const [borderColor, setBorderColor] = useState([]);
  const [borderStyle, setBorderStyle] = useState([]);
  const cssService = new CssService();
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    setOpen(false);
  }, [dom?.id]);
  useEffect(() => {
    var param1 = "query=name==border-width;library==tailwind&page=0&size=1000";
    cssService.getPage(param1).then((res) => {
      setBorderWidth(res.content);
    });
    var param2 = "query=name==border-radius;library==tailwind&page=0&size=1000";
    cssService.getPage(param2).then((res) => {
      setBorderRadius(res.content);
    });
    var param3 = "query=name==border-color;library==tailwind&page=0&size=1000";
    cssService.getPage(param3).then((res) => {
      setBorderColor(res.content);
    });
    var param3 = "query=name==border-style;library==tailwind&page=0&size=1000";
    cssService.getPage(param3).then((res) => {
      setBorderStyle(res.content);
    });
  }, []);
  const handleChangeWidth = (value) => {
    handleCheckClass(dom, borderWidth);
    dom.classList.add(value);
  };
  const handleChangeRadius = (value) => {
    handleCheckClass(dom, borderRadius);
    dom.classList.add(value);
  };
  const handleChangeColor = (value) => {
    handleCheckClass(dom, borderColor);
    dom.classList.add(value);
  };
  const handleChangeStyle = (value) => {
    handleCheckClass(dom, borderStyle);
    dom.classList.add(value);
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
        <b>Border</b>{" "}
      </h3>
      <Space>
        <span className=" w-11 block ml-3">width</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, borderWidth)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeWidth}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={borderWidth}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">radius</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, borderRadius)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeRadius}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={borderRadius}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">color</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, borderColor)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeColor}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={borderColor}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">style</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, borderStyle)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeStyle}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={borderStyle}
        />
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
        <Tooltip placement="leftTop" title="border">
          <span onClick={(e) => e.preventDefault()}>
            <AiOutlineBorderOuter
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
