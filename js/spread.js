const max = Math.max(12,637,89);
// console.log('max :', max);

const numbers = [38, 37, 91, 36, 23]
const largest = Math.max(...numbers)
// console.log('numbers :', ...numbers);
// console.log('largest :', largest);

const numbers2 = [...numbers];
numbers.push(88)
numbers2.push(67)
console.log('numbers :', numbers);
console.log('numbers2 :', numbers2);
const numbers3 = [43, 73, ...numbers , 89, 78]
console.log('numbers3 :', numbers3);