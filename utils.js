
const logBoolean = (...bools) => console.log(...bools.map(b => b(true)(false)));
const logNumber = (...nums) => console.log(...nums.map(n => n(x => x + 1)(0)));

module.exports = { logBoolean, logNumber };

