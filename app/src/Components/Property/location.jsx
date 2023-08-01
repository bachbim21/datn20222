import { Dropdown, Space, Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import CssService from "../../Service/css.service";
import { getClass, handleCheckClass } from "../../utils/class";

export default function Location({ dom }) {
  const [open, setOpen] = useState(false);
  const [marginTop, setMarginTop] = useState([]);
  const [marginBottom, setMarginBottom] = useState([]);
  const [marginLeft, setMarginLeft] = useState([]);
  const [marginRight, setMarginRight] = useState([]);
  const cssService = new CssService()
  const [defaultValue, setDefault] = useState({
    top: [],
    left: [],
    right: [],
    bottom: [],
  });
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    setOpen(false);
    setTimeout(() => {
      if (dom?.id) {
        setDefault({
          top: getClass(dom, marginTop),
          left: getClass(dom, marginLeft),
          right: getClass(dom, marginRight),
          bottom: getClass(dom, marginBottom),
        });
      }
    }, 200);
  }, [dom?.id]);
  useEffect(() => {
    var param1 = "query=name==margin-top;library==tailwind&page=0&size=1000";
    cssService
      .getAll(param1)
      .then((res) => {
        setMarginTop(res.content);
      });
    var param2 = "query=name==margin-bottom;library==tailwind&page=0&size=1000";
    cssService
      .getAll(param2)
      .then((res) => {
        setMarginBottom(res.content);
      });
    var param3 = "query=name==margin-left;library==tailwind&page=0&size=1000";
    cssService
      .getAll(param3)
      .then((res) => {
        setMarginLeft(res.content);
      });
    var param3 = "query=name==margin-right;library==tailwind&page=0&size=1000";
    cssService
      .getAll(param3)
      .then((res) => {
        setMarginRight(res.content);
      });
  }, []);
  const handleChangeTop = (value) => {
    handleCheckClass(dom, marginTop);
    dom.classList.add(value);
  };
  const handleChangeBottom = (value) => {
    handleCheckClass(dom, marginBottom);
    dom.classList.add(value);
  };
  const handleChangeLeft = (value) => {
    handleCheckClass(dom, marginLeft);
    dom.classList.add(value);
  };
  const handleChangeRight = (value) => {
    handleCheckClass(dom, marginRight);
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
        <b>Location</b>{" "}
      </h3>
      <Space>
        <span className=" w-11 block ml-3">top</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={defaultValue.top}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeTop}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={marginTop}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">bottom</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={defaultValue.bottom}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeBottom}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={marginBottom}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">left</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={defaultValue.left}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeLeft}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={marginLeft}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">right</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={defaultValue.right}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeRight}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={marginRight}
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
        <Tooltip placement="leftTop" title="location">
          <span onClick={(e) => e.preventDefault()}>
            <MdMyLocation
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
