// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
afterEach(cleanup);
import "jest-dom/extend-expect";

import Controls from './Controls';

describe('<Controls />', () => {
    xit('matches snapshot', () => {
        const domTree = renderer.create(<Controls />);

        expect(domTree.toJSON()).toMatchSnapshot();
    })

    it('is the close gate function working', () => {
        const mock = jest.fn();
        
        const { getByText } = render(<Controls toggleClosed={mock}/>);

        const button = getByText("Close Gate");

        fireEvent.click(button);
        expect(mock).toHaveBeenCalled();
    })
    it("by default lock gate is disabled", () => {
        const { getByText } = render(<Controls />);
        const lockButton = getByText(/Lock Gate/i);
        expect(lockButton).toBeDisabled();
    });
    it('is the lock gate function working', () => {
        const mock = jest.fn();
        
        const { getByText, queryByText } = render(<Controls toggleClosed={mock}/>);

        const button = getByText("Close Gate");

        fireEvent.click(button);

        const lockGateButton = queryByText("Lock Gate");
        // const button = queryByText("Lock Gate");
        expect(lockGateButton.textContent).toEqual("Lock Gate");
    })
   




})