//ЧИСЛА


//Число
let someNum_1 = 458;
console.log(someNum_1);

//Десятичные числа
let someNums_1 = 4.58;
console.log(someNums_1);

//Миллион можно записать более надёжно, чтоб не запутаться в нулях
let someBigNum_1 = 1e6; // 1 * 1000000;
console.log(someBigNum_1)


//Одну миллионную можно записать более надёжно, чтоб не запутаться в нулях
let someLittleNum_1 = 1e-6; // 1 / 1000000;
console.log(someLittleNum_1)


//Шестнадцатеричные, дробные и восьмеричные числа

/*
Шестнадцатеричные числа широко используются в Javascript
для представления цветов, кодировки символов и многого другого
*/

console.log(0xFF); // = 255

//Реже используются двоичные и восьмеричные числа

console.log(0b11111111); // = 255
console.log(0o377); // = 255

/*
Метод num.toString(base) возвращает строковое
представление числа в той или иной системе счисления (base)
base может принимать значения от 2 до 36 (по умолчанию 10)
*/

let num_1 = 255;
console.log(num_1.toString(16));
console.log(num_1.toString(8));
console.log(num_1.toString(2));

//Округление чисел

//В Javascript встроен объект Math, который содержит
//несколько функций для работы с округлением:

//Math.floor - Округление в меньшую сторону

let numOne_1 = Math.floor(5.8);
let numTwo_1 = Math.floor(2.2);
let numThree_1 = Math.floor(-2.2);

console.log(numOne_1);
console.log(numTwo_1);
console.log(numThree_1);

//Math.ceil - Округление в большую сторону

let numOne_2 = Math.ceil(5.8);
let numTwo_2 = Math.ceil(2.2);
let numThree_2 = Math.ceil(-2.2);

console.log(numOne_2);
console.log(numTwo_2);
console.log(numThree_2);

//Math.round - Округление до ближайшего целого

let numOne_3 = Math.round(5.8);
let numTwo_3 = Math.round(2.2);
let numThree_3 = Math.round(-2.2);

console.log(numOne_3);
console.log(numTwo_3);
console.log(numThree_3);

/*
let numOne = Math.round(5.845);
console.log(numOne); // 6
*/

//Как нам получить 5.8 или 5.85 ?

//Способ умножения и деления

let numOne_4 = Math.round(5.845 * 10) / 10; //58.45 -> 58 -> 5.8
console.log(numOne_4);

let numTwo_4 = Math.round(5.845 * 100) / 100; //584.5 -> 585 -> 5.85
console.log(numTwo_4);

let numThree_4 = Math.round(5.8449 * 100) / 100;  //584.59 -> 584 -> 5.84
console.log(numThree_4);

//Метод toFixed(n) - округляет число до n знаков после запятой
//и возвращает строковое представление результата

let numOne_5 = 5.845;
console.log(numOne_5.toFixed(1));  //получаем строку

//Преобразуем в число
console.log(+numOne_5.toFixed(1));
console.log(Number(numOne_5.toFixed(1)));

//Проблема неточных вычислений

let numOne_6 = Math.round(1.005 * 100) / 100; //Ожидаем 1.01
console.log(numOne_6);

let numTwo_6 = 12.35;
console.log(numTwo_6.toFixed(1)); //Ожидаем 12.4

let problem = 0.1 + 0.2 === 0.3;
console.log(problem);
console.log(0.1 + 0.2);

//Решение проблем с помощью Number.EPSILON
//Number.EPSILON - это очень очень маленькое число
//и прибавляя его к нашему числу мы решаем проблему

let sourceNum = 1.005 + Number.EPSILON;
let numFour = Math.round(sourceNum * 100) / 100;
console.log(numFour);

console.log(sourceNum * 100);
console.log(Math.round(sourceNum * 100));

//Проверка: isFinite и isNaN
/*
Существуют специальные числовые значения такие как 
Infinity - бесконечность и  NaN - ошибка вычисления
Эти значения также являются типом данных number,
но не являются обычными числами.
Для проверки таких значений существуют специальные функции
*/

//Проверка isNaN

console.log(Number(25 + 'Привет'));

console.log(isNaN(25 + 'Привет'));

/*
NaN - это уникальное значение и NaN никогда не будет
равен NaN - поэтому проверки ниже не подойдут
И NaN никогда не будет равен NaN
Поэтому используем специальную функцию проверки isNaN
*/

if (25 + 'Hi' !== NaN) {
    console.log('I am not NaN');
}

console.log(NaN === NaN);

//Проверка isFinite преобразует аргумент в число и 
//возвращает true, если оно является обычным числом

console.log(isFinite('25'));     //'25' -> 25 -> true
console.log(isFinite('Hi'));     //NaN -> false
console.log(isFinite(10 / 0));   //Infinity -> false

//parseInt и parseFloat
//Преобразовать строку в число можно с помощью унарного оператора 
//сложения либо специальной функции Number

let valueOne_1 = +'150';
console.log(valueOne_1);
console.log(typeof valueOne_1);

/*
Но, мы очень часто сталкиваемся со значениями
у которых есть единица измерения, например
*/

let valueTwo_1 = +'150px';
console.log(valueTwo_1);
console.log(typeof valueTwo_1);

/*
Для получения чисел из такой строки существуют parseInt и parseFloat
Если в процессе чтения возникает ошибка, они возвращают полученное до 
ошибки число

Функция parseInt возвращает целое число,
а parseFloat возвращает число с плавающей точкой
*/

let valueOne_2 = parseInt('150.58px');
console.log(valueOne_2);
console.log(typeof valueOne_2);

let valueTwo_2 = parseFloat('150.58px');
console.log(valueTwo_2);
console.log(typeof valueTwo_2);

//Если первым символом строки будет не число - то вернётся NaN

let valueOne_3 = parseInt('a150.58px');
console.log(valueOne_3);
console.log(typeof valueOne_3);

let valueTwo_3 = parseFloat('a150.58px');
console.log(valueTwo_3);
console.log(typeof valueTwo_3);

/*
Функция parseInt() имеет необязательный второй параметр
Он определяет систему счисления, таким образом parseInt
может также читать строки с шестнадцатеричными числами,
двоичными числами и т.д.
*/

console.log(parseInt('0xff', 16));
console.log(parseInt('ff', 16));

//Другие возможности

//Math содержит также различные математические функции и константы

//Math.random()
//Возвращает псевдослучайное число в диапазоне 
//от 0(включительно) до 1(но не включая 1)

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//Math.max(a, b, c ...) / Math.min(a, b, c ...)
//Возвращает наибольшее/наименьшее число из перечисленных аргументов

console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));

//Math.abs()
//Возвращает абсолютное значение (модуль) числа

let num = -58;
console.log(Math.abs(num));

//Math.pow(n, power)
//Возвращает число n, возведенное в степень power

console.log(Math.pow(5, 8))














