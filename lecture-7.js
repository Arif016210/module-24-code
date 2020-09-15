let bonus = 20;

function add(num1, num2) {
    let sum = num1 + num2 + bonus;
    // console.log('Sum = ', sum);
    if (sum > 20) {
        const mood = 'Happy';
        console.log(mood);
    }
    return sum;
}

const result = add(7, 3);
console.log('Result = ', result);