
const { I, M, K, KI, C, B } = require('./combinators');

const True = K;
const False = KI;

// \a.aFT
const not = C;

// \ab.aba
const and = a => b => a(b)(a);

// \ab.aab
const or = a => b => a(a)(b);

// \ab.ab(bFT)
const beq = a => b => a(b)(not(b));

module.exports = { True, False, not, and, or, beq };

