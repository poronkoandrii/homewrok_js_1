// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
const name = prompt("Введите ваше имя");
console.log(`Привет, ${name}`);
// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
const age = +prompt("Введите ваш год рождения");
const thisYear = 2020;
console.log(`Ничесе тебе уже ${thisYear - age}`);
// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
const length = +prompt("Введите длину стороны квадрата");
console.log(`P квадрата равен: ${length * 4}`);
// Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const radius = +prompt("Введите радиус окружности");
const pi = 3.14;
console.log(`S окружности равна ${pi * radius * radius}`);
// Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
const distance = +prompt("Введите расстояние в км между двумя городами");
const time = +prompt("Введите время за которое вам нужно добраться");
console.log(`Вы должны двигаться со скоростью ${distance / time} км/ч`);
// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const dollars = +prompt("Какое количество зелени вы приготовили к обмену?");
const exchange = 0.9;
console.log(`Вы получите ${dollars * exchange} euro`);
// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const usb = +prompt("Введите объем флешки в Гб");
console.log(`На флешку поместиться ${usb / 0.82} файлов объемом 820мб`);
// Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
const money = +prompt(
  "Введите сумму денег, которые вы готовы потрать на шоколад"
);
const price = +prompt("Введите цену за шоколад");
console.log(
  `Вы можете купить шоколадок: ${
    (money - (money % price)) / price
  } и у Вас останется ${money % price}$`
);
// Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
const number = prompt("Введите число xxx");
let a = number % 10;
let b = ((number - a) / 10) % 10;
let c = ((number - a) / 10 - b) / 10;
let newNumber = Number("" + a + b + c);
console.log(`Новое число ${newNumber}`);
// Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
const sum = +prompt("Введите сумму вклада");
let percent = 5;
let month = 2;
console.log(
  `Сумма начисленных процентов за ${month} месяца составила $${
    (percent / 100 / 12) * sum * month
  }`
);
