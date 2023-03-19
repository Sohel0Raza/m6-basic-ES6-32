// function declaration 
// function add (first = 0, second = 0){
//     const total = first + second;
//     return total;
// }

// function expression
const add1 = function add1 (first,second){
    const total = first + second;
    return total;
}
const add2 = function (first,second){
    const total = first + second;
    return total;
}


function add3 (first, second ){
     return first + second;
}
const add4 = function(first, second){
    return first + second;
}

// arrow function 
const add6 = (first, second) => first + second;

const result = add6(19, 20)
console.log(result);