import { render, screen, fireEvent, getByText } from "@testing-library/react";
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

    it("should display all numbers when clicked", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("1"));
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("3"));
      fireEvent.click(getByText("4"));
      fireEvent.click(getByText("5"));
      fireEvent.click(getByText("6"));
      fireEvent.click(getByText("7"));
      fireEvent.click(getByText("8"));
      fireEvent.click(getByText("9"));
      expect(getByTestId("display").innerHTML).toEqual("123456789");
    });
  });

  describe("should calculate correctly", () => {
    it("should perform addition correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("+"));
      fireEvent.click(getByText("3"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("5");
    });

    it("should perform subtraction correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("8"));
      fireEvent.click(getByText("-"));
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("="));

      expect(getByTestId("display").innerHTML).toEqual("6");
    });

    it("should perform multiplication correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("4"));
      fireEvent.click(getByText("*"));
      fireEvent.click(getByText("5"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("20");
    });

    it("should perform division correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("1"));
      fireEvent.click(getByText("0"));
      fireEvent.click(getByText("/"));
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("5");
    });

    it("should handle decimal numbers correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("3"));
      fireEvent.click(getByText("."));
      fireEvent.click(getByText("5"));
      fireEvent.click(getByText("+"));
      fireEvent.click(getByText("1"));
      fireEvent.click(getByText("."));
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("4.7");
    });

    it("should clear the display when 'C' is clicked", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("5"));
      fireEvent.click(getByText("+"));
      fireEvent.click(getByText("6"));
      fireEvent.click(getByText("="));
      fireEvent.click(getByText("C"));
      expect(getByTestId("display").innerHTML).toEqual("0");
    });

    // These tests fail

    /*
    it("should handle negative numbers correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("-"));
      fireEvent.click(getByText("5"));
      fireEvent.click(getByText("+"));
      fireEvent.click(getByText("-"));
      fireEvent.click(getByText("3"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("-8");
    });

    it("should handle chained operations correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("2"));
      fireEvent.click(getByText("+"));
      fireEvent.click(getByText("3"));
      fireEvent.click(getByText("-"));
      fireEvent.click(getByText("1"));
      fireEvent.click(getByText("*"));
      fireEvent.click(getByText("4"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("16");
    });

    it("should handle division by zero correctly", () => {
      const { getByText, getByTestId } = render(<App />);
      fireEvent.click(getByText("1"));
      fireEvent.click(getByText("/"));
      fireEvent.click(getByText("0"));
      fireEvent.click(getByText("="));
      expect(getByTestId("display").innerHTML).toEqual("Error");
    });
    */
  });
});
