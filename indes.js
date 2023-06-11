//  Масив 

const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів.

const sumOfPositive = array.filter(elem => elem > 0).reduce((acc, elem) => acc + elem, 0);
const numberOfPositive = array.filter(elem => elem > 0).length;
console.log('Сума позитивних елементів:', sumOfPositive);
console.log('Кількість позитивних елементів:', numberOfPositive);

// Знайти мінімальний елемент масиву та його порядковий номер.

const minElement = Math.min(...array);
const sequenceNumber = array.indexOf(minElement);

console.log("Мінімальний елемент масиву:", minElement);
console.log("Порядковий номер елемента масиву:", sequenceNumber);

// Знайти максимальний елемент масиву та його порядковий номер.

const maxElement = Math.max(...array);
const sequenceNum = array.indexOf(maxElement);

console.log("Максимальний елемент масиву:", maxElement);
console.log("Порядковий номер елемента масиву:", sequenceNum);

// Визначити кількість негативних елементів.

const negativeElem = array.filter(elem => elem < 0).length

console.log("Кількість негативних елементів:", negativeElem);

// Знайти кількість непарних позитивних елементів.

const oddPositiveElem = array.filter(elem => elem > 0 && elem % 2 !== 0).length;

console.log("Кількість непарних позитивних елементів:", oddPositiveElem);

// Знайти кількість парних позитивних елементів.

const evenPositiveElem = array.filter(elem => elem > 0 && elem % 2 === 0).length;

console.log("Кількість парних позитивних елементів:", evenPositiveElem);

// Знайти суму парних позитивних елементів.

const sumOfEvenPositive = array.filter(elem => elem > 0 && elem % 2 === 0).reduce((acc, elem) => acc + elem, 0);

console.log('Сума парних позитивних елементів:', sumOfEvenPositive);

// Знайти суму непарних позитивних елементів.

const sumOfOddPositive = array.filter(elem => elem > 0 && elem % 2 !== 0).reduce((acc, elem) => acc + elem, 0);

console.log('Сума непарних позитивних елементів:', sumOfOddPositive);

// Знайти добуток позитивних елементів.

const productOfPositive = array.filter(elem => elem > 0).reduce((acc, elem) => acc * elem, 1);

console.log('Добуток позитивних елементів:', productOfPositive);

// Знайти найбільший серед елементів масиву, ост альні обнулити.

const maxElem = Math.max(...array);

const largestElem = array.map(elem => (elem !== maxElem ? 0 : elem));

console.log('Найбільший серед елементів масиву:', largestElem);
