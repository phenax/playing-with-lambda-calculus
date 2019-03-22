
const toNumber = n => n(x => x + 1)(0);
const toBool = b => b(true)(false);

const logBoolean = (...bools) => console.log(...bools.map(toBool));
const logNumber = (...nums) => console.log(...nums.map(toNumber));

module.exports = { logBoolean, logNumber, toNumber, toBool };

