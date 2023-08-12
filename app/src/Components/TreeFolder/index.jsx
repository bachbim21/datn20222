import {
  Tree,
  Button,
  Menu,
  Dropdown,
  Input,
  Space,
  message,
  Modal,
} from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  FileAddOutlined,
  FolderAddOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { setLocal } from "../../utils/class";
import NodeService from "../../Service/node.service";
import {
  SetNode,
  SetProjectId,
} from "../../Pages/Project/node.slice";
import { decode } from "../../utils/token";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"

const { DirectoryTree } = Tree;
export default function TreeFolder({ data, view }) {
  const { id } = useParams();
  const [treeData, setTreeData] = useState([]);
  const currentUser = decode();
  const dispatch = useDispatch();
  const [loadings, setLoadings] = useState([]);
  const [selected, setSelected] = useState([]);
  const [rightSelected, setRightSelected] = useState([]);
  const nodeService = new NodeService();
  const [newNode, setNewNode] = useState({
    new: null,
    old: null,
  });
  const [isModalOpen, setIsModalOpen] = useState({
    open: false,
    loading: false,
  });
  function getProject() {
    let pId = null;
    if (id) {
      pId = id;
    } else {
      pId = data?.id;
    }
    if (!pId) return;
    nodeService.getOne(pId).then((response) => {
      setTreeData([response]);
      dispatch(SetProjectId(id));
    });
  }

  useEffect(() => {
    if (data?.id) {
      setTreeData([data]);
      return;
    }
    getProject();
  }, [id]);
  const findFilePath = (fileKey, folders, path) => {
    for (const folder of folders) {
      if (folder.keyTree == fileKey) {
        return {
          path: `${path}/${folder.name}`,
          key: fileKey,
        };
      }
      if (folder.children.length > 0) {
        const foundFile = findFilePath(
          fileKey,
          folder.children,
          `${path}/${folder.name}`
        );
        if (foundFile) {
          return foundFile;
        }
      }
    }
    return null;
  };

  const onSelect = (selectedKeys, info) => {
    const selectedFileKey = selectedKeys[0];
    setSelected(info.node);
    let pathKey = findFilePath(selectedFileKey, treeData, "");
    if (info.selected == true && info.selectedNodes[0].file == true) {
      setLocal(pathKey, treeData[0].id);
      dispatch(SetNode({ node: info.selectedNodes[0], path: pathKey.path }));
    }
  };

  // const onExpand = (keys, info) => {
  // console.log("Trigger Expand", keys, info);
  // };

  const [open, setOpen] = useState(false);
  const handleOpenChange = (flag) => {
    setOpen(flag);
  };
  const handleRightClick = ({ event, node }) => {
    event.preventDefault();
    setRightSelected(node);
  };

  const [selectedMenu, setSelectedMenu] = useState({
    selected: null,
    menuItem: null,
  });

  const handleMenuClick = ({ domEvent, key }) => {
    domEvent.preventDefault();
    setSelectedMenu({ ...selectedMenu, selected: key });
  };

  function handleEditNew(e) {
    e.preventDefault();
    setNewNode({ ...newNode, new: e.target.value });
  }

  function handleEditOld(e) {
    e.preventDefault();
    setNewNode({ ...newNode, old: e.target.value });
  }

  function handleSubmitNew(file, index) {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    if (newNode.new?.length > 0) {
      let node = {
        parentId: rightSelected.id,
        name: newNode.new,
        file: file,
        tech: null,
        user: { id: currentUser.user_id },
      };
      nodeService
        .create(node)
        .then((res) => {
          getProject();
          setOpen(false);
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
          message.success("Thành công!");
        })
        .catch((e) => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
          message.error("Tên đã tồn tại!");
        });
    }
  }

  function handleSubmitOld(file, index) {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    if (newNode.old?.length > 0) {
      let oldNode = { ...rightSelected, name: newNode.old };
      nodeService
        .update(oldNode, oldNode?.id)
        .then((res) => {
          getProject();
          setOpen(false);
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
          message.success("Thành công!");
        })
        .catch((e) => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
          });
          message.error("Tên đã tồn tại!");
        });
    }
  }

  function handleDelete(index) {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    nodeService
      .delete(rightSelected.id)
      .then(() => {
        getProject();
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
        message.success("Thành công!");
      })
      .catch(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
      });
  }

  const renderMenuItem = (menuItem) => {
    if (selectedMenu.selected == menuItem.key) {
      switch (menuItem.key) {
        case "create_file":
          return (
            <Space.Compact>
              <Input
                placeholder="tên file"
                style={{ width: 100 }}
                onChange={handleEditNew}
              />
              <Button
                type="primary"
                // size="small"
                style={{ backgroundColor: "#1677ff" }}
                loading={loadings[0]}
                icon={<SaveOutlined />}
                onClick={() => handleSubmitNew(true, 0)}></Button>
            </Space.Compact>
          );
        case "create_folder":
          return (
            <Space.Compact>
              <Input
                placeholder="tên folder"
                status=""
                style={{ width: 100 }}
                onChange={handleEditNew}
              />
              <Button
                type="primary"
                // size="small"
                style={{ backgroundColor: "#1677ff" }}
                loading={loadings[0]}
                icon={<SaveOutlined />}
                onClick={() => handleSubmitNew(false, 0)}></Button>
            </Space.Compact>
          );

        case "rename":
          return (
            <Space.Compact>
              <Input
                style={{ width: 100 }}
                defaultValue={rightSelected.name}
                onChange={handleEditOld}
              />
              <Button
                // size="small"
                type="primary"
                style={{ backgroundColor: "#1677ff" }}
                onClick={() => handleSubmitOld(null, 0)}
                icon={<SaveOutlined />}
                loading={loadings[0]}></Button>
            </Space.Compact>
          );
      }
    }
    return <>{menuItem.title}</>;
  };

  const renderTreeNodes = (data) => {
    return data.map((item) => (
      <Tree.TreeNode
        {...item}
        key={item.keyTree}
        title={item.name}
        isLeaf={item.file}>
        {item.children.length > 0 && renderTreeNodes(item.children)}
      </Tree.TreeNode>
    ));
  };
  function handleOpenModal() {
    setIsModalOpen({
      open: true,
      loading: false,
    });
  }
  const handleCancel = () => {
    setIsModalOpen({
      open: false,
      loading: false,
    });
  };
  const widgetMenu = (
    <Menu>
      {rightSelected.file == false && (
        <Menu.Item
          key="create_file"
          icon={<FileAddOutlined />}
          onClick={handleMenuClick}>
          {renderMenuItem({ key: "create_file", title: "Tạo file" })}
        </Menu.Item>
      )}
      {rightSelected.file == false && (
        <Menu.Item
          key="create_folder"
          icon={<FolderAddOutlined />}
          onClick={handleMenuClick}>
          {renderMenuItem({ key: "create_folder", title: "Tạo folder" })}
        </Menu.Item>
      )}
      <Menu.Item key="rename" icon={<EditOutlined />} onClick={handleMenuClick}>
        {renderMenuItem({ key: "rename", title: "Sửa tên" })}
      </Menu.Item>
      <Menu.Item
        key="delete"
        className=" text-center"
        onClick={handleMenuClick}>
        <Button
          type="primary"
          size="small"
          style={{ width: "40px", paddingBottom: "3px" }}
          icon={<DeleteOutlined className="text-center" />}
          loading={loadings[0]}
          onClick={handleOpenModal}
          danger></Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className={clsx(
        data ? s['max-h-80'] : s['absolute'],
        s['bottom-0'],
        s['overflow-scroll'],
        s['min-w-full'],
        {
          [s['max-h-80']]: data,
          [s['absolute']]: !data,
        }
      )}
      style={{ maxWidth: "350px" }}>
      {view ? (
        <DirectoryTree
          showLine={true}
          onSelect={onSelect}
          // onExpand={onExpand}
          onRightClick={handleRightClick}>
          {renderTreeNodes(treeData)}
        </DirectoryTree>
      ) : (
        <Dropdown
          overlay={widgetMenu}
          onOpenChange={handleOpenChange}
          open={open}
          placement="topRight"
          trigger={["contextMenu"]}
          arrow={{
            pointAtCenter: true,
          }}>
          <DirectoryTree
            showLine={true}
            onSelect={onSelect}
            // onExpand={onExpand}
            onRightClick={handleRightClick}>
            {renderTreeNodes(treeData)}
          </DirectoryTree>
        </Dropdown>
      )}
      <Modal
        title="Xác nhận hành động xoá"
        open={isModalOpen.open}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Huỷ
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={() => handleDelete(0)}>
            Xác nhận
          </Button>,
        ]}></Modal>
    </div>
  );
}
