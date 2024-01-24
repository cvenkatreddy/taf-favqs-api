const routes = {
  apiSession: "session",
};

export const SessionService = () => {
  return {
    PostCreateSession: (data) =>
      cy.request({
        method: "post",
        url: `${routes.apiSession}`,
        ...data,
      }),

    DeleteSession: () =>
      cy.request({
        method: "delete",
        url: `${routes.apiSession}`,
      }),
  };
};
