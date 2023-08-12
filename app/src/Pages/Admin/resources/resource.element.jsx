import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Pagination,
  Form,
  Input,
  Modal,
  message,
} from "antd";
import ElementService from "../../../Service/element.service";
import ElementDefault from "../../../Components/Navbar/element-default";
import { log } from "../../../utils/log";
import LoadingDetail from "../../../Components/Loading&Popup/LoadingDetail";
import { EditOutlined } from "@ant-design/icons";
import clsx from "clsx";
import s from "../../../assets/css/app.module.css"
export default function ResourceElement() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  const elementService = new ElementService();
  const [elements, setElements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenActive, setIsModalOpenActive] = useState(false);
  const [params, setParams] = useState({
    tag: null,
  });
  const [tableConfig, SetTableConfig] = useState({
    currentPage: 0,
    totalElements: null,
    params: "query=&page=0&size=10",
  });
  function convertMillisecondsToDate(milliseconds) {
    if (milliseconds == null) return;
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }
  useEffect(() => {
    let customParams = "query=";
    if (params.tag != null && params.tag.length > 0) {
      customParams += "tag==*" + params.tag + "*";
    }
    customParams += "&page=" + tableConfig.currentPage + "&size=10";
    SetTableConfig({
      ...tableConfig,
      params: customParams,
    });
  }, [params]);

  useEffect(() => {
    setOpenKeys(["resources"]);
    setKeyActive(["resources-html"]);
    setHeader("Tài nguyên HTML");
    elementService.getPage(tableConfig.params).then((res) => {
      setElements(res.content);
      SetTableConfig({
        ...tableConfig,
        currentPage: res.number,
        totalElements: res.totalElements,
      });
    });
  }, [tableConfig.params]);
  function getPage(page, pageSize) {
    let customParams = "query=";
    if (params.tag != null && params.tag.length > 0) {
      customParams += "tag==*" + params.name + "*";
    }
    customParams += "&page=" + Number(page - 1) + "&size=10";
    elementService
      .getPage(customParams)
      .then((res) => {
        setElements(res.content);
        SetTableConfig({
          ...tableConfig,
          currentPage: res.number,
          totalElements: res.totalElements,
        });
      })
      .catch((e) => {
        message.error("Không có quyền truy cập");
      });
  }
  const showModal = () => {
    setIsModalOpen(true);
  };
  const showModalActive = () => {
    setIsModalOpenActive(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOkActive = () => {
    setIsModalOpenActive(false);
  };
  const handleCancelActive = () => {
    setIsModalOpenActive(false);
  };
  const onFinish = (values) => {};
  const onFinishActive = () => {};
  return (
    <div className={clsx(s['bg-white'], s['w-full'], s['rounded'], s['shadow-2xl'], s['p-2'])}>
      <div className={clsx(s['flex'], s['flex-row'], s['justify-between'])}>
        <h3 className={clsx(s['font-base'], s['text-lg'])}>Danh sách HTML</h3>
        <div>
          <Button className={clsx(s['mx-4'])} danger>
            Xoá
          </Button>

          <Button type="primary" onClick={showModal}>
            Tạo mới
          </Button>
        </div>
      </div>
      <div className={clsx(s['overflow-scroll']) + ' h-[calc(100vh_-_10.5rem)]'}>
        <table className={clsx(s['w-full'], s['my-2'])}>
          <thead className={clsx(s['sticky'], s['top-0'], s['z-20'])}>
          <tr className={clsx(s['text-white'], s['bg-yellow-400'], s['h-10'])}>
              <th></th>
              <th className="">HTML</th>
              <th className="">Tag</th>
              <th className="">Ngày tạo</th>
              <th>Người tạo</th>
              <th></th>
            </tr>
            <tr
              style={{
                backgroundColor: "white",
              }}>
              <th></th>
              <th></th>
              <th>
                <Input
                  placeholder="tag"
                  onChange={(e) =>
                    setParams({
                      ...params,
                      tag: e.target.value,
                    })
                  }
                />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {elements?.length > 0 &&
              elements.map((element) => {
                return (
                  <tr
                    key={element.id}
                    className={clsx(s['py-3'], s['h-10'], s['border-b'], s['border-gray-300'])}>
                    <td className={clsx(s['text-center'])}  style={{
                      zIndex: "0 !important"
                    }}>
                    <Checkbox  style={{
                      zIndex: "0 !important"
                    }}/>
                    </td>
                    <td className="">
                      <ElementDefault
                        data={element}
                        key={element.id}
                        width={true}
                      />
                    </td>
                    <td className="">{element.tag}</td>
                    <td className={clsx(s['text-center'])}>
                      {convertMillisecondsToDate(element.created)}
                    </td>
                    <td>{element.createdBy}</td>
                    <td className={clsx(s['z-0'])}  style={{
                      zIndex: "0 !important"
                    }}>
                      <Button
                        style={{
                          zIndex: "0 !important"
                        }}
                        type="primary"
                        danger
                        icon={<EditOutlined />}
                        size="25"
                        onClick={() => {}}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {elements?.length == 0 && (
          <div className={clsx(s['h-full'])}>
            <LoadingDetail />
          </div>
        )}
      </div>
      <div className={clsx(s['flex'], s['justify-center'], s['p-2'])}>
        <Pagination
          simple
          current={tableConfig.currentPage + 1}
          total={tableConfig.totalElements}
          onChange={getPage}
        />
      </div>
      <Modal
        title="Tạo tài nguyên HTML"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Form
          name="create"
          validateTrigger="onSubmit"
          onFinish={onFinish}
          layout="vertical">
          <Form.Item
            label="Tag"
            name="tag"
            rules={[{ required: true, message: log.error.required }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="configId"
            label="Id"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="text"
            label="Text"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="classes"
            label="Classname"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input.TextArea />
          </Form.Item>
          <div className="ant-modal-footer">
            <Form.Item className={clsx(s['inline-block'], s['mb-0'], s['mx-4'])}>
              <Button key="back" onClick={handleCancel}>
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item className={clsx(s['inline-block'], s['mb-0'])}>
              <Button
                type="primary"
                htmlType="submit"
                className={clsx(s['bg-blue-500'])}
                onClick={handleOk}>
                Tạo
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
      <Modal
        title="Xác nhận"
        maskClosable={false}
        open={isModalOpenActive}
        onOk={handleOkActive}
        onCancel={handleCancelActive}
        footer={null}>
        <Form
          name="create"
          validateTrigger="onSubmit"
          onFinish={onFinishActive}
          layout="vertical">
          <div className="ant-modal-footer">
            <Form.Item className={clsx(s['inline-block'], s['mb-0'], s['mx-4'])}>
            <Button key="back" onClick={handleCancelActive}>
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item className={clsx(s['inline-block'], s['mb-0'])}>
              <Button
                type="primary"
                htmlType="submit"
                className={clsx(s['bg-blue-500'])}
                onClick={handleOkActive}>
                Xác nhận
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
