import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Space } from "antd";
import ElementService from "../../../Service/element.service";
import ElementDefault from "../../../Components/Navbar/element-default";
import { log } from "../../../utils/log";

export default function ResourceElement() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  const elementService = new ElementService();
  const [elements, setElements] = useState([]);
  const [listDelete, setListDelete] = useState([]);

  function getListElement(param) {
    elementService
      .getAll(`query=${param}&page=0&size=1000`)
      .then((response) => {
        if (response.length > 0) {
          setElements(response);
        }
      });
  }

  function setCheck(event, e) {
    if (event.target.checked) {
      setListDelete([...listDelete, e.id]);
    } else {
      const index = listDelete.indexOf(e.id);
      if (index !== -1) {
        if (listDelete.length == 1) {
          setListDelete([]);
        } else {
          let newArr = listDelete.splice(index - 1, 1);
          setListDelete(newArr);
        }
      }
    }
  }

  function searchElement(e) {
    let tag = e.target.value;
    let params = "";
    if (tag != null && tag != "") {
      params = `tag==${tag}`;
    }
    getListElement(params);
  }

  useEffect(() => {
    setOpenKeys(["resources"]);
    setKeyActive(["resources-html"]);
    setHeader("Tài nguyên html");
    getListElement("");
  }, []);
  function onFinish(value) {

  }
  return <div className="bg-white flex flex-col rounded shadow-2xl">
    <Space direction="vertical">
      <div className="flex flex-row justify-between"><h2 className="my-3 ml-3">1. Danh sách </h2> <Input
        className="w-36 h-8 my-3 mr-3" onChange={searchElement} placeholder="tìm kiếm" /></div>
      <ul className="grid grid-cols-8 gap-4 ml-5 mb-5 overflow-y-scroll" style={{height: "200px"}}>
        {elements.length > 0 &&
          elements.map((e) => {
            return (
              <li className="flex flex-col">
                <Checkbox onChange={(event) => setCheck(event, e)} />
                <ElementDefault
                  key={e.id}
                  data={e}
                />
              </li>
            );
          })}
      </ul>
      <Button className="ml-8 mb-8" danger disabled={listDelete.length > 0 ? false : true}>Xoá</Button>
    </Space>
    <Space direction="vertical">
      <h2 className="my-3 ml-3">2. Thêm</h2>
      <Form
        name="update"
        validateTrigger="onSubmit"
        onFinish={onFinish}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        autoComplete="off">
        <Form.Item
          label="Tag"
          name="tag"
          rules={[
            { required: true, message: log.log_required },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          name="configId"
          label="Id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="text" label="Text"  rules={[
          {
            required: true,
          },
        ]}>
          <Input />
        </Form.Item>
        <Form.Item name="classes" label="Classname"  rules={[
          {
            required: true,
          },
        ]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{
          span: 16,
          offset: 8,
        }}>
          <Button type="primary" htmlType="submit"
                  className="bg-blue-500 w-full flex justify-center mobile:ml-20 md:block mobile:w-fit">
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </Space>
  </div>;
}
