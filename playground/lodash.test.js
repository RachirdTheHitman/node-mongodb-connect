const _ = require('lodash');

obj = {a: 1, b: 2, c: 3, e: 4};
console.log(_.pick(obj, ['a', 'c', 'd', 'e']));
