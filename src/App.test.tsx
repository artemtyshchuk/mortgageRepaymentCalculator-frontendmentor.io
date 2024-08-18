import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should render container and calculator component", () => {
    render(<App />);

    expect(screen.getByTestId("container")).toBeInTheDocument();
    expect(screen.getByTestId("calculator-component")).toBeInTheDocument();
  });
});
