const numbers = [5, 2, 6, 7, 3, 4]
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


// const output = numbers.map(function (element) {
//     return element * element
// })

// const output = numbers.map(element => element * element)
// const output = numbers.map(x => x * x)

// console.log(output);



// Filter 


// const bigger = numbers.filter(x => x > 5);
const bigger = numbers.filter(function (x) {
    return (x < 5)
});

console.log(bigger);


