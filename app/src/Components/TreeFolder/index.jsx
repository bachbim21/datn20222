import {
  Tree,
  Button,
  Menu,
  Dropdown,
  Input,
  Space,
  Popconfirm,
  message,
} from "antd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { user, node } from "../../redux/selector";
import { useParams } from "react-router";
import {
  FileAddOutlined,
  FolderAddOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { setLocal } from "../../utils/app.function";
import NodeService from "../../Service/node.sevice";
import { SetNode } from "../../Pages/Project/node.slice";
const { DirectoryTree } = Tree;
export default function TreeFolder() {
  const { id } = useParams();
  const [treeData, setTreeData] = useState([]);
  const currentUser = useSelector(user);
  const dispatch = useDispatch();
  const [loadings, setLoadings] = useState([]);
  const [selected, setSelected] = useState([]);
  const [rightSelected, setRightSelected] = useState([]);
  const [newNode, setNewNode] = useState({
    new: null,
    old: null,
  });
  function getProject() {
    NodeService()
      .getOne(id)
      .then((response) => {
        setTreeData([response]);
      });
  }
  useEffect(() => {
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
        user: { id: currentUser.id },
      };
      NodeService()
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
      NodeService()
        .update(oldNode)
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
          message.error("Tên đã tồnt tại!");
        });
    }
  }
  function handleDelete(index) {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    NodeService()
      .deleteOne(rightSelected.id)
      .then(() => {
        getProject();
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[index] = false;
          return newLoadings;
        });
        message.success("Thành công!");
      })
      .catch((e) => {
        message.error("Không thành công!");
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
                size="small"
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
                size="small"
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
                size="small"
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
        <Popconfirm
          title="Xoá"
          placement="rightBottom"
          description="Bạn chắc chắn với hành động này?"
          onConfirm={handleDelete}
          okText="Đồng ý"
          cancelText="Huỷ">
          <Button
            type="primary"
            size="small"
            style={{ width: "40px", paddingBottom: "3px" }}
            icon={<DeleteOutlined className="text-center" />}
            loading={loadings[0]}
            danger></Button>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
  return (
    <div
      className=" absolute bottom-0 max-h-80 overflow-scroll min-w-full"
      style={{ maxWidth: "350px" }}>
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
    </div>
  );
}
