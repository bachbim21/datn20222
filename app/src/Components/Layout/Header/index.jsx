import logo from "../../../assets/images/go.png";
import { decode } from "../../../utils/token";
import { MailOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { path } from "../../../redux/selector";
import { Dropdown, Space, message, Modal, Button, Input } from "antd";
import { CiSaveUp1 } from "react-icons/ci";
import { BsFillShareFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { urlApi } from "../../../base.service";
import {
  node,
  projectIdSelector,
  showModelShare,
} from "../../../redux/selector";
import NodeService from "../../../Service/node.service";
import { SetNode, SetShowShare } from "../../../Pages/Project/node.slice";
import { FaWindowClose } from "react-icons/fa";
import ShareService from "../../../Service/share.service";
import UserService from "../../../Service/user.service";
import LoadingDetail from "../../Loading&Popup/LoadingDetail";
import DropDownProfile from "./drodown";
import clsx from "clsx";
import s from "../../../assets/css/app.module.css"
export default function Header() {
  const decodedToken = decode();
  const dispatch = useDispatch();
  const showMShare = useSelector(showModelShare);
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");
  const nodePath = useSelector(path);
  const currentNode = useSelector(node);
  const location = useLocation();
  const nodeService = new NodeService();
  const userService = new UserService();
  const shareService = new ShareService();
  const [isModalOpen, setIsModalOpen] = useState({
    open: false,
    loading: false,
  });
  const projectId = useSelector(projectIdSelector);

  useEffect(() => {
    if (showMShare) {
      showModal();
    }
  }, [showMShare]);
  const showModal = () => {
    setIsModalOpen({
      open: true,
      loading: true,
    });
    if (!projectId) return;
    userService
      .getShareEmail(decodedToken.user_id, projectId)
      .then((response) => {
        setEmails(response);
      })
      .catch((e) => message.error("Lỗi máy chủ, vui lòng thử lại"));
    setIsModalOpen({
      open: true,
      loading: false,
    });
  };
  const handleOk = () => {
    if (emails.length == 0)
      return message.warning("Danh sách hiện tại đang trống");
    shareService
      .create(decodedToken.user_id, projectId, emails)
      .then((res) => {
        message.success("Thành công");
      })
      .catch((e) => {
        message.error("Thất bại!");
      });
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen({
      open: false,
      loading: false,
    });
    dispatch(SetShowShare(false));
  };
  const items = [
    {
      key: "save",
      label: <span onClick={handleSave}>Lưu</span>,
      icon: <CiSaveUp1 size="20px" />,
    },
    {
      key: "share",
      label: <span onClick={showModal}>Chia sẻ</span>,
      icon: <BsFillShareFill size="15px" onClick={showModal} />,
    },
    {
      key: "dowload",
      label: <span onClick={downLoadFile}>Tải xuống</span>,
      icon: <AiOutlineDownload size="15px" onClick={showModal} />,
    },
  ];
  function downLoadFile() {
    nodeService.downFile(currentNode?.id).then(res => {
      const a = document.createElement("a");
      a.href = urlApi + "/download?filePath=" + res.url;
      a.download = "download";
      a.click();
    })
  }
  function handleSave() {
    let currentDom = document.getElementById("root-page");
    if (currentDom != null) {
      var stringCode = currentDom.outerHTML.toString();

      let finalCode = stringCode
        .replaceAll("hover-dashed", "")
        .replaceAll("click-border", "");
      let update = {
        ...currentNode,
        code: finalCode,
      };
      nodeService
        .update(update, update.id)
        .then((res) => {
          message.success("Lưu thành công");
          dispatch(
            SetNode({
              node: res,
              path: nodePath,
            })
          );
        })
        .catch((e) => message.error("Lưu không thành công!"));
    }
  }
  function addEmail() {
    if (email == null || email.length == 0 || emails.includes(email)) return;
    setEmails([...emails, email]);
    setEmail("");
  }

  return (
    <header className={clsx(s['bg-white'], s.fixed, s['w-screen'], s.flex, s['flex-row'], s['items-center'], s['justify-between'], s['h-14'], s['top-0'], s['drop-shadow-lg'], s['shadow-md'], s['z-50'])}>
      <div className={clsx(s.flex, s['items-center'], s['mx-5'])}>
        <NavLink to="/">
          <img src={logo} alt="" className={clsx(s['h-12'], s['object-cover'], s['w-20'])} />
        </NavLink>

        <span className={clsx(s.italic, s['font-sans'])}></span>
        <ul className={clsx(s.hidden, s['md:flex'], s['flex-row'], s['ml-10'], s['gap-5'])}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-blue-800' : 'hover:text-blue-500'
              }
              to="/"
              end
              style={{ textDecoration: "none" }}>
              <span>Trang chủ</span>
            </NavLink>
          </li>
          <li className={decodedToken?.user_id ? "" : clsx(s.hidden)}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-blue-800' : 'hover:text-blue-500'
              }
              to={`profile/${decodedToken?.user_id}/list-project`}
              end
              style={{ textDecoration: "none" }}>
              <span>Dự án</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {location != null && location.pathname.includes("/project") && (
        <div className={clsx(s['-ml-28'], s['px-4'], s['cursor-pointer'], s['border'], s['bg-white'], s['rounded'])}>
          <Dropdown
            placement="bottom"
            menu={{
              items,
            }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>{nodePath}</Space>
            </a>
          </Dropdown>
        </div>
      )}
      {decodedToken ? (
        <DropDownProfile i />
      ) : (
        <NavLink
          to="/login"
          className={clsx(s['px-2'], s['py-1'], s['text-white'], s['text-sm'], s['mx-5'], s['bg-blue-600'], s['rounded'])}>
          Đăng nhập
        </NavLink>
      )}
      <Modal
        title="Chia sẻ dự án"
        open={isModalOpen.open}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Huỷ
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Xác nhận
          </Button>,
        ]}>
        <Space direction="vertical" className={clsx(s['w-full'], s['text-base'])}>
          <Space>
            <h3>Nhập email người được chia sẻ</h3>
          </Space>

          <Space.Compact style={{ width: "100%" }}>
            <Input
              className={clsx(s['h-10'])}
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              size="large"
              placeholder="email"
              prefix={<MailOutlined />}
            />
            <Button type="primary" className={clsx(s['h-10'])} onClick={addEmail}>
              Thêm
            </Button>
          </Space.Compact>
          <div className={clsx(s['w-full'])}>
            {isModalOpen.loading ? (
              <LoadingDetail />
            ) : (
              <ul className="mx-4">
                {emails.map((e) => {
                  return (
                    <div key={e} className={clsx(s.flex, s['flex-row'], s['items-center'])}>
                      <li className={clsx(s['list-disc'], s['my-2'], s.border, s['text-base'], s['px-4'], s.rounded)}>
                        {e}
                      </li>
                      <FaWindowClose
                        className={clsx(s['ml-4'], s['cursor-pointer'], s['text-yellow-400'])}
                        onClick={() => {
                          const newEmails = emails.filter(
                            (element) => element !== e
                          );
                          setEmails([...newEmails]);
                        }}
                        size="20px"
                      />
                    </div>
                  );
                })}
              </ul>
            )}
          </div>
        </Space>
      </Modal>
    </header>
  );
}
