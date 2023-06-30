import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export default function ResourceElement() {
  const [ setKeyActive, setOpenKeys, setHeader] = useOutletContext();
  useEffect(()=>{
    setOpenKeys(['resources'])
    setKeyActive(['resources-html'])
    setHeader("Tài nguyên html")
  },[])
  return <>
    chart html
  </>
}
