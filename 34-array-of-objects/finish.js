/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars = [
    {
        carBrand: 'BMW',
        price: 10000,
        isAvailableForSale: false,
    },
    {
        carBrand: 'Audi',
        price: 9000,
        isAvailableForSale: true,
    },
    {
        carBrand: 'Lotus',
        price: 100000,
        isAvailableForSale: false,
    }]

const newCars = {
    carBrand: 'Mercedes',
    price: 11000,
    isAvailableForSale: true,
}

cars.push(newCars)

console.log(cars)

//console.log(cars[1].carBrand)