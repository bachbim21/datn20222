import { Dropdown, Space, Select, Tooltip, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { MdMyLocation } from "react-icons/md";
import CssService from "../../Service/css.service";
import { getClass, handleCheckClass } from "../../utils/class";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
import { SaveOutlined } from "@ant-design/icons";
export default function Location({ dom }) {
  const [open, setOpen] = useState(false);
  useEffect(()=> {

  },[dom?.id])
  const [location, setLocation] = useState({
    top: null,
    left: null,
    right: null,
    bottom: null,
  });
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  useEffect(() => {
    setOpen(false);
    setTimeout(() => {
      if (dom?.id) {
        setLocation({
          top: dom?.offsetTop,
          left: dom?.offsetLeft,
          right: dom?.offsetRight,
          bottom: dom?.offsetBottom,
        });
      }
    }, 200);
  }, [dom?.id]);
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
        <b>Location</b>{" "}
      </h3>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>top</span>
        <Space.Compact>
          <Input
            defaultValue={location.top}
            onChange={(e) => {
              setLocation({ ...location, top: e.target.value + "px" });
            }}
            suffix="px"
          />
          <Button
            type="primary"
            // size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              dom.id == "root-page"
                ? dom.style.top = '0px'
                : (dom.style.top = location.top);
            }}></Button>
        </Space.Compact>
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>bottom</span>
        <Space.Compact>
          <Input
            defaultValue={location.bottom}
            onChange={(e) => {
              setLocation({ ...location, bottom: e.target.value + "px" });
            }}
            suffix="px"
          />
          <Button
            type="primary"
            // size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              dom.id == "root-page"
                ? dom.style.bottom = '0px'
                : (dom.style.bottom = location.bottom);
            }}></Button>
        </Space.Compact>
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>left</span>
        <Space.Compact>
          <Input
            defaultValue={location.left}
            onChange={(e) => {
              setLocation({ ...location, left: e.target.value + "px" });
            }}
            suffix="px"
          />
          <Button
            type="primary"
            // size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              dom.id == "root-page"
                ? dom.style.left = '0px'
                : (dom.style.left = location.left);
            }}></Button>
        </Space.Compact>
      </Space>
      <Space>
        <span className={clsx(s['w-11'], s['block'], s['ml-3'])}>right</span>
        <Space.Compact>
          <Input
            defaultValue={location.right}
            onChange={(e) => {
              setLocation({ ...location, right: e.target.value + "px" });
            }}
            suffix="px"
          />
          <Button
            type="primary"
            // size="small"
            style={{ backgroundColor: "#1677ff" }}
            icon={<SaveOutlined />}
            onClick={() => {
              dom.id == "root-page" ? dom.style.right = '0px'
                : (dom.style.right = location.right);
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
