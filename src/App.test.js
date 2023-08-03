import { render, screen } from "@testing-library/react";
import App from "./main-page";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Providing/i);
  expect(linkElement).toBeInTheDocument();
});
