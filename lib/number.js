'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );


// FUNCTIONS //

var sqrt = Math.sqrt;


// SKEWNESS //

/**
* FUNCTION skewness( p )
*	Computes the distribution skewness for a geometric distribution with parameter p.
*
* @param {Number} p - success probability
* @returns {Number} distribution skewness
*/
function skewness( p ) {
	if ( !( isNumber(p) && 0 <= p && p <= 1) ) {
		return NaN;
	}
	return ( 2 - p ) / ( sqrt( 1 - p ) );
} // end FUNCTION skewness()


// EXPORTS

module.exports =  skewness;
