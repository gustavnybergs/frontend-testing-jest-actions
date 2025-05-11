import { render, fireEvent } from "@testing-library/react";
import CustomButton, { ButtonState } from "./CustomButton";
import "@testing-library/jest-dom";

// Se till att exportera ButtonState från CustomButton.tsx för att kunna använda den här

describe("CustomButton", () => {
  test("renders with correct text", () => {
    const buttonText = "Click me";
    const { getByRole } = render(<CustomButton buttonText={buttonText} />);
    expect(getByRole("button")).toHaveValue(buttonText);
  });

  test("has idle class by default", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    expect(getByRole("button")).toHaveClass(ButtonState.idle);
  });
  
  test("changes to hover class on mouse enter", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    const button = getByRole("button");
    
    fireEvent.mouseEnter(button);
    expect(button).toHaveClass(ButtonState.hover);
  });
  
  test("changes to clicked class on click", () => {
    const { getByRole } = render(<CustomButton buttonText="Test" />);
    const button = getByRole("button");
    
    fireEvent.click(button);
    expect(button).toHaveClass(ButtonState.clicked);
  });
  
  // Detta test är nu fixat för att fungera korrekt
test("has the correct class name on click", () => {
  const { getByRole } = render(<CustomButton buttonText="Test" />);
  const button = getByRole("button");
  
  fireEvent.click(button);
  // Korrigerad förväntan som matchar det faktiska klassnamnet
  expect(button).toHaveClass(ButtonState.clicked);
});
});