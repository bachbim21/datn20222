import logo from "../../../assets/images/go.png";
import avatar from "../../../assets/images/avatar.png";
import { decode } from "../../../utils/app.function";
import { UserOutlined } from '@ant-design/icons';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { path } from "../../../redux/selector";
import { Dropdown, Space, message, Modal, Button, Input } from "antd";
import { CiSaveUp1 } from "react-icons/ci";
import { BsFillShareFill } from "react-icons/bs";
import { node } from "../../../redux/selector";
import NodeService from "../../../Service/node.sevice";
import { SetNode } from "../../../Pages/Project/node.slice";
import { FaWindowClose } from "react-icons/fa"
import ShareService from "../../../Service/share.service";

export default function Header() {
  const decodedToken = decode();
  const dispatch = useDispatch();
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState('');
  const nodePath = useSelector(path);
  const currentNode = useSelector(node);
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    ShareService().create(decodedToken.user_id, currentNode.id, emails).then((res)=>{
      message.success('Thành công')
    }).catch(e => {
      message.error('Thất bại!')
    })
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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

  var itemsPopup = [
    {
      label: (<span><NavLink
        to={`/profile/${decodedToken?.user_id}`}
      >
        Hồ sơ
      </NavLink></span>),
      key: '1',
    },
    {
      label: (<span><NavLink >
        Dự án
      </NavLink></span>),
      key: '2',
    },
    {
      label: (<span><NavLink
        to="/login"
        onClick={() => localStorage.removeItem("token")}
      >
        Đăng xuất
      </NavLink></span>),
      key: '3',
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
      NodeService()
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
    <header className="bg-custom fixed w-screen flex flex-row items-center justify-between h-14 top-0 shadow-md z-50">
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
          <Dropdown
            menu={{
              itemsPopup,
            }}
            trigger={['click']}
          >
            <div className="flex items-center mx-5 cursor-pointer" onClick={(e)=> e.preventDefault()}><img src={avatar} alt="image avatar" className="h-10"/></div>
            </Dropdown>
      ) : (
        <NavLink
          to="/login"
          className="px-2 py-1 text-white text-sm mx-5 bg-blue-600 rounded">
          Đăng nhập
        </NavLink>
      )}
      <Modal title="Chia sẻ dự án" open={isModalOpen} onCancel={handleCancel}
             footer={[
               <Button key="back" onClick={handleCancel}>
                 Huỷ
               </Button>,
               <Button key="submit" type="primary"  onClick={handleOk}>
                 Xác nhận
               </Button>,
             ]}>
        <Space direction="vertical" className="w-full text-base">
          <Space><h3>Nhập email người được chia sẻ</h3></Space>

        <Space.Compact style={{ width: '100%' }} >
          <Input className="h-10" value={email} onChange={(e)=> setEmail(e.target.value.trim())} size="large" placeholder="email" prefix={<UserOutlined />} />
          <Button type="primary" className="h-10" onClick={addEmail}>Thêm</Button>
        </Space.Compact>
        <Space>
          <ul className="mx-4">
            {
              emails.map((e)=> {
                return <div key={e} className=" flex flex-row items-center"><li  className="list-disc my-2 font-semibold border text-base px-4 rounded">{e}</li><FaWindowClose className="ml-4 cursor-pointer" onClick={()=>{
                  const newEmails = emails.filter((element) => element !== e);
                  setEmails([...newEmails])
                }
                } size="20px"/></div>
              })
            }
          </ul>
        </Space>
      </Space>
      </Modal>
    </header>
  );
}
