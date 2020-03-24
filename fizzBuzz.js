const fizzBuzz = (number) => {
    const multipl3 = number % 3 === 0;
    const multipl5 = number % 5 === 0;

    if (multipl3 && multipl5) {
        return "fizzbuzz"
    } else if (multipl3) {
        return "fizz"
    } else if (multipl5) {
        return "buzz"
    } else {
        return number
    }
};


console.log(fizzBuzz(15));
console.log(fizzBuzz(5));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
module.exports = fizzBuzz;