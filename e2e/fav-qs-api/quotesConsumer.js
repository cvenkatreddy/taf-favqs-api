const routes = {
  apiQuotes: "quotes",
  apiSession: "session",
};

export const QuotesService = () => {
  return {
    GetQuoteById: (quoteId) =>
      cy.request({
        method: "get",
        url: `${routes.apiQuotes}/${quoteId}`,
        failOnStatusCode: false,
      }),

    GetQuotes: () => cy.request({ method: "get", url: routes.apiQuotes }),
    GetQuotesByFilter: (filter, type) =>
      cy.request({
        method: "get",
        url: `${routes.apiQuotes}?filter=${filter}&type=${type}`,
        failOnStatusCode: false,
      }),
    PutQuotesFav: (data) =>
      cy.request({
        method: "put",
        url: `${routes.apiQuotes}/${data.body.id}/fav`,
        ...data,
      }),

    PostCreateSession: (data) =>
      cy.request({
        method: "post",
        url: `${routes.apiSession}`,
        ...data,
      }),
  };
};