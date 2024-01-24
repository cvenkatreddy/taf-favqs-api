const routes = {
  apiUsers: "users",
};

export const UserService = () => {
  return {
    GetUserById: (apiUsers) =>
      cy.request({
        method: "get",
        url: `${routes.apiUsers}/${apiUsers}`,
        failOnStatusCode: false,
      }),
  };
};
