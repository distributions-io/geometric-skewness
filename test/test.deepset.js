/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	skewness = require( './../lib/deepset.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'deepset skewness', function tests() {

	it( 'should export a function', function test() {
		expect( skewness ).to.be.a( 'function' );
	});

	it( 'should compute the distribution skewness and deep set', function test() {
		var data, expected;

		data = [
			{'x':0.2},
			{'x':0.4},
			{'x':0.6},
			{'x':0.8}
		];

		data = skewness( data, 'x' );
		expected = [
			{'x':2.012461},
			{'x':2.065591},
			{'x':2.213594},
			{'x':2.683282}
		];

		assert.isTrue( deepCloseTo( data, expected, 1e-5 ) );

		// Custom separator...
		data = [
			{'x':[9,0.2]},
			{'x':[9,0.4]},
			{'x':[9,0.6]},
			{'x':[9,0.8]}
		];

		data = skewness( data, 'x/1', '/' );
		expected = [
			{'x':[9,2.012461]},
			{'x':[9,2.065591]},
			{'x':[9,2.213594]},
			{'x':[9,2.683282]}
		];

		assert.isTrue( deepCloseTo( data, expected, 1e-5 ), 'custom separator' );
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( skewness( [], 'x' ), [] );
		assert.deepEqual( skewness( [], 'x', '/' ), [] );
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var data, actual, expected;

		data = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = skewness( data, 'x' );

		expected = [
			{'x':NaN},
			{'x':NaN},
			{'x':NaN},
			{'x':NaN}
		];

		assert.deepEqual( data, expected );
	});

});
