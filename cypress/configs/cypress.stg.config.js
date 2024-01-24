const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://favqs.com/api",
    env: {
      apiKey: "",
      login: "",
      password: "",
    },
  },
});
