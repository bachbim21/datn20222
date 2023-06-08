import { dragStartCopy } from "../../utils/app.function";
export default function ElementDefault({ data }) {
  const Tag = data.tag;
  if (Tag == "img") {
    return (
      <img
        id={data.configId}
        src="../../assets/images/go.png"
        alt=""
        className={data.classes}
        draggable='true'
        onDragStart={dragStartCopy}
      />
    );
  }
  return (
    <Tag
      readOnly={data.def ? true : false}
      id={data.configId}
      className={
        data.classes + " transition ease-in-out delay-150 hover:-translate-x-1"
      }
      value={
        data.tag == "input" ? data.text : data.tag == "select" ? null : null
      }
      draggable='true'
      onDragStart={dragStartCopy}
      style={{
        width: "110px",
      }}>
      {data.tag == "input" ? null : data.text}
    </Tag>
  );
}
