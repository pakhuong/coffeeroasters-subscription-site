const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        plan: path.resolve(__dirname, "plan/index.html"),
      },
    },
  },
});
