import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function ResourceCss() {
  const [ setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  useEffect(()=>{
    setOpenKeys(['resources'])
    setKeyActive(['resources-css'])
    setHeader("Tài nguyên css")
  },[])
  return <>
    chart css
  </>
}