export const HttpStatusCodes = Object.freeze({
  Success: 200,
  NotFound: 404,
  Unauthorised: 401,
  NoContent: 204,
  Conflict: 409,
});

export const ErrorCodes = Object.freeze({
  10: "Invalid request.",
  11: "Permission denied.",
  20: "User session not found.",
  21: "Invalid login or password.",
  22: "Login is not active. Contact support@favqs.com.",
  23: "User login or password is missing.",
  24: "Pro user required",
  31: "User session already present.",
  32: "A list of 'user' validation errors.",
  33: "Invalid password reset token.",
  40: "Quote not found.",
  41: "Private quotes cannot be unfav'd.",
  42: "Could not create quote.",
  50: "Author not found.",
  60: "Tag not found.",
  70: "Activity not found.",
});
