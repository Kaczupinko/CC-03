/*
function sum(a, b) {
    return a + b;
}



const sum = (a, b) => a + b;
console.log(sum(1, 2))

const difference = (a, b) => a - b;
console.log(difference(1, 2))

const maxNumber = (a, b, c) => Math.max(a, b, c);
console.log(maxNumber(31, 22, 13))

const evenOrOdd = (a) => a % 2 === 0 ? 'even' : 'odd';
console.log(evenOrOdd(3))
console.log(evenOrOdd(4))
console.log(evenOrOdd(5))

const celciusToFahrenheit = (a) => a * 1.8 + 32;
console.log(celciusToFahrenheit(30))

function sredniaArytmetyczna(a, b, c) {
    return (a + b + c) / 3;

}
console.log(sredniaArytmetyczna(1, 2, 3))

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sredniaArytmetyczna(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(Math.floor(sredniaArytmetyczna(numbers)))


function poleTrojkata(a, b, h) {
    const p = (a + b + h) / 2;
    const pole = Math.sqrt(p * (p - a) * (p - b) * (p - h));
    return pole;
}
console.log(poleTrojkata(3, 4, 5))



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tableOddNumbers(numbers) {
    let oddNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i])
        }
    }
    return oddNumbers;
}
console.log(tableOddNumbers(numbers))

function tableEvenNumbers(numbers) {
    let evenNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i])
        }
    }
    return evenNumbers;
}
console.log(tableEvenNumbers(numbers))

const quotes = 'Jakie jest najdluzsze slowo w jezyku polskim?'

function longestWord(quotes) {
    let longest = '';
    let words = quotes.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(longestWord(quotes));


const table1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const table2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function sumTables(table1, table2) {
    let sum = [];
    for (let i = 0; i < table1.length; i++) {
        sum.push(table1[i] + table2[i])
    }
    return sum;
}
console.log(sumTables(table1, table2))



const table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function nthElement(table, n) {
    return table[n];
}
console.log(nthElement(table, 5))

function bezwzgledna(a) {
    return Math.abs(a);
}
console.log(bezwzgledna(-5))

function nwd(a, b) {
    if (b === 0) {
        return a;
    } else {
        return nwd(b, a % b)
    }
}
console.log(nwd(10, 5))


function sumOfNumber(a) {
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfNumber(15))

function palindrome(word) {
    let reverse = word.split('').reverse().join('');
    return word === reverse;
}
console.log(palindrome('kajak'))
console.log(palindrome('samochod'))

function factorial(a) {
    let result = 1;
    for (let i = 1; i <= a; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5))
function squareNumber(a) {
    return a * a;
}
console.log(squareNumber(5))

function fibbonaci(a) {
    let fib = [0, 1];
    for (let i = 2; i <= a; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[a];
}
console.log(fibbonaci(51))

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray(array))
*/