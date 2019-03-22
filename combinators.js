

// \a.a
const I = a => a;

// \f.ff
const M = f => f(f);

// \ab.a
const K = a => b => a;

// \ab.b
const KI = K(I);

// \fab.fba
const C = f => a => b => f(b)(a);

// \fga.f (g a)
const B = f => g => a => f(g(a));

module.exports = { I, M, K, KI, C, B };

