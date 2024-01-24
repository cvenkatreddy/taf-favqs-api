import { ErrorCodes, HttpStatusCodes } from "../../../../types";
import { QuotesService } from "../consumer";

describe("Quotes Service", function () {
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

  // Problem with POST /api/session unable to create a session as throwing 401: HTTP Token: Access denied.
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
