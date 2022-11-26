import Accordion from "./Accordion";
import { render, screen } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="hello">
        <h3>My DEDE</h3>
        <div>dedwdwenjdw content</div>
      </Accordion>
    );
  });

  test("should render the accordion component", () => {
    expect(screen.getByText("hello")).toBeDefined();
  });

  test("should render the accordion title", () => {
    expect(screen.getByText("hello")).toBeDefined();
  });

  test("should not show the content at start", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should show the content when the content is open", () => {
    const toggleButton = screen.getByText(/Toggle/i);
    toggleButton.click();
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("should hide the content when the content is open and then closed", () => {
    const toggleButton = screen.getByText(/Toggle/i);
    toggleButton.click();
    toggleButton.click();
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
