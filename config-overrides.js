const {
  override,
  addBabelPlugins,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");

module.exports = override(
  ...addBabelPlugins(
    "babel-plugin-transform-do-expressions",
    "@babel/plugin-proposal-object-rest-spread"
  ),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
