import { Dropdown, Input, Radio, Space, Select, Button } from "antd";
import { useEffect, useState } from "react";
import CssService from "../../Service/css.service";
import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined } from "@ant-design/icons";
import { SetStyle } from "../Navbar/element.slice";
import { styleC } from "../../redux/selector";
import { domId } from "../../redux/selector";
import { RxText } from "react-icons/rx";

export default function Text({ dom }) {
  const [open, setOpen] = useState(false);
  const [textColor, setTextColor] = useState([]);
  const [textSize, setTextSize] = useState([]);
  const [textWeight, setTextWeight] = useState([]);
  const id = useSelector(domId);
  const style = useSelector(styleC);
  var textDefault = {
    size: parseInt(dom?.style.fontSize),
    color: parseInt(dom?.style.color),
    weight: dom?.style.fontWeight,
  };
  const [size, setSize] = useState({
    size: parseInt(dom?.style.fontSize),
    color: parseInt(dom?.style.color),
    weight: dom?.style.fontWeight,
  });
  const dispatch = useDispatch();
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    var param1 = "query=name==text-color;library==tailwind&page=0&size=1000";
    CssService()
      .getAll(param1)
      .then((res) => {
        setTextColor(res);
      });
    var param2 = "query=name==text-size;library==tailwind&page=0&size=1000";
    CssService()
      .getAll(param2)
      .then((res) => {
        setTextSize(res);
      });
    var param3 = "query=name==text-weight;library==tailwind&page=0&size=1000";
    CssService()
      .getAll(param3)
      .then((res) => {
        setTextWeight(res);
      });
  }, []);
  const handleChange = (value, key1, key2, specal) => {
    const containsBGClass = Array.from(dom.classList).filter(
      (className) =>
        (className.startsWith("key1") && className.endWith(key2)) ||
        className.includes(specal)
    );
    dom.classList.remove(containsBGClass[0]);
    dom.classList.add(value);
  };
  const handleRadioChange = (event) => {
    dom.style.fontStyle = event.target.value;
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
        <b>Text</b>{" "}
      </h3>
      <Radio.Group
        className="ml-3"
        onChange={handleRadioChange}
        defaultValue={dom.style.fontStyle}>
        <Radio value={"italic"}>italic</Radio>
        <Radio value={"normal"}>normal</Radio>
      </Radio.Group>
      <Space>
        <span className=" w-11 block ml-3">weight</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          // listHeight="150"
          placement="bottomLeft"
          placeholder="Select"
          onChange={(e) => {
            handleChange(e, "font", "", "");
          }}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textWeight}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">size</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          // listHeight="150"
          placement="bottomLeft"
          placeholder="Select"
          onChange={(e) => {
            handleChange(e, "text", "", "black");
          }}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textSize}
        />
      </Space>

      <Space>
        <span className=" w-11 block ml-3">color</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          // listHeight="150"
          placement="bottomLeft"
          placeholder="Select"
          onChange={(e) => {
            handleChange(e, "text", "0", "black");
          }}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textColor}
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
        <span onClick={(e) => e.preventDefault()}>
          <RxText
            size="25px"
            color="green"
            style={{
              width: "100%",
            }}
          />
        </span>
      </Dropdown>
    </li>
  );
}
