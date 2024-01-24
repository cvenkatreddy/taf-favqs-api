import { ErrorCodes, HttpStatusCodes } from "../../../../types";
import { QuotesService } from "../quotesConsumer";

describe("Quotes Service", function () {
  before("Create a session", function () {
    cy.createSession("root", Cypress.env("login"), Cypress.env("password"));
  });

  it("List All Quotes", function () {
    QuotesService()
      .GetQuotes()
      .then((response) => {
        cy.verifyStatusCode(response, HttpStatusCodes.Success);
      });
  });

  it("Filter Quote by Id", function () {
    QuotesService()
      .GetQuotes()
      .then((response) => {
        cy.verifyStatusCode(response, HttpStatusCodes.Success);
        QuotesService()
          .GetQuoteById(response.body.quotes[0].id)
          .then((response) => {
            cy.verifyStatusCode(response, HttpStatusCodes.Success);
          });
      });
  });

  it("Filter quote and mark as favourite", function () {
    QuotesService()
      .GetQuotesByFilter("QaAuto", "author")
      .then((response) => {
        cy.verifyStatusCode(response, HttpStatusCodes.Success);
        cy.requestFavQuote(response).then((data) => {
          QuotesService()
            .PutQuotesFav(data)
            .then((response) => {
              cy.verifyStatusCode(response, HttpStatusCodes.Success);
              // Mismatch in the error message actual:No user session found. expected:  User session not found.
              cy.verifyErrorMessage(response, ErrorCodes[20]);
            });
        });
      });
  });
});

before("Clear session", function () {
  Cypress.session.clearAllSavedSessions();
});
