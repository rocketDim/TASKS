/** ЗАДАЧА 10 - Комментарий перед функцией
 *
 * 1. Объявите функцию с двумя параметрами, значения которых - числа
 *
 * 2. Эта функция должна возвращать разницу между первым и вторым параметром
 *
 * 3. Добавьте многострочный комментарий перед функцией:
 *  - Текст комментария "Возвращает разницу двух чисел"
 *  - Укажите тип параметров - number
 *  - Укажите тип возвращаемого значения - number
 *  - Опишите возвращаемое значение - "Разница чисел"
 *
 * 4. Вызовите функцию
 */

/**
 * Возвращает разницу двух чисел
 * @param {number} num_1 
 * @param {number} num_2 
 * @returns {number} Разница чисел
 */
const myFunction = (num_1, num_2) => {
    return num_1 - num_2
}

const result = myFunction(23, 5)
console.log(result)