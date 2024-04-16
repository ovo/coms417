import { render, screen } from '@testing-library/react';
import App from "../src/App";
import React from 'react';
import { describe, expect, it } from 'vitest';


describe('App', () => {
    describe('should render correctly', () => {
        it.each(['1','2','3','4','5','6','7','8','9','0', '/', '*', '+', '-'])('renders all button text', (buttonText: string) => {
            render(<App />);
            const headline = screen.findAllByText(buttonText);
            expect(headline).toBeDefined();
        });
    });
    describe('should calculate correctly', () => {
        it.each`
        firstButtonPress   |   secondButtonPress   |  calculationType           |  calculationResult
        ${'1'}             |   ${'2'}              |  ${CalculationTypes.ADD}   |  ${'3'}
        `('should do basic calculations', () => {
            render(<App />);
            
        });
        // Add calculation tests here (these will be best for mutations)
    })
});

export enum CalculationTypes {
    ADD,
    SUB,
    DIV,
    MUL
};