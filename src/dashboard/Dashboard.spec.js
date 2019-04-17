// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { render, fireEvent, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);


describe('<Dashboard/>', () => {
    xit('matches snapshot', () => {
        const domTree = renderer.create(<Dashboard />);

        expect(domTree.toJSON()).toMatchSnapshot();
    })

    it("open gate is disabled when gate is locked", () => {
        const mock = jest.fn();
        
        const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

        const closeGateButton = getByText("Close Gate");

        fireEvent.click(closeGateButton);

        const lockGateButton = queryByText("Lock Gate");
        fireEvent.click(lockGateButton);

        const openGateButton = getByText("Open Gate")
        expect(openGateButton).toBeDisabled();

    });

    it("unlock gate button is available when gate is locked", () => {
        const mock = jest.fn();
        
        const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

        const closeGateButton = getByText("Close Gate");

        fireEvent.click(closeGateButton);

        const lockGateButton = queryByText("Lock Gate");
        fireEvent.click(lockGateButton);

        const unlockGateButton = getByText("Unlock Gate")
        expect(unlockGateButton.textContent).toEqual("Unlock Gate");;

    });
})