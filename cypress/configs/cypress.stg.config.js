const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://favqs.com/api",
    env: {
      apiKey: "05ee79f03d51b71c057573c1e7fcf38f",
      login: "qaauto.venkatreddyc@gmail.com",
      password: "d69678dd35f",
    },
  },
});
