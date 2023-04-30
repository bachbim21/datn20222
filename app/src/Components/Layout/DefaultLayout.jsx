import Header from "./Header";
import { Outlet } from "react-router";
import { useLoaderData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loading } from "../../redux/selector";
import { UserToken } from "./layout.slice";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect } from "react";
export default function DefaultLayout() {
  const dispatch = useDispatch();
  const decoded = useLoaderData();
  const loadingContext = useSelector(loading);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  useEffect(() => {
    if (decoded) {
      dispatch(UserToken(decoded));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="pt-14 min-h-screen">
        <Spin
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
