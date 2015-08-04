/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	skewness = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor skewness', function tests() {

	it( 'should export a function', function test() {
		expect( skewness ).to.be.a( 'function' );
	});

	it( 'should compute the distribution skewness using an accessor', function test() {
		var p, actual, expected;

		p = [
			{'p':0.2},
			{'p':0.4},
			{'p':0.6},
			{'p':0.8}
		];
		actual = new Array( p.length );

		actual = skewness( actual, p, getValue );
		expected = [ 2.012461, 2.065591, 2.213594, 2.683282 ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.p;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( skewness( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var p, actual, expected;

		p = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( p.length );
		actual = skewness( actual, p, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
