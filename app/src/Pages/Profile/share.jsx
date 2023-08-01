import profile from "../../assets/images/avatar.png";
import { NavLink, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import NodeService from "../../Service/node.service";
import { message, Pagination, Tooltip } from "antd";
import TreeFolder from "../../Components/TreeFolder";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import { SetProjectId, SetShowShare } from "../Project/node.slice";
import { urlApi } from "../../base.service";

export default function ShareProject() {
  const dispatch = useDispatch();
  const [user, setUser, setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  const [projects, setProject] = useState([]);
  const [tableConfig, SetTableConfig] = useState({
    currentPage: 0,
    totalElements: null,
  })
  const nodeService = new NodeService()
  useEffect(() => {
    setKeyActive(["share-project"]);
    setOpenKeys(["project"]);
    setHeader({
      title: "Dự án được chia sẻ",
      sub: "Quản lý dự án"
    })
    if (!user) return;
    let param = `userId=${user?.id}&page=${tableConfig.currentPage}&size=10`
    nodeService.getShare(param).then(res => {
      setProject(res.content);
      SetTableConfig({
        currentPage: res.number,
        totalElements :res.totalElements
      })
    }).catch(e => {
      message.error("Không có quyền truy cập");
    });
  }, [user]);
function getPage(page, pageSize) {
  let param = `userId=${user?.id}&page=${page}&size=10`
  nodeService.getShare(param).then(res => {
    setProject(res.content);
    SetTableConfig({
      currentPage: res.number,
      totalElements :res.totalElements
    })
  }).catch(e => {
    message.error("Không có quyền truy cập");
  });
}
  function download(id) {
    nodeService.createZip(id).then(res => {
      console.log(res);
      const a = document.createElement('a');
      a.href = urlApi + "/download?filePath=" + res.url;
      a.download = "download";
      a.click()
    })
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
  return <>
    <table className="w-full my-2">
      <thead className="text-white bg-yellow-400 h-10">
      <tr className="">
        <th className="text-left pl-16">Dự án</th>
        <th className="w-36  hidden mobile:table-cell">Chủ sở hữu</th>
        <th className="w-36 hidden mobile:table-cell">Ngày cập nhật</th>
        <th className="" style={{ width: "70px" }}>Thao tác</th>
      </tr>
      </thead>
      <tbody>
      {
        projects && projects.length > 0 && projects.map((p) => {
          return <tr key={p.id} className="border-b border-gray-300">
            <td><TreeFolder data={p} view={true}/></td>
            <td className="hidden mobile:table-cell">{p?.user.email}</td>
            <td className="text-center hidden mobile:table-cell">{convertMillisecondsToDate(p?.updated)}</td>
            <td className="text-center">
              <Tooltip placement="top" title="xem">
                <Tooltip placement="top" title="tải xuống">
                <span onClick={()=>download(p.id)}>
                  <DownloadOutlined className="hover:cursor-pointer hover:bg-blue-200 hover:rounded-full" style={{
                    color: "gray",
                    fontSize: "18px",
                    width: "30px",
                    height: "30px"
                  }}
                  />
                  </span>
                </Tooltip>
                <NavLink to={`/project/${p.id}`}>
                  <EyeOutlined  className="hover:cursor-pointer hover:bg-blue-200 hover:rounded-full" style={{
                    color: "green",
                    fontSize: "18px",
                    width: "30px",
                    height: "30px"
                  }} />
                </NavLink>
              </Tooltip>
            </td>
          </tr>;
        })
      }
      </tbody>
    </table>
    <div className="absolute bottom-2 right-1/2 translate-x-1/2"><Pagination simple current={tableConfig.currentPage +1 } total={tableConfig.totalElements} onChange={getPage}/>
    </div>
  </>
}