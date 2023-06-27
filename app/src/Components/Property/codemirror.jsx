import React, { useRef, useEffect, useState } from "react";
import { SlSizeFullscreen } from "react-icons/sl";
import { BsCodeSquare } from "react-icons/bs";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import { Button, Modal, Tooltip } from "antd";
import { removeEvent } from "../../utils/drag";
export default function Codemirror({ dom }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stringCode, setStringCode] = useState();
  useEffect(() => {
    if(dom)  {
      removeEvent(dom)
    }
    const formattedCode = prettier.format(
      dom?.id ? dom.outerHTML.toString() : "",
      {
        parser: "html",
        plugins: [parserHtml],
      }
    );
    setStringCode(formattedCode);
  }, [dom?.id]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleEdit = (editor, data, value) => {
    setStringCode(value);
  };
  return (
    <>
      <li className="relative flex items-center justify-center list-none cursor-pointer border rounded m-1 hover:border-blue-600 aspect-square hover:bg-blue-200 bg-gray-200">
        <Tooltip placement="leftTop" title="text">
          <span onClick={showModal}>
            <BsCodeSquare
              size="20px"
              color="black"
              style={{
                width: "100%",
              }}
            />
          </span>
        </Tooltip>
      </li>
      <Modal
        title="Code Html"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        width={900}
        onCancel={handleCancel}
        footer={null}>
        <CodeMirror
          value={stringCode}
          options={{
            mode: "htmlmixed",
            theme: "default",
            lineNumbers: true,
            indentUnit: 8,
          }}
          clickThrough={true}
          onBeforeChange={handleEdit}
        />
        <div className="ant-modal-footer">
          <Button
            className="inline-block mb-0 mx-4"
            key="back"
            onClick={handleCancel}>
            Đóng
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            className="bg-blue-500 inline-block mb-0"
            onClick={handleOk}>
            Copy
          </Button>
        </div>
      </Modal>
    </>
  );
}
