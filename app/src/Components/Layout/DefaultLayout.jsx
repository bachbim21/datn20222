import Header from "./Header";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { loading } from "../../redux/selector";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import clsx from "clsx"
import s from "../../assets/css/app.module.css"
export default function DefaultLayout() {
  const loadingContext = useSelector(loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


  return (
    <>
      <Header />
      <div className={clsx(s['pt-14']) + " min-h-[calc(100%_-_3.5rem)]"}>
        <Spin
          className={clsx(s.fixed)}
          tip={loadingContext.text}
          size="large"
          indicator={antIcon}
          spinning={loadingContext.status}>
          <Outlet />
        </Spin>
      </div>
    </>
  );
}
