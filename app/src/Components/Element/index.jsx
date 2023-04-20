import { useState, useEffect, useRef, useReducer, useMemo } from "react";

export default function Element({ data, draggable, onDragStart }) {
  const Tag = data.tag;

  return (
    <Tag
      readOnly={data.def ? true : false}
      className={data.classes}
      value={data.tag == "input" ? data.text : null}
      draggable={draggable}
      onDragStart={onDragStart}
      // style={{
      //   width: width ? width : "40px",
      //   height: height ? height : "30px",
      // }}
    >
      {data.tag == "input" ? null : data.text}
    </Tag>
  );
}
