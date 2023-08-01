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
import CssService from "../../../Service/css.service";
import ElementDefault from "../../../Components/Navbar/element-default";
import { log } from "../../../utils/log";
import LoadingDetail from "../../../Components/Loading&Popup/LoadingDetail";
import { EditOutlined } from "@ant-design/icons";

export default function ResourceCss() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  const elementService = new CssService();
  const [elements, setElements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenActive, setIsModalOpenActive] = useState(false);
  const [params, setParams] = useState({
    library: null,
    class: null,
    name: null,
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
    if (params.library != null && params.library.length > 0) {
      customParams += "library==*" + params.library + "*";
    }
    if (params.class != null && params.class.length > 0) {
      customParams += "classCustom==*" + params.class + "*";
    }
    if (params.name != null && params.name.length > 0) {
      customParams += "name==*" + params.name + "*";
    }
    customParams += "&page=" + tableConfig.currentPage + "&size=10";
    SetTableConfig({
      ...tableConfig,
      params: customParams,
    });
  }, [params]);
  useEffect(() => {
    setOpenKeys(["resources"]);
    setKeyActive(["resources-css"]);
    setHeader("Tài nguyên CSS");
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
    <div className="bg-white w-full  rounded shadow-2xl p-2">
      <div className=" flex flex-row justify-between">
        {" "}
        <h3 className="font-base text-lg">Danh sách CSS</h3>{" "}
        <div>
          <Button className="mx-4" danger>
            Xoá
          </Button>

          <Button type="primary" onClick={showModal}>
            Tạo mới
          </Button>
        </div>
      </div>
      <div className="overflow-scroll h-[calc(100vh_-_10.5rem)]">
        <table className="w-full  my-2 ">
          <thead className="sticky top-0 z-20">
            <tr className="text-white bg-yellow-400 h-10">
              <th></th>
              <th className="">Thư viện</th>
              <th className="">Class</th>
              <th className="">Thuộc tính</th>
              <th>Người tạo</th>
              <th>Ngày tạo</th>
              <th></th>
            </tr>
            <tr
              style={{
                backgroundColor: "white",
              }}>
              <th></th>
              <th>
                <Input
                  placeholder="thư viện"
                  onChange={(e) =>
                    setParams({
                      ...params,
                      library: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  placeholder="class"
                  onChange={(e) =>
                    setParams({
                      ...params,
                      class: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  placeholder="thuộc tính"
                  onChange={(e) =>
                    setParams({
                      ...params,
                      name: e.target.value,
                    })
                  }
                />
              </th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {elements?.length > 0 &&
              elements.map((element) => {
                return (
                  <tr
                    key={element.id}
                    className="py-3 h-10 border-b border-gray-300">
                    <td className="text-center">
                      <Checkbox />
                    </td>
                    <td className="">{element.library}</td>
                    <td className="">{element.classCustom}</td>
                    <td>{element.name}</td>
                    <td className="text-center">
                      {convertMillisecondsToDate(element.created)}
                    </td>
                    <td>{element.createdBy}</td>
                    <td>
                      <Button
                        className=" z-0"
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
          <div className="h-full">
            <LoadingDetail />
          </div>
        )}
      </div>
      <div className="flex justify-center p-2">
        <Pagination
          simple
          current={tableConfig.currentPage + 1}
          total={tableConfig.totalElements}
          onChange={getPage}
        />
      </div>
      <Modal
        title="Tạo tài nguyên CSS"
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
            label="Class"
            name="class"
            rules={[{ required: true, message: log.log_required }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="Thư viện"
            label="library"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="Thuộc tính"
            label="name"
            rules={[
              {
                required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <div className="ant-modal-footer">
            <Form.Item className="inline-block mb-0 mx-4">
              <Button key="back" onClick={handleCancel}>
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item className="inline-block mb-0">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500"
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
            <Form.Item className="inline-block mb-0 mx-4">
              <Button key="back" onClick={handleCancelActive}>
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item className="inline-block mb-0">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500"
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
