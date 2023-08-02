import { useEffect, useState, useRef } from "react";
import NodeService from "../../Service/node.service";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Carousel,
  message,
  Modal,
  Row,
  Col,
  Space,
  Card,
} from "antd";
import { log } from "../../utils/log";
import { useDispatch, useSelector } from "react-redux";
import { LoadingService } from "../../Components/Layout/layout.slice";
import { decode } from "../../utils/token";
import roket from "../../assets/images/rocket.png";
import saturn from "../../assets/images/saturn.png";
import css from "../../assets/images/css.jpg";
import htmlCss from "../../assets/images/htmlcss.jpg";
import imge from "../../assets/images/imge.png";
import folder from "../../assets/images/folder.png";
import iconshare from "../../assets/images/share.png";
import imgshare from "../../assets/images/imgshare.png";
import earth from "../../assets/images/earth.png";
import { handleError } from "../../utils/error";
import letgo from "../../assets/images/letgo.png";

export default function Home() {
  const [listNode, setListNode] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const decoded = decode();
  const [messageApi, contextHolder] = message.useMessage();
  const form = useRef();
  const map = new Map();
  const nodeService = new NodeService();
  const docUrl = process.env.REACT_APP_DOC_URL;
  map.set("reactjs", "html");
  map.set("html", "reactjs");
  map.set("tailwind", "bootstrap");
  map.set("bootstrap", "tailwind");

  useEffect(() => {
    if (!decoded) return;
    nodeService
      .getAll(decoded.user_id)
      .then((res) => {
        setListNode(res);
      })
      .catch((e) => {
        handleError(e);
      });
  }, [decoded?.user_id]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    if (!decoded) return;
    let data = {
      parentId: 0,
      name: values.name,
      tech: {
        htmlFrameWork: values.html ? "html" : values.reactjs ? "react" : "html",
        cssFrameWork: values.tailwind
          ? "tailwind"
          : values.bootstrap
          ? "bootstrap"
          : "tailwind",
      },
      file: false,
      user: { id: decoded.user_id },
    };
    dispatch(
      LoadingService({
        text: "Đang xử lý",
        status: true,
      })
    );
    nodeService
      .create(data)
      .then((res) => {
        navigate(`/project/${res.id}`);
        handleOk();
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
        messageApi.open({
          type: "success",
          content: log.success,
          duration: 3,
        });
      })
      .catch((e) => {
        handleError(e);
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
      });
  };
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      var a = map.get(e.target.id.slice(7));
      form.current.setFieldsValue({
        [a]: false,
      });
    }
  };

  return (
    <div id="home">
      {contextHolder}
      <Carousel autoplay autoplaySpeed={5000}>
        <div>
          <Row
            className="bg-yellow-300"
            style={{
              height: "28rem",
            }}>
            <Col
              span={10}
              className="flex flex-col justify-center items-center">
              <div>
                <h1 className="font-mono text-4xl font-extrabold block mb-4">
                  {" "}
                  Lgo
                </h1>
                <p className="block text-lg mb-3">
                  Không có điều gì là không thể
                </p>
                <p className="block text-lg mb-3">
                  <b>Lgo</b> kết nối tới mọi lập trình viên thoả sức sáng tạo
                  bứt phá
                </p>
              </div>
              <img
                src={roket}
                alt="roket"
                className="absolute top-10 right-20"
                style={{
                  width: "7rem",
                  height: "7rem",
                }}
              />
              <img
                src={saturn}
                alt="saturn"
                className="absolute bottom-5 left-20"
                style={{
                  width: "7rem",
                  height: "7rem",
                }}
              />
            </Col>
            <Col span={14}>
              <Row
                gutter={16}
                className="p-5 h-full flex flex-row justify-center items-center gap-x-4">
                <Col span={6}>
                  <Card cover={<img alt="html" src={htmlCss} />}>
                    <Card.Meta
                      title="Tự động tạo ra code"
                      description="Chỉnh sửa, copy"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card cover={<img alt="css" src={css} />}>
                    <Card.Meta
                      title="Hỗ trợ thư viện css"
                      description="Nhanh, tiện lợi"
                    />
                  </Card>
                </Col>
                <Col span={6}>
                  <Card cover={<img alt="e" src={imge} />}>
                    <Card.Meta
                      title="Đa dạng phần tử"
                      description="Lựa chọn tốt"
                    />
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div>
          <Row
            className="bg-yellow-300"
            style={{
              height: "28rem",
            }}>
            <Col xs={24} md={12} lg={8}>
              <img
                src={folder}
                alt="folder"
                style={{
                  width: "18rem",
                }}
                className="mx-auto mt-14 rounded-xl shadow-2xl drop-shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h1 className="text-2xl font-bold">Quản lý dự án dễ dàng</h1>
                <p className="text-base">Sáng tạo không giới hạn</p>
              </div>
            </Col>
            <Col xs={0} md={12} lg={16}>
              <Row className="mt-14 hidden lg:flex flex-row justify-evenly">
                <img
                  src={iconshare}
                  alt="iconshare"
                  className="max-h-28 aspect-square drop-shadow-2xl ani-tranrote"
                />
                <img
                  src={imgshare}
                  alt="imgshare"
                  className="w-1/3 rounded-xl shadow-2xl drop-shadow-2xl ani-translate "
                />
              </Row>
              <Row className="hidden md:flex md:flex-row flex-col md:items-center md:justify-start gap-x-10">
                <img
                  src={earth}
                  alt="earth"
                  className="max-h-28 aspect-square drop-shadow-2xl "
                />
                <div className="">
                  <h3 className="text-2xl">
                    Chia sẻ dự án rộng rãi tới mọi người
                  </h3>
                  <p className="text-base mt-2">
                    Cùng nhau xây dựng phát triển hệ thống
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Carousel>

      <div className="grid sm:grid-cols-2 max-w-7xl mx-auto gap-y-5 sm:gap-x-8 p-4 sm:p-10 md:gap-x-12">
        <div className="basis-1/2">
          <ul>
            <h2 className="text-xl ">
              <b>Lgo</b>
            </h2>
            <p className="text-base">
              là website cung cấp các chức năng thiết kế giao diện phần mềm
              chuyên nghiệp. Giúp bạn trở nên dễ dàng trong việc thiết kế giao
              diện.{" "}
            </p>
            <br />
            <p className="text-base">
              Hệ thống cung cấp đầy đủ các thành phần thiết kế cùng bộ công cụ
              mạnh mẽ giúp bạn có thể thoả sức sáng tạo, chia sẻ
            </p>
            <br />
            <p className="text-base">
              Tổ chức dự dán theo dạng cây thư mục giúp bạn dễ quản lý và chia
              sẻ cho các người dùng khác
            </p>
          </ul>
          <br />
          <br />
          <img src={letgo} alt="" />
        </div>
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 rounded-md sm:p-6 p-4 border bg-custom">
          <div className="bg-white rounded-md py-3 px-5 shadow-lg">
            <h3 className="text-base font-medium mb-2">Các chức năng</h3>
            <nav className="px-3">
              <li>Thiết kế trang web</li>
              <li>Tạo nhanh các thuộc tính</li>
              <li>Xem code trực tuyến</li>
              <li>Tải xuống file code</li>
              <NavLink
                className="text-white block text-center md:w-full mt-6 p-2 bg-blue-600 rounded cursor-pointer"
                to="/design">
                Bắt đầu nào
              </NavLink>
            </nav>
          </div>
          <div className="bg-white rounded-md py-3 px-5 shadow-lg">
            <h3 className="text-base font-medium mb-2">
              Bạn chưa có tài khoản ?
            </h3>
            <div className="px-3">
              <p>Hãy đăng ký tài khoản để có thể sử dụng toàn bộ chức năng</p>
              <NavLink
                to="/signup"
                className="text-white block text-center md:w-full mt-6 p-2 bg-blue-600 rounded cursor-pointer">
                Đăng ký tại đây
              </NavLink>
            </div>
          </div>
          {decoded?.user_id && (
            <div className="lg:col-span-2 bg-white rounded-md py-3 px-5 shadow-lg">
              <h3 className="text-base font-medium mb-3">
                {listNode?.length > 0 ? "Dự án gần đây" : ""}
              </h3>
              <ul className="px-3 grid md:grid-cols-2 gap-3  sm:gap-x-6">
                {listNode.map((node) => {
                  return (
                    <NavLink key={node.id} to={`/project/${node.id}`}>
                      <li className=" bg-yellow-300 rounded p-2 text-center">
                        {node.name}
                      </li>
                    </NavLink>
                  );
                })}
              </ul>
              <button
                className="text-white block text-center w-full mt-6 py-2 px-6 bg-blue-600 rounded cursor-pointer"
                onClick={showModal}>
                Dự án mới
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="sticky top-18">
        <iframe src={docUrl} className="w-full min-h-[calc(100vh_-_4rem)]">
          Document
        </iframe>
      </div>

      <Modal
        title="Tạo dự án"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Form
          name="create"
          ref={form}
          validateTrigger="onSubmit"
          onFinish={onFinish}
          layout="vertical">
          <Form.Item
            label="Tên dự án"
            name="name"
            rules={[{ required: true, message: log.log_required }]}>
            <Input />
          </Form.Item>
          <div className="gird grid-cols-3 w-full">
            <p>FE</p>
            <Form.Item
              name="html"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>HTML</Checkbox>
            </Form.Item>
            <Form.Item
              name="reactjs"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>ReactJS</Checkbox>
            </Form.Item>
          </div>
          <div className="gird grid-cols-3">
            <p>CSS</p>
            <Form.Item
              name="tailwind"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>Tailwind</Checkbox>
            </Form.Item>
            <Form.Item
              name="bootstrap"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>Bootstrap</Checkbox>
            </Form.Item>
          </div>

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
    </div>
  );
}
