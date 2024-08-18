import { render, screen } from "@testing-library/react";
import { PreResultsComponent } from "./PreResultsComponent";

describe("PreResultsComponent", () => {
  it("should render component correctly", () => {
    render(<PreResultsComponent />);

    const preResultsComponent = screen.getByTestId("preResults");

    expect(preResultsComponent).toBeInTheDocument();
    expect(preResultsComponent).toMatchSnapshot();
  });
});
