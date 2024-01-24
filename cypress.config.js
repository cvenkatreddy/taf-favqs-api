const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://favqs.com/api",
    env: {
      apiKey: "apiKeys-generated-from-user-login",
      login: "api-user-email",
      password: "api-user-password",
    },
  },
});
