import React from 'react';
import Footer from '../Footer';
import {create} from 'react-test-renderer';

describe('Snapshot Test',() => {
    test('Testing Footer',() => {
        let tree = create(<Footer/>);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})