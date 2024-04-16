import { render, screen, fireEvent } from "@testing-library/react";
import App from "../src/App";
import React from "react";
import { describe, expect, it } from "vitest";

describe("App", () => {
  describe("should render correctly", () => {
    it.each([
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "/",
      "*",
      "+",
      "-",
    ])("renders all button text", (buttonText: string) => {
      render(<App />);
      const headline = screen.findAllByText(buttonText);
      expect(headline).toBeDefined();
    });
  });
  describe("should calculate correctly", () => {
    it("should perform addition correctly", () => {
      const { getByText, getByRole } = render(<App />);
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("+"));
      fireEvent.click(getByText("3"));
      fireEvent.click(getByText("="));
      expect(getByRole("display").innerHTML).toEqual("5");
    });

    it("should perform subtraction correctly", () => {
      const { getByText, getByRole } = render(<App />);
      fireEvent.click(getByText("8"));
      fireEvent.click(getByText("-"));
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("="));

      expect(getByRole("display").innerHTML).toEqual("6");
    });
  });
});
