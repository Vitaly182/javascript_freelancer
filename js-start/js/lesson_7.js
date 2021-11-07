//Стрелочные функции, рекурсия, 
//планирование: setTimeout и setInterval

// Объявление функции (Function Declaration)
/*
function имя(параметры) {
     тело (код) функции
}
*/ 

/*
Как правило, в имени функции используются определенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." - обычно что-то показывают,
"get..." - возвращают значение,
"calc..." - что-то вычисляют,
"create..." - что-то создают,
"check..." - что-то проверяют и возвращают логическое значение

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
*/


//Запускать функцию можно как после её объявления, так и перед её объявлением,
//а также множество раз - этот подход показывает основное предназнаяение
//функции - а это избавление от дублирования кода, и если нужно что-то 
//изменить - достаточно это сделать в одном месте - в теле соответствующей функции



//Функция вывода сообщения

showMessage_1();

function showMessage_1() {
    console.log('Сообщение');
}

showMessage_1();
showMessage_1();


//Вложенность и видимость функций
/*
В функцию можно вкладывать другую функцию.
Функцию нельзя вызвать за пределами родительской функции
*/


function getSum() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSum = numOne + numTwo;
    console.log(numSum)
}
getSum()

/*
В строгом режиме режиме "use strict" вызвать функцию 
за пределами блока не получиться

"use strict"
if (2 > 1) {
    function getSum() {
        let numOne, numTwo;

        function getNumOne() {
            numOne = 1;
        }
        function getNumTwo() {
            numTwo = 2;
        }
        getNumOne();
        getNumTwo();

        let numSum = numOne + numTwo;
        console.log(numSum)
    }
}
getSum()
*/


//Локальные и внешние переменные

//Локальная переменная
//Если объявить переменную внутри функции, то за её
//пределами она не будет видна 
function showMessage_2() {
    //Локальная переменная
    let message = "Вывод внутренней переменной";
    console.log(message);
}
showMessage_2()
//console.log(message); - попытка взаимодействия вызовет ошибку


//Внешняя переменная
//Переменная обьявленная за пределами функции будет видна
//как внутри функции, так и за её пределами

let message_3;

function showMessage_3() {
    //Используется внешняя переменная
    message_3 = "Вывод внешней переменной";   
}
showMessage_3()
console.log(message_3); 

//Но если мы выведем в консоль переменную до выведения функции 
//то получим - undefined


/*
В случае если мы объявим и локальную и внешнюю переменную 
с одним и тем же именем - то это будут абсолютно две
разные переменные и жить каждая будут своей жизнью
*/

let message_4 = 'Сообщение внешнее';

function showMessage_4() {
    let message_4 = 'Сообщение внутреннее';
    console.log(message_4);
}
console.log(message_4);
showMessage_4()


//Глобальные переменные - это внешние переменные объявленные 
//за пределами всех функций

let globalVar = "Глобальная переменная";

function getSumm() {
    let numOne, numTwo;

    function getNumOne() {
        numOne = 1;
        console.log(globalVar);
    }
    function getNumTwo() {
        numTwo = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm = numOne + numTwo;
    console.log(globalVar);
}
console.log(globalVar);

getSumm()


//Параметры (аргументы)

function calcSum(numOne, numTwo) {   //Можем указать значения по умолчанию (numOne = 1, numTwo = 1)
    console.log(`Переменная numOne:${numOne}`);
    console.log(`Переменная numTwo:${numTwo}`);

    let numSum = numOne + numTwo;

    console.log(`Сумма:${numSum}`);
}

calcSum(2, 4);


//Функции - колбэки 
//В качестве передаваемых параметров могут использоваться
//и другие функции
function calcSumm (numOne, numTwo, more, less) {
    let numSumm = numOne + numTwo;

    if (numSumm > 3) {
        more();        
    } else {
        less()
    }
}

function showMoreMessage() {
    console.log('Больше чем 3');
}
function showLessMessage() {
    console.log('Меньше чем 3');
}
calcSumm (1, 5, showMoreMessage, showLessMessage);


//Возврат результата

function calcSmm(numOne, numTwo) {
    let numSumm = numOne + numTwo;

    //Возврат
    return numSumm;

    //return; можно записывать и без значения, тогда вернётся
    //пустой результат и используется когда хотим прекратить 
    //выполнение функции

    //Дальше код не выполняется
}
let funcResult = calcSmm(10, 5);

console.log(`Сумма: ${funcResult}`);


//Рекурсия - это когда функция вызывает саму себя

function getSumm_1(numOne, numTwo) {
    let numSumm = calcSumm_1(numOne, numTwo);

    console.log(numSumm);
}
function calcSumm_1(numOne, numTwo) {
    return numOne + numTwo;
}
getSumm_1(5, 5)


//Пример для преобразования в рекурсию
function calcSumm_2(numOne, numTwo) {
    let result = 1;
    //умножаем result на numOne numTwo раз в цикле
    for (let i = 0; i < numTwo; i++) {
        result *= numOne;
    }
    return result;
}
console.log(calcSumm_2(2, 3));

//Функцию выше можно записать с помощью рекурсии
//Здесь функция calcSumm_3 в определенный момент
//вызывает саму себя передавая немного другие параметры
//Количество вложенных вызовов называется 
//глубиной рекурсии

function calcSumm_3(numOne, numTwo) {
    if (numTwo === 1) {
        return numOne;
    } else {
        return numOne * calcSumm_3(numOne, numTwo - 1);
    }
}
console.log(calcSumm_3(2, 3));

//Количество вложенных вызовов называется глубиной рекурсии
//и ограничивается движком JavaScript
//смело можно рассчитывать на 10 000 вложенных вызовов

//В отношении большого количества задач именно 
//рекурсивный метод позволяет реализовать более 
//простой код, который легче поддерживать


//Функциональное выражение (Function Expression)
//МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ЕГО СОЗДАНИЯ
//в отличии от объявления функции - там можно вызвать и до создания

//Чтобы построить функциональное выражение достаточно объявить
//переменную и присвоить ей функцию без имени
//Других отличий нет - НО НУЖНО ОБЯЗАТЕЛЬНО В КОНЦЕ ПОСТАВИТЬ ;
let showMessage_5 = function () {
    console.log('Home star');
};
showMessage_5();

//В переменную можем скопировать и ранее объявленную функцию

function getSumm_2() {
    let summ = 1 + 2;
    console.log(summ);
};

//В момент копирования функция не выполняется
// т.к. нет круглых скобок
let someVar_2 = getSumm_2; 

someVar_2();
getSumm_2();


/*
Решение проблемы когда функция созданная внутри блока
абсолютна не ивдна за его пределами

"use strict"
if (2 > 1) {
    function getSum() {
        let summ = 1 + 2;
        console.log(summ);
    };
}
getSum();
*/

//Здесь нам на помощь придёт функциональное выражение

//Объявив переменную за пределами блока
//Далее присвоив ей некую функцию - можно вызывать её из 
//любого места программы

let getSumm_3;

if (2 > 1) {
    getSumm_3 = function () {
        let summ = 2 + 7;
        console.log(summ);
    };
}
getSumm_3();


//Стрелочные функции (arrow function)
/*
Вместо функции выражения
let имя переменной = function (параметр, ...параметр) {
    return выражение;
};

Можно записать в виде стрелочной функции
let имя переменной = (параметр, ...параметр) => выражение
*/

//Однострочная стрелочная функция
let getMessage_1 = (text, name) => text + ', ' + name + '!';
console.log(getMessage_1('Энрике', 'эврика'));

//Многострочная стрелочная функция
let getMessage_2 = (text, name) => {
    let message = text + ', ' + name + '!';
    return message;
};
console.log(getMessage_2('2', '555'));


//Планирование setTimeout и setInterval
/*
Чтобы реализовать планирование существует два метода:
1. setTimeout позволяет вызвать функцию один раз 
через определенный интервал времени
setTimeout(функция или код, задержка, параметр, ...параметр);
2. setInterval позволяет вызввать функцию регулярно,
повторяя вызов через определенный интервал времени
setInterval(функция или код, задержка, параметр, ...параметр);
*/

function showMessage_6 (text, name) {
    console.log(`${text}, ${name}!`);
}
setTimeout(showMessage_6, 3000, 'Hello', 'world')
setInterval(showMessage_6, 3000, 'Hello', 'world')

//setInterval можем на рекурсивный setTimeout
//такой подход даст более точную задержку
function showMessage_7 (text, name) {
    console.log(`${text}, ${name}!`);
    setTimeout(showMessage_7, 3000, 'Hello', 'world')
}
setTimeout(showMessage_7, 3000, 'Hello', 'world')


// Еще пример
function showNumber(num) {
    console.log(num);
    if (num < 5) {
        setTimeout(showNumber, 1000, ++num);
    }    
}
setTimeout(showNumber, 1000, 1)


//clearTimeout
function showNumber_1(num_1) {
    console.log(num_1);
    let timeId = setTimeout(showNumber_1, 1000, ++num_1);
    if (num_1 === 9) {
        clearTimeout(timeId);
    }    
}
setTimeout(showNumber_1, 1000, 1)


//clearInterval
let result = 0;
function showNumber_2(num_2) {
    result += num_2;
    console.log(result);
    if (result === 25) {
        clearInterval(timeId);
    }    
}
let timeId = setInterval(showNumber_2, 1000, 1)


//Желательно чтоб функции были простыми и короткими
//Если нам нужно выполнить еще одно действие 
//можем использовать объединяющую функцию

//Функция объелинения строк
function createMassage(text, name) {
    return `${text}, ${name}!`;
}

//Функция вывода в консоль
function showMassage(massage) {
    console.log(massage);
}

//Объединяющая функция, вызввает обе функции
function initMessage(text, name) {
    showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер')





