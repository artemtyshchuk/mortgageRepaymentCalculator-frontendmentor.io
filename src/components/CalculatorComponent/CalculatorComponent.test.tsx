import { fireEvent, render, screen } from "@testing-library/react";
import { CalculatorComponent } from "./CalculatorComponent";
import { ResultsComponent } from "components/ResultsComponent";

describe("CalculatorComponent", () => {
  it("should render component correctly", () => {
    render(<CalculatorComponent />);

    const calculatorForm = screen.getByTestId("calculator-form");
    const calculatorResetButton = screen.getByTestId("calculator-reset-button");
    const calculatorMortgageAmount = screen.getByTestId(
      "calculator-mortgageAmount"
    );
    const calculatorMortgageTerm = screen.getByTestId(
      "calculator-mortgageTerm"
    );
    const calculatorInterestRate = screen.getByTestId(
      "calculator-interestRate"
    );
    const calculatorMortgageTypeRepayment = screen.getByTestId(
      "calculator-mortgageType-repayment"
    );
    const calculatorMortgageTypeInterestOnly = screen.getByTestId(
      "calculator-mortgageType-interestOnly"
    );
    const calculatorCalculateButton = screen.getByTestId(
      "calculator-calculateButton"
    );

    expect(calculatorForm).toBeInTheDocument();
    expect(calculatorResetButton).toBeInTheDocument();
    expect(calculatorMortgageAmount).toBeInTheDocument();
    expect(calculatorMortgageTerm).toBeInTheDocument();
    expect(calculatorInterestRate).toBeInTheDocument();
    expect(calculatorMortgageTypeRepayment).toBeInTheDocument();
    expect(calculatorMortgageTypeInterestOnly).toBeInTheDocument();
    expect(calculatorCalculateButton).toBeInTheDocument();
  });
  it("should update form data", () => {
    render(<CalculatorComponent />);

    const calculatorMortgageAmount = screen.getByTestId(
      "calculator-mortgageAmount"
    );
    const calculatorMortgageTerm = screen.getByTestId(
      "calculator-mortgageTerm"
    );
    const calculatorInterestRate = screen.getByTestId(
      "calculator-interestRate"
    );
    const calculatorMortgageTypeRepayment = screen.getByTestId(
      "calculator-mortgageType-repayment"
    );

    const inputTestData = 123;

    fireEvent.change(calculatorMortgageAmount, {
      target: { value: inputTestData },
    });

    fireEvent.change(calculatorMortgageTerm, {
      target: { value: inputTestData },
    });

    fireEvent.change(calculatorInterestRate, {
      target: { value: inputTestData },
    });
    fireEvent.click(calculatorMortgageTypeRepayment);

    expect(calculatorMortgageAmount).toHaveValue(inputTestData);
    expect(calculatorMortgageTerm).toHaveValue(inputTestData);
    expect(calculatorInterestRate).toHaveValue(inputTestData);
    expect(calculatorMortgageTypeRepayment).toBeChecked();
  });

  it("should reset form data", () => {
    render(<CalculatorComponent />);

    const inputTestData = 123;

    const calculatorMortgageAmount = screen.getByTestId(
      "calculator-mortgageAmount"
    );
    const calculatorMortgageTerm = screen.getByTestId(
      "calculator-mortgageTerm"
    );
    const calculatorInterestRate = screen.getByTestId(
      "calculator-interestRate"
    );
    const calculatorMortgageTypeRepayment = screen.getByTestId(
      "calculator-mortgageType-repayment"
    );

    const calculatorResetButton = screen.getByTestId("calculator-reset-button");

    fireEvent.change(calculatorMortgageAmount, {
      target: { value: inputTestData },
    });

    fireEvent.change(calculatorMortgageTerm, {
      target: { value: inputTestData },
    });

    fireEvent.change(calculatorInterestRate, {
      target: { value: inputTestData },
    });
    fireEvent.click(calculatorMortgageTypeRepayment);

    expect(calculatorMortgageAmount).toHaveValue(inputTestData);
    expect(calculatorMortgageTerm).toHaveValue(inputTestData);
    expect(calculatorInterestRate).toHaveValue(inputTestData);
    expect(calculatorMortgageTypeRepayment).toBeChecked();

    fireEvent.click(calculatorResetButton);

    expect(calculatorMortgageAmount).toHaveValue(null);
    expect(calculatorMortgageTerm).toHaveValue(null);
    expect(calculatorInterestRate).toHaveValue(null);
    expect(calculatorMortgageTypeRepayment).not.toBeChecked();
  });
  it("should show error message if form is invalid", async () => {
    render(<CalculatorComponent />);

    const calculatorCalculateButton = screen.getByTestId(
      "calculator-calculateButton"
    );

    fireEvent.click(calculatorCalculateButton);

    const errorMessages = await screen.findAllByTestId("calculator-errorText");

    errorMessages.forEach((errorMessage) => {
      expect(errorMessage).toBeInTheDocument();
    });
  });
  it("should be checked when another radio button is disabled", () => {
    render(<CalculatorComponent />);

    const calculatorMortgageTypeRepayment = screen.getByTestId(
      "calculator-mortgageType-repayment"
    );
    const calculatorMortgageTypeInterestOnly = screen.getByTestId(
      "calculator-mortgageType-interestOnly"
    );

    fireEvent.click(calculatorMortgageTypeRepayment);

    expect(calculatorMortgageTypeRepayment).toBeChecked();
    expect(calculatorMortgageTypeInterestOnly).not.toBeChecked();

    fireEvent.click(calculatorMortgageTypeInterestOnly);

    expect(calculatorMortgageTypeRepayment).not.toBeChecked();
    expect(calculatorMortgageTypeInterestOnly).toBeChecked();
  });
  it("should render ResultsComponent when calculate button is clicked", async () => {
    render(<CalculatorComponent />);

    const inputTestData = 123;

    const calculatorMortgageAmount = screen.getByTestId(
      "calculator-mortgageAmount"
    );
    const calculatorMortgageTerm = screen.getByTestId(
      "calculator-mortgageTerm"
    );
    const calculatorInterestRate = screen.getByTestId(
      "calculator-interestRate"
    );
    const calculatorMortgageTypeRepayment = screen.getByTestId(
      "calculator-mortgageType-repayment"
    );

    const calculatorResetButton = screen.getByTestId("calculator-reset-button");

    fireEvent.change(calculatorMortgageAmount, {
      target: { value: inputTestData },
    });

    fireEvent.change(calculatorMortgageTerm, {
      target: { value: inputTestData },
    });

    fireEvent.change(calculatorInterestRate, {
      target: { value: inputTestData },
    });
    fireEvent.click(calculatorMortgageTypeRepayment);

    expect(calculatorMortgageAmount).toHaveValue(inputTestData);
    expect(calculatorMortgageTerm).toHaveValue(inputTestData);
    expect(calculatorInterestRate).toHaveValue(inputTestData);
    expect(calculatorMortgageTypeRepayment).toBeChecked();

    fireEvent.click(calculatorResetButton);

    render(
      <ResultsComponent
        monthlyRepayment={inputTestData}
        totalRepayments={inputTestData}
      />
    );

    const resultsComponent = await screen.findByTestId("resultsComponent");

    expect(resultsComponent).toBeInTheDocument();
  });
});
