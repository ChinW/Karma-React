import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import App from '../app.comp.jsx'

describe('app.comp.jsx', function () {
	var app = TestUtils.renderIntoDocument(<App />)

	it('renders without problems', function () {
		expect(app).toExist()
	});

	it("getNumber function works", function(){
		expect(app.getNumber()).toEqual(3)
	})
});
