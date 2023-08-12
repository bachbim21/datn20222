import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import UserService from "../../../Service/user.service";
import { Input, message, Pagination, Modal, Form, Button } from "antd";
import LoadingDetail from "../../../Components/Loading&Popup/LoadingDetail";
import { log } from "../../../utils/log";
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import ChartService from "../../../Service/chart.service";
import clsx from "clsx";
import s from "../../../assets/css/app.module.css"
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
    <div className={clsx(s['bg-white'], s['w-full'], s['rounded'], s['shadow-2xl'], s['p-2'])}>
      <div className={clsx(s['flex'], s['flex-row'], s['justify-between'])}>
        <h3 className={clsx(s['font-base'], s['text-lg'])}>Danh sách người dùng</h3>
        <button
          className={clsx(
            s['text-white'],
            s['block'],
            s['text-center'],
            s['py-1'],
            s['px-4'],
            s['bg-blue-600'],
            s['rounded'],
            s['cursor-pointer']
          )}
          onClick={showModal}
        >
          Tạo mới
        </button>
      </div>
      <div className={clsx(s['overflow-scroll']) + " h-[calc(100vh_-_10.5rem)]"}>
        <table className={clsx(s['w-full'], s['my-2'])}>
          <thead className={clsx(s['sticky'], s['top-0'], s['z-20'])}>
          <tr className={clsx(s['text-white'], s['bg-yellow-400'], s['h-10'])}>
            <th className="">STT</th>
            <th className="">Email</th>
            <th className="">Tên</th>
            <th className="">Ngày sinh</th>
            <th className="">Ngày tạo</th>
            <th>Vai trò</th>
            <th>Thao tác</th>
          </tr>
          <tr style={{ backgroundColor: "white" }}>
            <th></th>
            <th>
              <Input
                placeholder="email"
                onChange={(e) => setParams({ ...params, email: e.target.value })}
              />
            </th>
            <th>
              <Input
                placeholder="tên"
                onChange={(e) => setParams({ ...params, name: e.target.value })}
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
            listUsers.map((user, index) => (
              <tr key={user.id} className={clsx(s['py-3'], s['h-10'], s['border-b'], s['border-gray-300'])}>
                <td className={clsx(s['text-center'])}>{index + 1}</td>
                <td className="">{user.email}</td>
                <td className="">{user.name}</td>
                <td className={clsx(s['text-center'])}>
                  {convertMillisecondsToDate(user.birthDay)}
                </td>
                <td className={clsx(s['text-center'])}>
                  {convertMillisecondsToDate(user.created)}
                </td>
                <td>
                  {user.role[0].id == role[0].id ? role[0].name : role[1].name}
                </td>
                <th className={clsx(s['text-center'])}>
                  {user.active ? (
                    <Button
                      style={{
                        zIndex: "0 !important"
                      }}
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
                      style={{
                        zIndex: "0 !important"
                      }}
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
            ))}
          </tbody>
        </table>
        {listUsers?.length == 0 && (
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
        title="Tạo người dùng"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        {/* ... */}
      </Modal>
      <Modal
        title="Xác nhận"
        maskClosable={false}
        open={isModalOpenActive}
        onOk={handleOkActive}
        onCancel={handleCancelActive}
        footer={null}
      >
        <Form
          name="create"
          validateTrigger="onSubmit"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item label="Tên người dùng" name="name">
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: log.log_required }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Vai trò"
            name="role"
            rules={[{ required: true, message: log.log_required }]}
          >
            <Input />
          </Form.Item>
          <div className={clsx(s['ant-modal-footer'], s['flex'], s['justify-between'])}>
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
                onClick={handleOk}
              >
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
          layout="vertical"
        >
          <div className={clsx(s['ant-modal-footer'])}>
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
                onClick={handleOkActive}
              >
                Xác nhận
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
