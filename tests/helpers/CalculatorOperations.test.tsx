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
    `("should return the calculated number for valid operator", (params: {testFunction: string, expectedResultingNumber: number}) => {
    const result: string | number = evalFunction(params.testFunction);
    expect(result).toEqual(params.expectedResultingNumber);
});
  });
  describe("should handle error cases correctly", () => {
    it.each`
        testFunction
        ${'-1-3'}
        ${'+1-3'}
        ${'/1-3'}
        ${'*1-3'}
    `("should return Error when starting with operator", (params: {testFunction: string}) => {
      const result: string | number = evalFunction(params.testFunction);
      expect(result).toEqual("Error");
    });
  });
});
