import React, { useEffect, useRef, useState } from "react";
import { Input, Menu, Dropdown } from "antd";

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

  const handleClick = () => {
    textAreaNode.focus();
    textAreaNode.setSelectionRange(2, 2);
    const selectionStart = textAreaNode.selectionStart;
    const selectionEnd = textAreaNode.selectionEnd;
    const leftText = value.slice(0, selectionStart);
    const rightText = value.slice(selectionEnd);
    const selectedText = value.slice(selectionStart, selectionEnd);
    console.log("leftText", leftText);
    console.log("rightText", rightText);
    console.log("selectedText", selectedText);
  };

  const handleVisibleChange = (flag = false, str) => {
    console.log("handleVisibleChange", flag);
    setVisible(flag);
    typeof str === "string" && setValue(value + str);
  };

  const handleInput = (e) => {
    const val = e.target.value;
    setValue(val);
    if (val.slice(val.length - 1) === "@") {
      handleVisibleChange(true);
    } else {
      handleVisibleChange();
    }
  };

  const handleSelect = (e) => {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
  };

  const menu = (
    <Menu
      onClick={() => handleVisibleChange(false, "666")}
      style={{ width: "30%" }}
    >
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <header onClick={handleClick}>商品保质期</header>
      <Dropdown
        overlay={menu}
        visible={visible}
        placement="topCenter"
        onVisibleChange={handleVisibleChange}
        trigger={[]}
      >
        <TextArea
          ref={textareaRef}
          onChange={handleInput}
          value={value}
          onSelect={handleSelect}
        />
      </Dropdown>
    </div>
  );
};

export default GoodsLife;
