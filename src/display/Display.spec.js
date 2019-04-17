// Test away!

import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('<Display/>', () => {
    xit('matches snapshot', () => {
        const domTree = renderer.create(<Display />);

        expect(domTree.toJSON()).toMatchSnapshot();
    })
})