import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const clickCallback = jest.fn()

describe("Button", () => {
  it("Can be clicked", () => {
    const text = "Click me!";
    const { getByText, container } = render(
      <Button text={text} onClick={(clickCallback)} />
    );

    const button = getByText(text);
    fireEvent.click(button);

    expect(container).toMatchSnapshot()
    expect(clickCallback).toBeCalled()
  });

  it("Can be big", () => {
    const text = "Click me!";
    const { container } = render(
      <Button text={text} onClick={(clickCallback)} size="big" />
    );

    expect(container).toMatchSnapshot()
  });  
});
