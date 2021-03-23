import React, { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { Menu, Dropdown, message, Button } from "antd";
import { users, getDifferentCode, getUserId } from "./config";

import "./index.less";

const GoodsStock = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState("");
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState([]);
  const contentEditableRef = useRef();

  const handleVisibleChange = (flag = false, user) => {
    setVisible(flag);
    if (typeof user === "object") {
      if (getUserId(text).find((userId) => user.id === userId)) {
        message.error("该用户已存在");
        const strValue = text.slice(0, index) + text.slice(index + 1);
        setText(strValue);
        return;
      }
      const atStr = `<span class="stock-at" contenteditable="false" data-id="${user.id}">@${user.name}</span>`;
      const strValue = text.slice(0, index) + atStr + text.slice(index + 1);
      setText(strValue);
    }
  };

  const handleChange = (evt) => {
    const newValue = evt.target.value;
    const { code, index } = getDifferentCode(text, newValue);
    if (code === "@") {
      handleVisibleChange(true);
      setIndex(index);
    }
    setText(newValue);
  };

  const handleBlur = () => {
    console.log(contentEditableRef.current.innerHTML); // Correct value
  };

  const handleSubmit = () => {
    comment.push({
      date: new Date().toLocaleString(),
      value: text,
    });
    setComment(comment);
    setText("");
  };

  const menu = (
    <Menu style={{ width: "30%" }}>
      {users.map((u) => (
        <Menu.Item key={u.id} onClick={() => handleVisibleChange(false, u)}>
          {u.name}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="stock">
      <header className="stock-title">带@功能的评论</header>
      <div className="stock-wrap">
        <Dropdown
          overlay={menu}
          visible={visible}
          placement="topCenter"
          onVisibleChange={handleVisibleChange}
          trigger={[]}
        >
          <ContentEditable
            className="stock-textarea"
            innerRef={contentEditableRef}
            html={text}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </Dropdown>
        <Button type="primary" className="stock-submit" onClick={handleSubmit}>
          发送
        </Button>
      </div>
      <div className="stock-comment">
        {comment.map((c) => (
          <div className="stock-comment-item" key={c.date}>
            <time>{c.date}</time>
            <ContentEditable className='stock-comment-item-value' html={c.value} disabled={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoodsStock;
