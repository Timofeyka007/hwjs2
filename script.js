const celsius = 25;
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(`${celsius}°C у Фаренгейтах:`, fahrenheit);

const daysInMonth = 30;
const hoursInMonth = daysInMonth * 24;
const minutesInMonth = hoursInMonth * 60;
console.log(`Днів у місяці: ${daysInMonth}, годин: ${hoursInMonth}, хвилин: ${minutesInMonth}`);

let health = 100;
let energy = 100;
health -= 25; // зменшуємо здоров'я
energy -= 40; // зменшуємо енергію
console.log(`Здоров'я: ${health}, енергія: ${energy}`);

const totalPrice = 1500;
const discount = 0.10; // 10%
const discountedPrice = totalPrice * (1 - discount);
console.log(`Ціна зі знижкою 10%: ${discountedPrice} (початкова: ${totalPrice})`);

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber);
console.log(`Округлене число (${floatNumber}) до меншого:`, roundedDown);

const floatString = "45.67";
const parsedFloat = parseFloat(floatString);
console.log(`Перетворено через parseFloat (${floatString}):`, parsedFloat);

const intString = "123";
const parsedInt = parseInt(intString);
console.log(`Перетворено через parseInt (${intString}):`, parsedInt);

const number = 64;
const sqrtNumber = Math.sqrt(number);
console.log(`Квадратний корінь числа ${number}:`, sqrtNumber);

const integer = 42;
const stringNumber = "256";

const convertedInt = parseInt(stringNumber);
console.log("Рядок перетворений у число (convertedInt):", convertedInt, "тип:", typeof convertedInt);

const convertedString = integer.toString();
console.log("Число перетворене у рядок (convertedString):", convertedString, "тип:", typeof convertedString);
