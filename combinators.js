
// Idiot \a.a
const I = a => a;

// Mockingbird \f.ff
const M = f => f(f);

// Kestrel \ab.a
const K = a => b => a;

// Kite \ab.b
const KI = K(I);

// Cardinal \fab.fba
const C = f => a => b => f(b)(a);

// Bluebird \fga.f (g a)
const B = f => g => a => f(g(a));

// Viero \abf.fab
const V = a => b => f => f(a)(b);

module.exports = { I, M, K, KI, C, B, V };

