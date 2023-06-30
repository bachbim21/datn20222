import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function ListUser() {
  const [ setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  useEffect(()=>{
    setOpenKeys(['users'])
    setKeyActive(['users-list'])
    setHeader("Quản lý người dùng")
  },[])
  return <>
    list user
  </>
}
