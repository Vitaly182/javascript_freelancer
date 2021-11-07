//СТРОКИ

/*
Запись строк. Кавычки.
Строку можно создать с помощью одинарных,
двойных либо обратных кавычек
*/

let someStringOne_1 = 'Hello, I am string';
let someStringTwo_1 = "Hello, I am string";
let someStringThree_1 = `Hello, I am string`;

console.log(someStringOne_1);
console.log(someStringTwo_1);
console.log(someStringThree_1);

/*
Одинарные и двойные кавычки работают одинаково,
а если использовать обратные кавычки, то в такую строку
можно вставлять произвольные выражения, обернув их в ${...}
*/

let textHi = "Привет!";
let textAll = `${textHi} я строка!`;
console.log(textAll);

function someSum(a, b) {
    return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`);

//Многострочная запись
let text_1 = `Привет
Вы на канале
Фрилансер по жизни!
`;
console.log(text_1);

/*
Всё что заключено в любые кавычки будет
иметь тип данных строка
*/

let someString_1 = '158';
let someNum_1 = 158;
console.log(someString_1);
console.log(typeof someString_1);
console.log(someNum_1);
console.log(typeof someNum_1);

console.log(someString_1 + someNum_1);


//Спецсимволы

/*
Внутри строк сожно использовать ряд спецсимволов.
Все спецсимволы начинаются с обратного слэша,
\ - так называемого "символа экранирования".
*/

//Перевод строки \n

let text_2 = `Привет
Вы на канале
Фрилансер по жизни!
`;
console.log(text_2);

let text_3 = 'Привет\nВы на канале\nФрилансер по жизни!';
console.log(text_3);

//Табуляция (отступ) \t

let text_4 = 'Привет\n\tВы на канале\n\t\tФрилансер по жизни!';
console.log(text_4);

//Обратный слэш \\
//чтоб записать обратный слэш \ нужно записать 
//2 обратных слэша

let text_5 = 'Привет Вы на канале \\ Фрилансер по жизни!';
console.log(text_5);

//Кавычки внутри строки \' \"

let text_6 = 'Привет Вы на канале \'Фрилансер по жизни!\'';
console.log(text_6);

//Иконки, символы UTF-16 \uКОД, UTF-32 \u{КОД}

let text_7 = "Живи, а работай в свободное время \u00A9 \u{1F60D}";
console.log(text_7);

//Длина строки. Свойство lenght

let text_8 = "Живи";
console.log(text_8.length);

//Получаем символы строки

let text_9 = 'Hello';
let firstSymbol = text_9[0];
let lastSymbol = text_9[text_9.length - 1];
console.log(firstSymbol);
console.log(lastSymbol);

//Получаем каждый символ строки через цикл

for (const char of text_9) {
    console.log(char);
}

//Изменение регистра

let text_10 = 'Hello!';
console.log(text_10.toUpperCase());
console.log(text_10.toLowerCase());

//Поиск подстроки

//Метод str.indexOf(substr, pos)
/*
Он ищет подстроку substr в строке str, начиная с позиции pos,
и возвращает позицию, на которой располагается совпадение,
либо -1 при отсутствии совпадений
*/

let text_11 = 'Hello mister Syz';
console.log(text_11.indexOf('mis'));
console.log(text_11.indexOf('mis', 2));
console.log(text_11.indexOf('Hel'));
console.log(text_11.indexOf('hel', 8));

//Методы includes, startsWith, endWith
/*
Более современный метод str.includes(substr, pos) возаращает true,
если в строке есть искомая подстрока, либо false, если нет
*/

let text_12 = 'JavaScript';

console.log(text_12.includes('vaSc'));
console.log(text_12.includes('vaSc', 5));

console.log(text_12.startsWith('vaSc'));
console.log(text_12.endsWith('ipt'));

//Регистр имеет значение
//Если ищем в строке подстроку чьи регистры не совпадают
//можно использовать toLowerCase - для приведения 
//в одинаковый регистр

let text_13 = 'JavaScript';
let searchText_13 = 'java';

console.log(text_13.toLowerCase().includes(searchText_13.toLowerCase()));

/*
В итоге indexOf стоит использовать тогда когда нам нужна
позиция найденной подстроки
В остальных случаях удобнее использовать includes
*/


//Метод str.slice(start [, end]) - Возвращает часть строки
//от start до end (не включая)

let text_14 = 'JavaScript';
console.log(text_14.slice(1, 2));
console.log(text_14.slice(-2, -1));
console.log(text_14.slice(1));
console.log(text_14.slice(1, 6));


//Сравнение строк

//Алфавитный порядок
console.log('A' > 'B'); //B больше, т.к. идёт дальше по алфавиту чем A
console.log('a' > 'B'); //нижний регистр всегда больше верхнего регистра
console.log('a' > 'a');

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Количество символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилинсер' > 'фрилансер');

/*
Алгоритм сравнения двух строк
1. Сначало сравниваются первые символы строк
2. Если первый символ первой строки больше(меньше),
чем первый символ второй, то первая строка
больше(меньше) второй. Сравнение завершено
3. Если первые символы равны, то таким же образом
сравниваются уже вторые символы строк
4. Сравнение продолжается, пока не закончится одна из строк
5. Если обе строки заканчиваются одновременно, то они равны.
Иначе, большей считается более длинная строка
*/

























