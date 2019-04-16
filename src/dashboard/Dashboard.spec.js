// Test away
import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from './Dashboard';

describe('<Dashboard/>', () => {
    it('matches snapshot', () => {
        const domTree = renderer.create(<Dashboard />);

        expect(domTree.toJSON()).toMatchSnapshot();
    })
})