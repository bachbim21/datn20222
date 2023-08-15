import { Dropdown, Space, Select, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineBorderOuter } from "react-icons/ai";
import CssService from "../../Service/css.service";
import { getClass, handleCheckClass } from "../../utils/class";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function Border({ dom, borderWidth, borderRadius, borderColor, borderStyle }) {
  const [open, setOpen] = useState(false);

  const cssService = new CssService();
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    setOpen(false);
  }, [dom?.id]);
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
        className={clsx(
          s.absolute,
          s['-left-60'],
          s['-top-9'],
          s['bg-white'],
          s.border,
          s['shadow-md'],
          s['p-3'],
          s['w-56']
        )}
        direction="vertical">
        <h3>
          <b>Border</b>{" "}
        </h3>
        <Space>
          <span className={clsx(s['w-11'], s.block, s['ml-3'])}>width</span>
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
          <span className={clsx(s['w-11'], s.block, s['ml-3'])}>radius</span>
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
          <span className={clsx(s['w-11'], s.block, s['ml-3'])}>color</span>
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
          <span className={clsx(s['w-11'], s.block, s['ml-3'])}>style</span>
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
    <li className={clsx(s.relative, s.flex, s['items-center'], s['justify-center'], s['list-none'], s['cursor-pointer'], s.border, s.rounded, s.m1, s['hover:border-blue-600'], s['aspect-square'], s['hover:bg-blue-200'], s['bg-gray-200'])}>
      <Dropdown
        placement="bottomRight"
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
