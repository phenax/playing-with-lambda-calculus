const { I, M, K, KI, C, B, V } = require('./combinators');

// \abf.fab
const Pair = V;

// \V[ab].a
const fst = p => p(K);

// \V[ab].b
const snd = p => p(KI);

module.exports = { Pair, fst, snd };


