import { render, screen } from "@testing-library/react";

import { Container } from "./Container";

describe("Container", () => {
  it("should render with children", () => {
    const children = <div>test</div>;

    render(<Container children={children} />);
    expect(screen.getByText("test")).toBeInTheDocument();

    // const { container } = render(<Container>{children}</Container>);
    // expect(container).toMatchSnapshot();
  });
});
