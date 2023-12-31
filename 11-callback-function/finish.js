/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */

// Первый способ
//setTimeout(() => console.log('Hello, world!'), 5000)

// Второй способ
const timeHello = () => {
    console.log('Hello, world!')
}

setTimeout(timeHello, 5000)