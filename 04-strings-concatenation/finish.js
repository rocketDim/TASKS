/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */
const firstName = 'Дмитрий'
const lastName = 'Деменко'
const profession = 'JS-developer'

const output1 = `Меня зовут ${firstName} ${lastName} и я ${profession}`

const output2 = 'Меня зовут ' + firstName + ' ' + lastName + ' и я ' + profession

console.log(output1)
console.log(output2)