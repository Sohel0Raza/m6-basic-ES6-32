
const fish = {
    name: 'King Hilsa',
    address: ' Chadpur',
    color: 'silver',
    phone: '01978393930',
    price: 3000
}
// const phone = fish.phone;
// const color = fish.color;
// const name = fish.name;
const {phone, color}=fish;
// console.log(phone, color)

// array destructuring
const [first, another] = [56, 84]
console.log(first, another);

const nayoks = ['sakib', 'bappi', 'raj']
const [king, lost, notun] = nayoks;
console.log('king :', king);

function getNames(){
    return ['raj', 'dot']
}
const [ me, she] = getNames();
console.log(she, me);
// function get(a, b=9){
//     return a + b ;

// }
// console.log(get(2,7))
const division =(num1, num2) => console.log(num1 / num2);
const rasult = division(4,2)
console.log('rasult :', rasult);
