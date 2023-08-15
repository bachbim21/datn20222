import { Dropdown, Radio, Space, Select, Tooltip, Input, Button } from "antd";
import { useEffect, useState } from "react";
import CssService from "../../Service/css.service";
import { RxText } from "react-icons/rx";
import { handleCheckClass, getClass } from "../../utils/class";
import { SaveOutlined } from "@ant-design/icons";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function Text({ dom, textColor, textSize, textAlign, textWeight  }) {
  const [open, setOpen] = useState(false);

  const [textContent, setTextContent] = useState(dom?.innerText);
  const cssService = new CssService();
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    setOpen(false);
    setTextContent(dom?.textContent);
  }, [dom?.id]);
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
      className={clsx(
        s['absolute'],
        s['-left-60'],
        s['-top-9'],
        s['bg-white'],
        s['border'],
        s['shadow-md'],
        s['p-3'],
        s['w-56']
      )}
      direction="vertical">
      <h3>
        <b>Text</b>{" "}
      </h3>
      <Radio.Group
        className={s['ml-3']}
        onChange={handleRadioChange}
        defaultValue={dom?.style.fontStyle}>
        <Radio value={"italic"}>italic</Radio>
        <Radio value={"normal"}>normal</Radio>
      </Radio.Group>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>weight</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, textWeight)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeWeight}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textWeight}
        />
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>size</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, textSize)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeTextSize}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textSize}
        />
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>color</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, textColor)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeColor}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textColor}
        />
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>align</span>
        <Select
          showSearch
          style={{
            width: "130px",
          }}
          defaultValue={getClass(dom, textAlign)}
          placement="bottomLeft"
          placeholder="Select"
          onChange={handleChangeAlign}
          optionFilterProp="classCustom"
          fieldNames={fieldNames}
          options={textAlign}
        />
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>value</span>
        <Space.Compact>
          <Input
            onChange={(event) => setTextContent(event.target.value)}
            defaultValue={textContent}
          />
          <Button
            type="primary"
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
    <li
      className={clsx(s['relative'], s['flex'], s['items-center'], s['justify-center'], s['list-none'], s['cursor-pointer'], s['border'], s['rounded'], s['m-1'], s['hover:border-blue-600'], s['aspect-square'], s['hover:bg-blue-200'], s['bg-gray-200'])}>
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
