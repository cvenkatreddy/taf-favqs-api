import { UserService } from "../e2e/fav-qs-api/userConsumer";
import { SessionService } from "../e2e/fav-qs-api/sessionConsumer";
import { HttpStatusCodes } from "../../types";

// -- This is to overwrite request command to set the default headers for every request--
Cypress.Commands.overwrite("request", function (fn, options) {
  if (!options?.hasOwnProperty("headers")) {
    options["headers"] = { "Content-Type": "application/json;charset=UTF-8" };
    options.headers["Authorization"] = `Token token=${Cypress.env("apiKey")}`;
  }
  return cy.wrap(fn({ ...options }), { timeout: 100000 }).then((response) => {
    console.log("<< response", response);
  });
});

// -- This is verify the status code of the request
Cypress.Commands.add("verifyStatusCode", (response, expectedStatusCode) => {
  cy.wrap(response).its("status").should("be.equal", expectedStatusCode);
});

// -- This is to fav quote
Cypress.Commands.add("requestFavQuote", (response) => {
  const data = {
    body: {
      id: response.body.quotes[0].id,
      author: response.body.quotes[0].author,
      body: response.body.quotes[0].body,
      user_details: {
        favorite: true,
      },
    },
  };
  return data;
});

// -- This is verify error message
Cypress.Commands.add("verifyErrorMessage", (response, errorMessage) => {
  cy.wrap(response).its("body.message").should("be.equal", errorMessage);
});

// -- This is to create session and cache it across specs
Cypress.Commands.add("createSession", (name, login, password) => {
  cy.session(
    name,
    () => {
      const data = {
        body: {
          user: {
            login: login,
            password: password,
          },
        },
      };
      SessionService()
        .PostCreateSession(data)
        .then((response) => {
          cy.verifyStatusCode(response, HttpStatusCodes.Success);
          window.localStorage.setItem("userToken", response.body["User-Token"]);
        });
    },
    {
      validate() {
        // calling Get user to validate session
        UserService()
          .GetUserById(30305)
          .then((response) => {
            cy.verifyStatusCode(response, HttpStatusCodes.Success);
          });
      },
      cacheAcrossSpecs: true,
    }
  );
});

// -- This is to create session and cache it across specs
Cypress.Commands.add("destroySession", () => {
  SessionService()
    .DeleteSession()
    .then((response) => {
      cy.verifyStatusCode(response, HttpStatusCodes.Success);
    });
});
