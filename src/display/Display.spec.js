// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';
import { render, fireEvent, cleanup } from 'react-testing-library';
import "jest-dom/extend-expect";
afterEach(cleanup);

describe('<Display/>', () => {
    it('matches snapshot', () => {
        const domTree = renderer.create(<Display />);

        expect(domTree.toJSON()).toMatchSnapshot();
    })
    it('unlocked shows on default', () => {
        
        const { getByText } = render(<Display />);

        const button = getByText('Unlocked');

        expect(button.textContent).toEqual("Unlocked");;

    })
    it('open shows on default', () => {
        
        const { getByText } = render(<Display />);

        const button = getByText('Open');

        expect(button.textContent).toEqual("Open");;

    })
    it('open class shows green on default', () => {
        
        const { getByText } = render(<Display />);

        const button = getByText('Open');

        expect(button).toHaveClass("green-led");;

    })
    it('unlocked shows green on default', () => {
        
        const { getByText } = render(<Display />);

        const button = getByText('Unlocked');

        expect(button).toHaveClass("green-led");;

    })

})