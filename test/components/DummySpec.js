import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Dummy from '../../src/components/Dummy';

describe("A dummy component", () => {
    beforeEach(function(){
        this.TestUtils = TestUtils;
        this.component = TestUtils.renderIntoDocument(<Dummy/>);
    });

    it("starts with a div", function(){
        let root = ReactDOM.findDOMNode(this.component);
		console.log(root);
        expect(root.tagName).toEqual('DIV');
    })
})