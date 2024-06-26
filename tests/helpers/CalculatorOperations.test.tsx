import { describe, expect, it } from "vitest";
import { evalFunction } from "../../src/helpers/CalculatorOperationClasses";

describe("CalculatorHelper", () => {
  describe("should do basic calculations correctly", () => {
    it.each`
    testFunction      |   expectedResultingNumber
    ${'0'}            |   ${0}
    ${'1'}            |   ${1}
    ${'100'}          |   ${100}
    ${'0.5'}          |   ${0.5}
    ${'100.5'}        |   ${100.5}
    ${'5+2'}          |   ${7}
    ${'5+0'}          |   ${5}
    ${'5+456'}        |   ${461}
    ${'456+5'}        |   ${461}
    ${'5-2'}          |   ${3}
    ${'5-0'}          |   ${5}
    ${'5-45'}         |   ${-40}
    ${'45-5'}         |   ${40}
    ${'5*2'}          |   ${10}
    ${'5*0'}          |   ${0}
    ${'5*45'}         |   ${225}
    ${'45*5'}         |   ${225}
    ${'5/2'}          |   ${2.5}
    ${'5/45'}         |   ${0.1111111111111111}
    ${'45/5'}         |   ${9}
    ${'5.7+6.8'}      |   ${12.5}
    ${'58.79+64.86'}  |   ${123.65}
    ${'5.7-6.8'}      |   ${-1.0999999999999996}
    ${'55.75-64.85'}  |   ${-9.099999999999994}
    ${'5.7/6.8'}      |   ${0.8382352941176471}
    ${'55.75/64.83'}  |   ${0.8599413851611908}
    ${'5.7*6.8'}      |   ${38.76}
    ${'55.7*62.83'}   |   ${3499.631}
    `("should return the calculated number for valid operator with function $testFunction", (params: {testFunction: string, expectedResultingNumber: number}) => {
    const result: string | number = evalFunction(params.testFunction);
    expect(result).toEqual(params.expectedResultingNumber);
    });
  });
  describe("should do complex calculations correctly", () => {
    it.each`
    testFunction                        |   expectedResultingNumber
    ${'5+2+4+6'}                        |   ${17}
    ${'5-2-4-6'}                        |   ${-7}
    ${'5/2/4/6'}                        |   ${0.10416666666666667}
    ${'5*2*4*6'}                        |   ${240}
    ${'5/2-4/9'}                        |   ${2.0555555555555554}
    ${'5*3-6*3-3'}                      |   ${-6}
    ${'55*32-65*3-376'}                 |   ${1189}
    ${'55/32-65*3+376'}                 |   ${-569.28125}
    ${'6+5--3--3'}                      |   ${17}
    ${'6+5-3--3'}                       |   ${11}
    ${'6+5--3-3'}                       |   ${11}
    ${'5-2+4/6*7'}                      |   ${2.9047619047619047}
    ${'5.2-2.7+4.8/6.2*7.9'}            |   ${2.402000816659861}
    ${'50.25-22.75+42.85/65.26*74.95'}  |   ${27.491239434932307}
    `("should return the calculated number for valid operator with function $testFunction", (params: {testFunction: string, expectedResultingNumber: number}) => {
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
        ${'1-3-'}
        ${'1-3+'}
        ${'1-3/'}
        ${'1-3*'}
        ${'-1-3-'}
        ${'+1-3+'}
        ${'/1-3/'}
        ${'*1-3*'}
        ${'.1-3'}
        ${'1-3.'}
        ${'.1-3.'}
        ${'1++3'}
        ${'1++3++5'}
        ${'1//3'}
        ${'1/3//5'}
        ${'1**3'}
        ${'1..*3'}
        ${'1..*3..'}
        ${'1*3..'}
        ${'1.5*.5'}
        ${'1.5+.5'}
        ${'1.5-.5'}
        ${'1.5/.5'}
        ${'5+1.5*.5'}
        ${'5+1.5+.5'}
        ${'5+1.5-.5'}
        ${'5+1.5/.5'}
    `("should return Error when starting with operator with function $testFunction", (params: {testFunction: string}) => {
      const result: string | number = evalFunction(params.testFunction);
      expect(result).toEqual("Error");
    });
  
    it("should return Div By 0 Error when Div By 0", () => {
      const result: string | number = evalFunction('5/0');
      expect(result).toEqual('Div By 0 Error');
    });

    it("should return 0 when evaluating empty string", () => {
      const result: string | number = evalFunction('');
      expect(result).toEqual(0);
    });
  });
});
