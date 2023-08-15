
import { NavLink, useOutletContext } from "react-router-dom";
import NodeService from "../../Service/node.service";
import { useEffect, useState } from "react";
import { Tooltip, Pagination, Button, Modal, message } from "antd";
import TreeFolder from "../../Components/TreeFolder";
import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { SetProjectId, SetShowShare } from "../Project/node.slice";
import { urlApi } from "../../base.service";
import { handleError } from "../../utils/error";
import clsx from "clsx"
import s from "../../assets/css/app.module.css"
export default function ListProject() {
  const dispatch = useDispatch();
  const [user, setUser, setKeyActive, setOpenKeys, setHeader] =
    useOutletContext();
  const [tableConfig, SetTableConfig] = useState({
    currentPage: 0,
    totalElements: null,
  });
  const [isModalOpen, setIsModalOpen] = useState({
    open: false,
    loading: false,
  });
  const nodeService = new NodeService();
  const [projects, setProject] = useState([]);
  const [isDelete, setIsDelete] = useState(null);
  useEffect(() => {
    setKeyActive(["list-project"]);
    setOpenKeys(["project"]);
    setHeader({
      title: "Danh sách dự án",
      sub: "Quản lý dự án",
    });
    if (!user) return;
    let param = `userId=${user?.id}&page=${tableConfig.currentPage}&size=10`;
    nodeService
      .getList(param)
      .then((res) => {
        setProject(res.content);
        SetTableConfig({
          currentPage: res.number,
          totalElements: res.totalElements,
        });
      })
      .catch((e) => {
        handleError(e);
      });
  }, [user]);

  function getPage(page, pageSize) {
    let param = `userId=${user?.id}&page=${page}&size=10`;
    nodeService
      .getList(param)
      .then((res) => {
        setProject(res.content);
        SetTableConfig({
          currentPage: res.number,
          totalElements: res.totalElements,
        });
      })
      .catch((e) => {
        handleError(e);
      });
  }
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
  }
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
  function download(id) {
    nodeService.createZip(id).then((res) => {
      const a = document.createElement("a");
      a.href = urlApi + "/download?filePath=" + res.url;
      a.download = "download";
      a.click();
    });
  }
  function handleDelete() {
    nodeService
      .delete(isDelete)
      .then(() => {
        message.success("Thành công!");
        getPage(0)
      })
      .catch((e) => {
        handleError(e)
      });
  }


  return (
    <>
      <table className={clsx(s['w-full'], s['my-2'])}>
        <thead className={clsx(s['text-white'], s['bg-yellow-400'], s['h-10'])}>
        <tr className="">
          <th className={clsx(s['text-left'], s['pl-16'])}>Dự án</th>
          <th className={clsx(s['w-36'], s['hidden'], s['mobile:table-cell'])}>Ngày tạo</th>
          <th className={clsx(s['w-36'], s['hidden'], s['mobile:table-cell'])}>Ngày cập nhật</th>
          <th className="" style={{ width: "150px" }}>
            Thao tác
          </th>
        </tr>
        </thead>
        <tbody>
        {projects &&
          projects.length > 0 &&
          projects.map((p) => {
            return (
              <tr key={p.id} className={clsx(s['border-b'], s['border-gray-300'])}>
                <td>
                  <TreeFolder data={p} view={false} />
                </td>
                <td className={clsx(s['text-center'], s['hidden'], s['mobile:table-cell'])}>
                  {convertMillisecondsToDate(p?.created)}
                </td>
                <td className={clsx(s['text-center'], s['hidden'], s['mobile:table-cell'])}>
                  {convertMillisecondsToDate(p?.updated)}
                </td>
                <td className={clsx(s['text-center'])}>
                  <Tooltip placement="top" title="chỉnh sửa">
                    <NavLink to={`/project/${p.id}`}>
                      <EditOutlined
                        className={clsx(s['hover:cursor-pointer'], s['hover:bg-blue-200'], s['hover:rounded-full'])}
                        style={{
                          color: "green",
                          fontSize: "18px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                    </NavLink>
                  </Tooltip>
                  <Tooltip placement="top" title="tải xuống">
                      <span onClick={() => download(p.id)}>
                        <DownloadOutlined
                          className={clsx(s['hover:cursor-pointer'], s['hover:bg-blue-200'], s['hover:rounded-full'])}
                          style={{
                            color: "gray",
                            fontSize: "18px",
                            width: "30px",
                            height: "30px",
                          }}
                        />
                      </span>
                  </Tooltip>
                  <Tooltip placement="top" title="chia sẻ">
                    <ShareAltOutlined
                      className={clsx(s['hover:cursor-pointer'], s['hover:bg-blue-200'], s['hover:rounded-full'])}
                      style={{
                        color: "indigo",
                        fontSize: "18px",
                        width: "30px",
                        height: "30px",
                      }}
                      onClick={() => {
                        dispatch(SetShowShare(true));
                        dispatch(SetProjectId(p.id));
                      }}
                    />
                  </Tooltip>
                  <Tooltip placement="top" title="xoá">
                      <DeleteOutlined
                        onClick={() => {setIsDelete(p.id)}}
                        className={clsx(s['hover:cursor-pointer'], s['hover:bg-blue-200'], s['hover:rounded-full'])}
                        style={{
                          color: "red",
                          fontSize: "18px",
                          width: "30px",
                          height: "30px",
                        }}
                      />
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={clsx(s['absolute'], s['bottom-2'], s['right-1/2'], s['translate-x-1/2'])}>
        <Pagination
          simple
          current={tableConfig.currentPage + 1}
          total={tableConfig.totalElements}
          onChange={getPage}
        />
      </div>
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
            onClick={() => handleDelete()}>
            Xác nhận
          </Button>,
        ]}></Modal>
      </>
  );
}
