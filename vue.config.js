const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    historyApiFallback: true,
    port: 8080, // port mặc định của webpack-dev-server, bạn có thể thay đổi tùy ý
    open: true, // mở trình duyệt tự động khi khởi động webpack-dev-server
  },
});
