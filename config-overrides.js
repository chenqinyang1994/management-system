/* config-overrides.js */
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

const {
  override,
  addBundleVisualizer,
  addWebpackAlias,
  addLessLoader,
  addWebpackPlugin,
  addBabelPlugins,
} = require("customize-cra");
const path = require("path");

module.exports = override(
  // add less in webpack
  addLessLoader(),

  // dayjs plugin
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

  // add babel 
  ...addBabelPlugins(
    "@babel/plugin-syntax-dynamic-import"
  ),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    "@src": path.resolve(__dirname, "src"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@assets": path.resolve(__dirname, "src/assets"),
    "@routes": path.resolve(__dirname, "src/routes"),
    "@components": path.resolve(__dirname, "src/components"),
  })
);
