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
import clsx from "clsx";
import s from "../../assets/css/app.module.css"

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
            className={clsx(s['bg-yellow-300'])}
            style={{
              height: "28rem",
            }}>
            <Col
              xs={24} md={10}
              className={clsx(s.flex, s['flex-col'], s['justify-center'], s['items-center'])}>
              <div>
                <h1 className={clsx(s['font-mono'], s['text-4xl'], s['font-extrabold'], s.block, s['mb-4'])}>
                  {" "}
                  Lgo
                </h1>
                <p className={clsx(s.block, s['text-lg'], s['mb-3'])}>
                  Không có điều gì là không thể
                </p>
                <p className={clsx(s.block, s['text-lg'], s['mb-3'])}>
                  <b>Lgo</b> kết nối tới mọi lập trình viên thoả sức sáng tạo
                  bứt phá
                </p>
              </div>
              <img
                src={roket}
                alt="roket"
                className={clsx(s.absolute, s['top-10'], s['right-20'])}
                style={{
                  width: "7rem",
                  height: "7rem",
                }}
              />
              <img
                src={saturn}
                alt="saturn"
                className={clsx(s.absolute, s['bottom-5'], s['left-20'])}
                style={{
                  width: "7rem",
                  height: "7rem",
                }}
              />
            </Col>
            <Col xs={0} md={8} lg={14}>
              <Row
                gutter={16}
                className={clsx(s['p-5'], s['h-full'], s.flex, s['flex-row'], s['justify-center'], s['items-center'], s['gap-x-4'])}>
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
          <Row className={clsx(s['bg-yellow-300'])} style={{ height: '28rem' }}>
            <Col xs={24} md={12} lg={8}>
              <img
                src={folder}
                alt="folder"
                className={clsx(s['mx-auto'], s['mt-14'], s['rounded-xl'], s['shadow-2xl'], s['drop-shadow-2xl'])}
                style={{
                  width: '18rem',
                }}
              />
              <div className={clsx(s['mt-4'], s['text-center'])}>
                <h1 className={clsx(s['text-2xl'], s['font-bold'])}>Quản lý dự án dễ dàng</h1>
                <p className={clsx(s['text-base'])}>Sáng tạo không giới hạn</p>
              </div>
            </Col>
            <Col xs={0} md={12} lg={16}>
              <Row className={clsx(s['mt-14'], s['hidden'], s['lg:flex'], s['flex-row'], s['justify-evenly'])}>
                <img
                  src={iconshare}
                  alt="iconshare"
                  className={clsx(s['max-h-28'], s['aspect-square'], s['drop-shadow-2xl'], s['ani-tranrote'])}
                />
                <img
                  src={imgshare}
                  alt="imgshare"
                  className={clsx(s['w-1/3'], s['rounded-xl'], s['shadow-2xl'], s['drop-shadow-2xl'], s['ani-translate'])}
                />
              </Row>
              <Row className={clsx(s['hidden'], s['md:flex'], s['md:flex-row'], s['flex-col'], s['md:items-center'], s['md:justify-start'], s['gap-x-10'])}>
                <img
                  src={earth}
                  alt="earth"
                  className={clsx(s['max-h-28'], s['aspect-square'], s['drop-shadow-2xl'])}
                />
                <div className="">
                  <h3 className={clsx(s['text-2xl'])}>
                    Chia sẻ dự án rộng rãi tới mọi người
                  </h3>
                  <p className={clsx(s['text-base'], s['mt-2'])}>
                    Cùng nhau xây dựng phát triển hệ thống
                  </p>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
      </Carousel>

      <div className={clsx(s.grid, s['sm:grid-cols-2'], s['max-w-7xl'], s['mx-auto'], s['gap-y-5'], s['sm:gap-x-8'], s['p-4'], s['sm:p-10'], s['md:gap-x-12'])}>
        <div className={clsx(s['basis-1/2'])}>
          <ul>
            <h2 className={clsx(s['text-xl'])}>
              <b>Lgo</b>
            </h2>
            <p className={clsx(s['text-base'])}>
              là website cung cấp các chức năng thiết kế giao diện phần mềm
              chuyên nghiệp. Giúp bạn trở nên dễ dàng trong việc thiết kế giao
              diện.{" "}
            </p>
            <br />
            <p className={clsx(s['text-base'])}>
              Hệ thống cung cấp đầy đủ các thành phần thiết kế cùng bộ công cụ
              mạnh mẽ giúp bạn có thể thoả sức sáng tạo, chia sẻ
            </p>
            <br />
            <p className={clsx(s['text-base'])}>
              Tổ chức dự dán theo dạng cây thư mục giúp bạn dễ quản lý và chia
              sẻ cho các người dùng khác
            </p>
          </ul>
          <br />
          <br />
          <img src={letgo} alt="" />
        </div>
        <div className={clsx(s['grid'], s['lg:grid-cols-2'], s['gap-4'], s['sm:gap-6'], s['rounded-md'], s['sm:p-6'], s['p-4'], s['border'], s['bg-custom'])}>
          <div className={clsx(s['bg-white'], s['rounded-md'], s['py-3'], s['px-5'], s['shadow-lg'])}>
            <h3 className="text-base font-medium mb-2">Các chức năng</h3>
            <nav className="px-3">
              <li>Thiết kế trang web</li>
              <li>Tạo nhanh các thuộc tính</li>
              <li>Xem code trực tuyến</li>
              <li>Tải xuống file code</li>
              <NavLink
                className={clsx(
                  s['text-white'],
                  s['block'],
                  s['text-center'],
                  s['md:w-full'],
                  s['mt-6'],
                  s['p-2'],
                  s['bg-blue-600'],
                  s['rounded'],
                  s['cursor-pointer']
                )}
                to="/design">
                Bắt đầu nào
              </NavLink>
            </nav>
          </div>
            <div className={clsx(s['bg-white'], s['rounded-md'], s['py-3'], s['px-5'], s['shadow-lg'])}>
              <h3 className={clsx(s['text-base'], s['font-medium'], s['mb-2'])}>
              Bạn chưa có tài khoản ?
            </h3>
            <div className={clsx(s['px-3'])}>
              <p>Hãy đăng ký tài khoản để có thể sử dụng toàn bộ chức năng</p>
              <NavLink
                to="/signup"
                className="text-white block text-center md:w-full mt-6 p-2 bg-blue-600 rounded cursor-pointer">
                Đăng ký tại đây
              </NavLink>
            </div>
          </div>
          {decoded?.user_id && (
            <div className={clsx(s['lg:col-span-2'], s['bg-white'], s['rounded-md'], s['py-3'], s['px-5'], s['shadow-lg'])}>
              <h3 className={clsx(s['text-base'], s['font-medium'], s['mb-3'])}>
                {listNode?.length > 0 ? 'Dự án gần đây' : ''}
              </h3>
              <ul className={clsx(s['px-3'], s['grid'], s['md:grid-cols-2'], s['gap-3'], s['sm:gap-x-6'])}>
                {listNode.map((node) => (
                  <NavLink key={node.id} to={`/project/${node.id}`} className={clsx(s['block'])}>
                    <li className={clsx(s['bg-yellow-300'], s['rounded'], s['p-2'], s['text-center'])}>
                      {node.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
              <button
                className={clsx(
                  s['text-white'],
                  s['block'],
                  s['text-center'],
                  s['w-full'],
                  s['mt-6'],
                  s['py-2'],
                  s['px-6'],
                  s['bg-blue-600'],
                  s['rounded'],
                  s['cursor-pointer']
                )}
                onClick={showModal}>
                Dự án mới
              </button>
            </div>
          )}
        </div>
      </div>

      <div className={clsx(s['sticky'], s['top-18'])}>
        <iframe src={docUrl} className={clsx(s['w-full']) + " min-h-[calc(100vh_-_4rem)]"}>
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
          <div className={clsx(s['grid'], s['grid-cols-3'], s['w-full'])}>
            <p>FE</p>
            <Form.Item
              name="html"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>HTML</Checkbox>
            </Form.Item>
            <Form.Item
              name="reactjs"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>ReactJS</Checkbox>
            </Form.Item>
          </div>
          <div className={clsx(s['grid'], s['grid-cols-3'])}>
            <p>CSS</p>
            <Form.Item
              name="tailwind"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>Tailwind</Checkbox>
            </Form.Item>
            <Form.Item
              name="bootstrap"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>Bootstrap</Checkbox>
            </Form.Item>
          </div>

          <div className='ant-modal-footer'>
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
    </div>
  );
}
