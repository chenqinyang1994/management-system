import React, { useEffect } from "react";
import { Switch } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { toggle } from "@/features/theme-slice";

import "./index.less";

function ThemeToggle(props) {
  const { themeValue } = useSelector((state) => ({
    themeValue: state.themeManage.themeValue,
  }));
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggle());
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeValue);
  }, [themeValue]);

  return (
    <div className="theme-toggle">
      <Switch
        checked={themeValue === "dark"}
        onChange={handleChangeTheme}
        checkedChildren="🌜"
        unCheckedChildren="🌞"
      />
    </div>
  );
}

export default ThemeToggle;
