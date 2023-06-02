import { Dropdown, Radio, Space, Select, Tooltip, Input, Button } from "antd";
import { useEffect, useState } from "react";
import CssService from "../../Service/css.service";
import { RxText } from "react-icons/rx";
import { handleCheckClass, getClass } from "../../utils/app.function";
import { SaveOutlined } from "@ant-design/icons";
export default function Text({ dom }) {
  const [open, setOpen] = useState(false);
  const [textColor, setTextColor] = useState([]);
  const [textSize, setTextSize] = useState([]);
  const [textWeight, setTextWeight] = useState([]);
  const [textAlign, setTextAlign] = useState([]);
  const [textContent, setTextContent] = useState(dom?.innerText);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    setOpen(false);
    setTextContent(dom?.textContent);
  }, [dom?.id]);
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
    var param4 = "query=name==text-align;library==tailwind&page=0&size=1000";
    CssService()
      .getAll(param4)
      .then((res) => {
        setTextAlign(res);
      });
  }, []);
  const handleChangeColor = (value) => {
    handleCheckClass(dom, textColor);
    dom.classList.add(value);
  };
  const handleChangeWeight = (value) => {
    handleCheckClass(dom, textWeight);
    dom.classList.add(value);
  };
  const handleChangeTextSize = (value) => {
    handleCheckClass(dom, textSize);
    dom.classList.add(value);
  };
  const handleRadioChange = (event) => {
    dom.style.fontStyle = event.target.value;
  };
  const handleChangeText = (event) => {
    dom.innerHTML = event.target.value;
  };
  const handleChangeAlign = (value) => {
    handleCheckClass(dom, textAlign);
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
        <b>Text</b>{" "}
      </h3>
      <Radio.Group
        className="ml-3"
        onChange={handleRadioChange}
        defaultValue={dom?.style.fontStyle}>
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
          value={getClass(dom, textWeight)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeWeight}
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
          value={getClass(dom, textSize)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeTextSize}
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
          value={getClass(dom, textColor)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeColor}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textColor}
        />
      </Space>
      <Space>
        <span className=" w-11 block ml-3">align</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          value={getClass(dom, textAlign)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeAlign}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textAlign}
        />
      </Space>
      <Space>
        {" "}
        <span className=" w-11 block">content</span>
        <Space.Compact>
          <Input
            onChange={(event) => setTextContent(event.target.value)}
            value={textContent}
          />
          <Button
            type="primary"
            size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              dom.innerText = textContent;
            }}></Button>
        </Space.Compact>
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
        <Tooltip placement="leftTop" title="text">
          <span onClick={(e) => e.preventDefault()}>
            <RxText
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
