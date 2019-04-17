// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';
import { render, fireEvent, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);


describe('<Dashboard/>', () => {
    it('matches snapshot', () => {
        const domTree = renderer.create(<Dashboard />);

        expect(domTree.toJSON()).toMatchSnapshot();
    })

    it("Close gate is on default", () => {
        const { getByText } = render(<Dashboard />);
        const closeGateButton = getByText("Close Gate");
        expect(closeGateButton.textContent).toEqual("Close Gate");
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

    it("Closed Display on Close Button", () => {
        const mock = jest.fn();
        
        const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} />);

        const closeGateButton = getByText("Close Gate");

        fireEvent.click(closeGateButton);

        const closedDisplay = queryByText("Closed");

        // const unclosedDisplay = getByText("Unlock Gate")
        expect(closedDisplay.textContent).toEqual("Closed");;

    });

    it("locked display on locked gate", () => {
        const mock = jest.fn();
        
        const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

        const closeGateButton = getByText("Close Gate");

        fireEvent.click(closeGateButton);

        const lockGateButton = queryByText("Lock Gate");
        fireEvent.click(lockGateButton);

        const lockedDisplay = getByText("Locked")
        expect(lockedDisplay.textContent).toEqual("Locked");;

    });

    it("unlocked display on unlocked gate", () => {
        const mock = jest.fn();
        
        const { getByText, queryByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock} />);

        const closeGateButton = getByText("Close Gate");

        fireEvent.click(closeGateButton);

        const lockGateButton = queryByText("Lock Gate");
        fireEvent.click(lockGateButton);

        const unlockGateButton = getByText("Unlock Gate");
        fireEvent.click(unlockGateButton);
        const lockedDisplay = getByText("Unlocked")
        expect(lockedDisplay.textContent).toEqual("Unlocked");;

    });

    it('closed display shows red on close gate', () => {
        const mock = jest.fn();
        const { getByText } = render(<Dashboard toggleClosed={mock} />);

        const closeGateButton = getByText('Close Gate');
        fireEvent.click(closeGateButton);

        const closedDisplay = getByText('Closed')

        expect(closedDisplay).toHaveClass("red-led");;

    })

    it('locked display shows red on locked gate', () => {
        const mock = jest.fn();
        const { getByText } = render(<Dashboard toggleClosed={mock} toggleLocked={mock}/>);

        const closeGateButton = getByText('Close Gate');
        fireEvent.click(closeGateButton);

        const lockGateButton = getByText("Lock Gate");
        fireEvent.click(lockGateButton);

        const lockedDisplay = getByText('Locked')

        expect(lockedDisplay).toHaveClass("red-led");;

    })
})