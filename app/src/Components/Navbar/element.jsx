import { useEffect, useRef, useState } from "react";
import { SetDomId } from "./element.slice";

export function Element(data) {
  const Tag = data.tag;
  const elementRef = useRef(null);

  var style = {
    width: data.width,
    height: data.height,
    display: data.display,
    transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
  };
  useEffect(() => {
    const element = elementRef.current;
    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    data.dispatch(SetDomId(data.id));
  };

  return (
    <Tag
      ref={elementRef}
      id={data.id}
      draggable="true"
      style={style}
      className={data.className}>
      {data.tag == "input" ? null : data.text}
    </Tag>
  );
}
