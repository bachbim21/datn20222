export default function ElementDefault({ data, draggable, onDragStart }) {
  const Tag = data.tag;
  if (Tag == "img") {
    return (
      <img
        src="../../assets/images/go.png"
        alt=""
        className={data.classes}
        draggable={draggable}
        onDragStart={onDragStart}
      />
    );
  }
  return (
    <Tag
      readOnly={data.def ? true : false}
      className={
        data.classes + " transition ease-in-out delay-150 hover:-translate-x-1"
      }
      value={
        data.tag == "input" ? data.text : data.tag == "select" ? null : null
      }
      draggable={draggable}
      onDragStart={onDragStart}
      style={{
        width: "110px",
      }}>
      {data.tag == "input" ? null : data.text}
    </Tag>
  );
}
