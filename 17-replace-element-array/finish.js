/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const myArray = [true, null, 123, 'string']

console.log(myArray)

//myArray.splice(1, 1, 'papadokulus') - способ с помощью  splice

myArray[1] = 'vegetable'

console.log(myArray)