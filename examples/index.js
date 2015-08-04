'use strict';

var matrix = require( 'dstructs-matrix' ),
	skewness = require( './../lib' );

var p,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
p = new Array( 10 );
for ( i = 0; i < p.length; i++ ) {
	p[ i ] = i;
}
out = skewness( p );
console.log( 'Arrays: %s\n', out );


// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < p.length; i++ ) {
	p[ i ] = {
		'x': p[ i ]
	};
}
out = skewness( p, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Deep set arrays...
for ( i = 0; i < p.length; i++ ) {
	p[ i ] = {
		'x': [ i, p[ i ].x ]
	};
}
out = skewness( p, {
	'path': 'x/1',
	'sep': '/'
});
console.log( 'Deepset:');
console.dir( out );
console.log( '\n' );


// ----
// Typed arrays...
p = new Int32Array( 10 );
for ( i = 0; i < p.length; i++ ) {
	p[ i ] = i;
}
tmp = skewness( p );
out = '';
for ( i = 0; i < p.length; i++ ) {
	out += tmp[ i ];
	if ( i < p.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( p, [5,2], 'int32' );
out = skewness( mat );
console.log( 'Matrix: %s\n', out.toString() );


// ----
// Matrices (custom output data type)...
out = skewness( mat, {
	'dtype': 'uint8'
});
console.log( 'Matrix (%s): %s\n', out.dtype, out.toString() );
