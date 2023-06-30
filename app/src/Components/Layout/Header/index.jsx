import logo from "../../../assets/images/go.png";
import { decode } from "../../../utils/token";
import { MailOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { path } from "../../../redux/selector";
import { Dropdown, Space, message, Modal, Button, Input } from "antd";
import { CiSaveUp1 } from "react-icons/ci";
import { BsFillShareFill } from "react-icons/bs";
import { node, projectIdSelector, showModelShare } from "../../../redux/selector";
import NodeService from "../../../Service/node.service";
import { SetNode, SetShowShare } from "../../../Pages/Project/node.slice";
import { FaWindowClose } from "react-icons/fa"
import ShareService from "../../../Service/share.service";
import UserService from "../../../Service/user.service";
import LoadingDetail from "../../Loading&Popup/LoadingDetail";
import DropDownProfile from "./drodown";
export default function Header() {
  const decodedToken = decode();
  const dispatch = useDispatch();
  const  showMShare = useSelector(showModelShare);
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const nodePath = useSelector(path);
  const currentNode = useSelector(node);
  const location = useLocation();
  const nodeService = new NodeService()
  const [isModalOpen, setIsModalOpen] = useState({
    open: false,
    loading: false
  });
  const projectId = useSelector(projectIdSelector);

  useEffect(()=>{
    if(showMShare) {
      showModal();
    }
  }, [showMShare])
  const showModal = () => {
    setIsModalOpen({
      open: true,
      loading: true
    });
    if(!projectId) return
    UserService().getShareEmail(decodedToken.user_id, projectId).then((response) => {
      setEmails(response)
    }).catch(e => message.error("Lỗi máy chủ, vui lòng thử lại"))
    setIsModalOpen({
      open: true,
      loading: false
    });
  };
  const handleOk = () => {
    if(emails.length == 0) return message.warning("Danh sách hiện tại đang trống")
    ShareService().create(decodedToken.user_id, projectId, emails).then((res)=>{
      message.success('Thành công')
    }).catch(e => {
      message.error('Thất bại!')
    })
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen({
      open: false,
      loading: false
    });
    dispatch(SetShowShare(false))
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
      icon: <BsFillShareFill size="15px" onClick={showModal}/>,
    },
  ];


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
    if(email==null || email.length == 0 || emails.includes(email)) return
    setEmails([...emails, email])
    setEmail('')
  }

  return (
    <header className="bg-white fixed w-screen flex flex-row items-center justify-between h-14 top-0 drop-shadow-lg shadow-md z-50">
      <div className="flex items-center mx-5">
        <NavLink to="/">
          <img src={logo} alt="" className="h-12 object-cover w-20" />
        </NavLink>

        <span className="italic font-sans"></span>
      </div>
      {location != null && location.pathname.includes("/project")  && (
        <div className="px-4 cursor-pointer border bg-white rounded">
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
        <DropDownProfile i/>
      ) : (
        <NavLink
          to="/login"
          className="px-2 py-1 text-white text-sm mx-5 bg-blue-600 rounded">
          Đăng nhập
        </NavLink>
      )}
      <Modal title="Chia sẻ dự án" open={isModalOpen.open} onCancel={handleCancel}
             footer={[
               <Button key="back" onClick={handleCancel}>
                 Huỷ
               </Button>,
               <Button  key="submit" type="primary"  onClick={handleOk}>
                 Xác nhận
               </Button>,
             ]}>
        <Space direction="vertical" className="w-full text-base">
          <Space><h3>Nhập email người được chia sẻ</h3></Space>

        <Space.Compact style={{ width: '100%' }} >
          <Input className="h-10" value={email} onChange={(e)=> setEmail(e.target.value.trim())} size="large" placeholder="email" prefix={<MailOutlined />} />
          <Button type="primary" className="h-10" onClick={addEmail}>Thêm</Button>
        </Space.Compact>
        <div className="w-full">
          {isModalOpen.loading ? <LoadingDetail/> :
          <ul className="mx-4">
            {
              emails.map((e)=> {
                return <div key={e} className=" flex flex-row items-center"><li  className="list-disc my-2 border text-base px-4 rounded">{e}</li><FaWindowClose className="ml-4 cursor-pointer text-yellow-400" onClick={()=>{
                  const newEmails = emails.filter((element) => element !== e);
                  setEmails([...newEmails])
                }
                } size="20px"/></div>
              })
            }
          </ul>
          }
        </div>
      </Space>
      </Modal>
    </header>
  );
}
