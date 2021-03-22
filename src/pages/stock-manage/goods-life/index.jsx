import React, { useEffect, useRef, useState } from "react";
import { Input, Menu, Dropdown, Button } from "antd";
import { users } from "./config";

import "./index.less";

const TextArea = Input.TextArea;

const GoodsLife = () => {
  const textareaRef = useRef(null);
  const [textAreaNode, setTextAreaNode] = useState({});
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (textareaRef) {
      const textArea = textareaRef.current.resizableTextArea.textArea;
      setTextAreaNode(textArea);
    }
  }, [textareaRef]);

  const getTargetNode = () => {
    const selectionStart = textAreaNode.selectionStart;
    const selectionEnd = textAreaNode.selectionEnd;
    const leftText = value.slice(0, selectionStart);
    const rightText = value.slice(selectionEnd);
    const selectedText = value.slice(selectionStart, selectionEnd);
    return {
      selectionStart,
      selectionEnd,
      leftText,
      rightText,
      selectedText,
      textAreaNode,
    };
  };

  const handleClick = () => {
    const {
      selectionStart,
      selectionEnd,
      leftText,
      rightText,
      selectedText,
      textAreaNode,
    } = getTargetNode();
    textAreaNode.focus();
    textAreaNode.setSelectionRange(2, 2);
    console.log("leftText", leftText);
    console.log("rightText", rightText);
    console.log("selectedText", selectedText);
  };

  const handleVisibleChange = (flag = false, str) => {
    const {
      selectionStart,
      selectionEnd,
      leftText,
      rightText,
      selectedText,
      textAreaNode,
    } = getTargetNode();
    setVisible(flag);
    if (typeof str === "string") {
      setValue(
        `${leftText.slice(0, leftText.length - 1)}【@${str}】${rightText}`
      );
    }
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setValue(val);
  };

  const handleSelect = (e) => {
    const {
      selectionStart,
      selectionEnd,
      leftText,
      rightText,
      selectedText,
      textAreaNode,
    } = getTargetNode();
    console.log("selectionStart", selectionStart);
    if (leftText.slice(leftText.length - 1) === "@") {
      handleVisibleChange(true);
    } else {
      handleVisibleChange();
    }
  };

  const handleSubmit = () => {
    alert(value);
  };

  const menu = (
    <Menu style={{ width: "30%" }}>
      {users.map((u) => (
        <Menu.Item
          key={u.id}
          onClick={() => handleVisibleChange(false, u.name)}
        >
          {u.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <header onClick={handleClick} className="at-title">
        TextArea的“@”功能
      </header>
      <Dropdown
        overlay={menu}
        visible={visible}
        placement="topCenter"
        onVisibleChange={handleVisibleChange}
        trigger={[]}
      >
        <TextArea
          className="at-textarea"
          ref={textareaRef}
          onChange={handleInput}
          value={value}
          onSelect={handleSelect}
          placeholder="请输入评论……"
        />
      </Dropdown>
      <div className="at-submit">
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </div>
    </div>
  );
};

export default GoodsLife;
