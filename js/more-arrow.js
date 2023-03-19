const add = (first, second) => first + second;
const fullName = (first, last) => first + ' ' + last;
const addAll = (a, b, c, d, ) => a + b + c + d;

//  no parameter arrow function
 const getPie = () => 3.14;

 // one parameter
 const doubleIt = (num) => num * 2;

 // simple version one parameter 
 const fiveItems = num => num * 5;
 const result = fiveItems(2)
//  console.log('result :', result);

// multi line arrow function 
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = z + y;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}
