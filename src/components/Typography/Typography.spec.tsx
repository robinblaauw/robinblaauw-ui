import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Typography from "./Typography";

describe("Typography", () => {
  it("renders correctly with default props", () => {
    const { getByText } = render(
      <Typography variant="h1">Hello, world!</Typography>
    );

    const element = getByText("Hello, world!");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h1");
    expect(element.className).toBe("h1");
  });

  it("applies additional class name correctly", () => {
    const { getByText } = render(
      <Typography variant="h2" extraClass="custom-class">
        Hello, world!
      </Typography>
    );

    const element = getByText("Hello, world!");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h2");
    expect(element.className).toBe("h2 custom-class");
  });

  it("renders as a custom tag when 'As' prop is provided", () => {
    const { getByText } = render(
      <Typography variant="body1" As="h1">
        Hello, world!
      </Typography>
    );

    const element = getByText("Hello, world!");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h1");
    expect(element.className).toBe("body1");
  });

  it("applies color class correctly when 'color' prop is provided", () => {
    const { getByText } = render(
      <Typography variant="h3" color="red">
        Hello, world!
      </Typography>
    );

    const element = getByText("Hello, world!");
    expect(element).toBeInTheDocument();
    expect(element.tagName.toLowerCase()).toBe("h3");
    expect(element.className).toBe("text-red h3");
  });
});
