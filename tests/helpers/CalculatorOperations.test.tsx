import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../src/App";
import React from "react";
import { describe, expect, it } from "vitest";
import { evalFunction } from "../../src/helpers/CalculatorOperationClasses";

describe("CalculatorHelper", () => {
  describe("should do basic calculations correctly", () => {
    it.each`
    testFunction    |   expectedResultingNumber
    ${'5+2'}        |   ${7}
    ${'5+0'}        |   ${5}
    ${'5+456'}      |   ${461}
    ${'456+5'}      |   ${461}
    ${'5-2'}        |   ${3}
    ${'5-0'}        |   ${5}
    ${'5-45'}       |   ${-40}
    ${'45-5'}       |   ${40}
    `("should return the calculated number for valid operator", (testFunction: string, expectedResult: number) => {
    const result: string | number = evalFunction(testFunction);
    expect(result).toEqual(expectedResult);
});
  });
  describe("should handle error cases correctly", () => {
    it.each`
        testFunction
        ${'-1-3'}
        ${'+1-3'}
        ${'/1-3'}
        ${'*1-3'}
    `("should return Error when starting with operator", (testFunction: string) => {
      const result: string | number = evalFunction(testFunction);
      expect(result).toEqual("Error");
    });
  });
});
