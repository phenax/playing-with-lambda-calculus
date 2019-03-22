const { I, M, K, KI, C, B, V } = require('./combinators');

// \abf.fab
const Pair = V;

// \V[ab].a
const fst = p => p(K);

// \V[ab].b
const snd = p => p(KI);


const List = v => (l = null) => Pair(v)(l);

const map = f => l => l ? List(f(fst(l)))(map(f)(snd(l))) : null;
const append = x => l => l ? List(fst(l))(append(x)(snd(l))) : List(x)(null);

module.exports = { Pair, fst, snd, List, map, append };


