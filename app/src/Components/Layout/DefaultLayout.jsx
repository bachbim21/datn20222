import Header from "./Header";
import { Outlet } from "react-router";
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
