/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Validate a value is NaN:
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	skewness = require( './../lib/number.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'number skewness', function tests() {

	it( 'should export a function', function test() {
		expect( skewness ).to.be.a( 'function' );
	});

	it( 'should compute the distribution skewness', function test() {
		assert.strictEqual( skewness( 0.2 ), 2.012461 );
		assert.strictEqual( skewness( 0.4  ), 2.065591 );
		assert.strictEqual( skewness( 0.6  ), 2.213594 );
		assert.strictEqual( skewness( 0.8  ), 2.683282 );
	});

	it( 'should return `NaN` for invalid values of parameter p', function test() {
		assert.isTrue( isnan( mean( -1 ) ) );
	});

});
