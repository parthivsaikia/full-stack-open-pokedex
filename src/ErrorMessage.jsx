import React from "react";

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error here: {error.toString()}</div>
);

export default ErrorMessage;
