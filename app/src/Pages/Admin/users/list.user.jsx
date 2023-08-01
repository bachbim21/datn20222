import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "../../../Service/user.service";
import { Input, message, Pagination, Modal, Form, Button } from "antd";
import LoadingDetail from "../../../Components/Loading&Popup/LoadingDetail";
import { log } from "../../../utils/log";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import ChartService from "../../../Service/chart.service";
export default function ListUser() {
  const [setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  const [listUsers, setListUser] = useState([]);
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenActive, setIsModalOpenActive] = useState(false);
  const chartService = new ChartService();

  const role = [
    {
      name: "ROLE_ADMIN",
      id: 1,
    },
    {
      name: "ROLE_USER",
      id: 2,
    },
  ];

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
  const onFinishActive = () => {
    if (user == null) return;
    chartService
      .activeUser("id=" + user.id + "&active=" + !user.active)
      .then((res) => {
        console.log(res);
      });
  };
  const [params, setParams] = useState({
    email: null,
    name: null,
    created: null,
  });
  let index = 1;
  const userService = new UserService();
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

  function getPage(page, pageSize) {
    let customParams = "query=";
    if (params.email != null && params.email.length > 0) {
      customParams += "email==*" + params.email + "*";
    }
    if (params.name != null && params.name.length > 0) {
      customParams += "name==*" + params.name + "*";
    }
    customParams += "&page=" + Number(page - 1) + "&size=10";
    userService
      .getPage(customParams)
      .then((res) => {
        setListUser(res.content);
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

  useEffect(() => {
    setOpenKeys(["users"]);
    setKeyActive(["users-list"]);
    setHeader("Quản lý người dùng");
    userService.getPage(tableConfig.params).then((res) => {
      setListUser(res.content);
      SetTableConfig({
        ...tableConfig,
        currentPage: res.number,
        totalElements: res.totalElements,
      });
    });
  }, [tableConfig.params]);
  useEffect(() => {
    let customParams = "query=";
    if (params.email != null && params.email.length > 0) {
      customParams += "email==*" + params.email + "*";
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

  return (
    <div className="bg-white w-full  rounded shadow-2xl p-2">
      <div className=" flex flex-row justify-between">
        {" "}
        <h3 className="font-base text-lg">Danh sách người dùng</h3>{" "}
        <button
          className="text-white block text-center py-1 px-4 bg-blue-600 rounded cursor-pointer"
          onClick={showModal}>
          Tạo mới
        </button>
      </div>
      <div className="overflow-scroll h-[calc(100vh_-_10.5rem)]">
        <table className="w-full  my-2 ">
          <thead className="sticky top-0 z-20">
            <tr className="text-white bg-yellow-400 h-10">
              <th className="">STT</th>
              <th className="">Email</th>
              <th className="">Tên</th>
              <th className="">Ngày sinh</th>
              <th className="">Ngày tạo</th>
              <th>Vai trò</th>
              <th>Thao tác</th>
            </tr>
            <tr
              style={{
                backgroundColor: "white",
              }}>
              <th></th>
              <th>
                <Input
                  placeholder="email"
                  onChange={(e) =>
                    setParams({
                      ...params,
                      email: e.target.value,
                    })
                  }
                />
              </th>
              <th>
                <Input
                  placeholder="tên"
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
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {listUsers?.length > 0 &&
              listUsers.map((user) => {
                console.log(user);
                return (
                  <tr
                    key={user.id}
                    className="py-3 h-10 border-b border-gray-300">
                    <td className="text-center">{index++}</td>
                    <td className="">{user.email}</td>
                    <td className="">{user.name}</td>
                    <td className="text-center">
                      {convertMillisecondsToDate(user.birthDay)}
                    </td>
                    <td className="text-center">
                      {convertMillisecondsToDate(user.created)}
                    </td>
                    <td>
                      {user.role[0].id == role[0].id
                        ? role[0].name
                        : role[1].name}
                    </td>
                    <th className="text-center">
                      {user.active ? (
                        <Button
                          className=" z-0"
                          type="primary"
                          danger
                          icon={<AiFillLock />}
                          size="25"
                          onClick={() => {
                            showModalActive();
                            setUser(user);
                          }}
                        />
                      ) : (
                        <Button
                          className=" z-0"
                          type="primary"
                          icon={<AiFillUnlock />}
                          size="25"
                          onClick={() => {
                            showModalActive();
                            setUser(user);
                          }}
                        />
                      )}
                    </th>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {listUsers?.length == 0 && (
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
        title="Tạo người dùng"
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
          <Form.Item label="Tên người dùng" name="name">
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: log.log_required }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Vai trò"
            name="role"
            rules={[{ required: true, message: log.log_required }]}>
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
