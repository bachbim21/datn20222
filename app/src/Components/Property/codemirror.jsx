import React, { useEffect, useState } from "react";
import { BsCodeSquare } from "react-icons/bs";
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import { Button, message, Modal, Tooltip } from "antd";
import { removeEvent } from "../../utils/drag";
import { decode } from "../../utils/token";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function Codemirror({ dom }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stringCode, setStringCode] = useState();
  const decodedToken = decode();
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
  const handleCopy = () => {

    navigator.clipboard.writeText(stringCode)
      .then(function() {
        console.log('copy!');
        message.success("Copy thành công")
      })
      .catch(function(error) {
        console.error("Failed to copy text to clipboard:", error);
      });
  }
  return (
    <>
      <li className={clsx(s.relative, s.flex, s['items-center'], s['justify-center'], s['list-none'], s['cursor-pointer'], s.border, s.rounded, s.m1, s['hover:border-blue-600'], s['aspect-square'], s['hover:bg-blue-200'], s['bg-gray-200'])}>
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
            mode: 'dark',
            language: html.language,
            lineNumbers: true,
            indentUnit: 8,
            readOnly: true
          }}
          clickThrough={true}
          onBeforeChange={handleEdit}
        />
        <div className='ant-modal-footer'>
          <Button
            className={clsx(s['inline-block'], s['mb-0'], s['mx-2'])}
            key="back"
            onClick={handleCancel}>
            Đóng
          </Button>

          <Button
            type="success"
            className={clsx(s['bg-green-500'], s['inline-block'], s['mb-2'])}
            onClick={handleCopy}>
            Copy
          </Button>
          {decodedToken ? (
            <Button
              type="primary"
              className={clsx(s['bg-blue-500'], s['inline-block'], s['mb-0'])}
              onClick={handleOk}>
              Lưu
            </Button>
          ) : null}
        </div>
      </Modal>
    </>
  );
}
