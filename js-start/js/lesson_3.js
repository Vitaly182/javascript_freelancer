// ТИПЫ ДАННЫХ JAVASCRIPT

//Динамическая типизация

/*
JavaScript является динамически типизированным
т.е. тип данных переменной меняется динамически 
в момент присвоения либо смены её значения
А не в момент объявления
*/

/*
типы данных Javascript
Undefined
Null
Boolean
Number
BigInt
String
Symbol
Object
Function
*/

//Undefined - неопределенный тип
let userName_1; // Объявляем переменную

console.log(typeof userName_1); // Получаем тип данных

console.log(userName_1); //Получаем значение переменной

//Примеры использования
//Проверяем определена ли переменная
if(userName_1 === undefined) {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}

// либо с помощью оператора typeof
if(typeof userName_1 === 'undefined') {
    console.log('Переменная НЕ определена');
} else {
    console.log('Переменная определена');
}

//Null
/*
Null, также как и Undefined,
содержит только одно значение null
*/

//Пример
let userName_2 = null;
console.log(userName_2);

//Пример
//Попытка обратиться к объекту которого нет
let block = document.querySelector('.block')

//Получаем null
console.log(block);
//Вернёт тип object
console.log(typeof block);

//Boolean
/*
Булевый или логический тип
Может принимать только два значения true/false
*/

//Пример
let willYouMarryMe = true;
if (willYouMarryMe) {
    console.log(':)');
} else {
    console.log(':(');
}

//Также можно использовать с операторами сравнения
let trueOrFalse = 58 < 18;
console.log(trueOrFalse)

//Number
/*
Числовой тип данных представляет значения как в виде целых чисел,
так и в виде чисел с плавающей точкой
*/

let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

//Infinity
let getInfinity_1 = 58 / 0;
console.log(getInfinity_1);
console.log(typeof getInfinity_1);

//-Infinity
let getInfinity_2 = -58 / 0;
console.log(getInfinity_2);
console.log(typeof getInfinity_2);

//NaN - означает вычислительную ошибку
let getNan = "Фрилансер" / 10;
console.log(getNan);
console.log(typeof getNan);

/*
Если где-то в математическом выражении есть NaN,
то результатом вычислений с его участием будет NaN
*/

//BigInt

/*
В Javascript тип данных "number" не может содержать числа больше, чем
9007199254740991, или меньше чем -9007199254740991
*/

//BigInt
const bigInteger = 12345678901234567890123456789n;
console.log(typeof bigInteger)


//String
//двойные кавычки
let userName_3 = "Фрилансер по жизни";
console.log(typeof userName_3);

//одинарные кавычки
let userName_4 = 'Фрилансер по жизни';
console.log(typeof userName_4);

//обратные кавычки
let userName_5 = `Фрилансер по жизни`;
console.log(typeof userName_5);

//двойные и одинарные кавычки являются простыми
//и в javascript между ними нет разницы
//а вот обратные кавычки позволяют использовать дополнительный функционал 
//и встраивать в строку некие выражения с помощью конструкции ${переменная}
let userAge_5 = 35;
let useAgeInfo_5 = `Возраст: ${userAge_5}`;
console.log(useAgeInfo_5)


//Object
/*Объекты отличаются от предыдущих примитивных типов,
т.к. у них могут быть только простые значения - строка или число
Объект содержит в себе более сложную структуру данных
Объект может быть создан с помощью фигурных скобок и содержать 
в себе набор необязательных свойств
Свойство это пара ключ плюс значение, разделяются двоеточием
Свойство между собой разделяют запятой
*/

let userInfo = {
    name: "Фрилансер по жизни",
    age: 114
}
console.log(userInfo);
console.log(typeof userInfo);

//Symbol
//Символ это уникальный идентификатор объекта
//создаются новые символы с помощью функции Symbol

let id = Symbol("id");
console.log(typeof id)


//Function
//по сути этот тип тот же object для удобства
//выведенный в отдельный тип


let funcVariable = function name(params) {
    // код функции
}
console.log(typeof funcVariable)


//ПРЕОБРАЗОВАНИЕ ТИПОВ
/*
в javascript можно преобразовывать один тип в другой с помощью 
операторов или специальных функций
*/

//Строковое преобразование
let userAge_6 = 66;
console.log(userAge_6);
console.log(typeof userAge_6);

userAge_6 = String(userAge_6);
console.log(userAge_6);
console.log(typeof userAge_6);


let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);
console.log(userTrue);
console.log(typeof userTrue);

//Численное преобразование
let userAge_7 = "7766";
console.log(userAge_7);
console.log(typeof userAge_7);

userAge_7 = Number(userAge_7);
console.log(userAge_7);
console.log(typeof userAge_7);

//Если мы попытаемся преобразовать строку в число
//а в этой строке нет никаких чисел то мы получим Nan
let userAge_8 = "Freelancer";
console.log(userAge_8);
console.log(typeof userAge_8);

userAge_8 = Number(userAge_8);
console.log(userAge_8);
console.log(typeof userAge_8);


//Пример автоматического преобразования
//без использования специальной функции
let userAge_9 = "72" / "2";
console.log(userAge_9);
console.log(typeof userAge_9);


//Логическое преобразование
//из числа в булевое вернёт true 
let userAge_10 = 160;
console.log(userAge_10);
console.log(typeof userAge_10);

userAge_10 = Boolean(userAge_10);
console.log(userAge_10);
console.log(typeof userAge_10);

// при 0 вернёт false
let userAge_11 = 0;
console.log(userAge_11);
console.log(typeof userAge_11);

userAge_11 = Boolean(userAge_11);
console.log(userAge_11);
console.log(typeof userAge_11);

//строка содержащая 0 - вернёт true
let userAge_12 = "0";
console.log(userAge_12);
console.log(typeof userAge_12);

userAge_12 = Boolean(userAge_12);
console.log(userAge_12);
console.log(typeof userAge_12);

//пустая строка - вернёт false
let userAge_14 = "";
console.log(userAge_14);
console.log(typeof userAge_14);

userAge_14 = Boolean(userAge_14);
console.log(userAge_14);
console.log(typeof userAge_14);

//строка содержащая пробел - вернёт true
let userAge_13 = " ";
console.log(userAge_13);
console.log(typeof userAge_13);

userAge_13 = Boolean(userAge_13);
console.log(userAge_13);
console.log(typeof userAge_13);
