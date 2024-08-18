import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // для расширенных матчеров Jest
import { ResultsComponent } from "./ResultsComponent";

const testData = {
  monthlyRepayment: 123.45,
  totalRepayments: 6789.01,
};

describe("ResultsComponent", () => {
  it("renders the component with the correct data", () => {
    render(
      <ResultsComponent
        monthlyRepayment={testData.monthlyRepayment}
        totalRepayments={testData.totalRepayments}
      />
    );

    expect(screen.getByText("Your results")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again."
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(`£${testData.monthlyRepayment.toFixed(2)}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId("totalRepayments")).toHaveTextContent(
      `£${testData.totalRepayments.toFixed(2)}`
    );
    expect(screen.getByTestId("resultsComponent")).toMatchSnapshot();
  });
});
