
const { I, M, K, KI, C, B } = require('./combinators');

// \afb.f (n f a)
const succ = n => f => a => B(f)(n(f))(a);

const _0 = KI;
const _1 = succ(_0);
const _2 = succ(_1);
const _3 = succ(_2);
const _4 = succ(_3);
const _5 = succ(_4);


// \ab.a succ b
const add = a => b => a(succ)(b);

// add _1
const increment = add(_1); // Or succ

// \ab.a (add b) _0
const mul = a => b => a(add(b))(_0);

module.exports = {
  _0, _1, _2, _3, _4, _5,
  add, mul,
};

