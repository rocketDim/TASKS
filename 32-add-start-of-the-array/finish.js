/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null]

// Напишите код здесь
myArray.unshift('Hello')
console.log(myArray.unshift(100))
//const myNewArray = [100, 'Hello', ...myArray]

console.log(myArray) // [100, "Hello", true, null]
//console.log(myArray.length)