// Переменные / Константы /
// Ключевые слова LET CONST VAR

// Объявление переменной с ключевым словом let
// Имя переменной может содержать только буквы,
// лучше латинского алфавита, цифры и символы $ и _
// При этом имя переменной не может начинаться цифрой

//Верное объявление
let age;
let info123;
let $size;
let _color;

//Неверное объявление
//let 123info;
//let my-age;

//Названия переменных

//Вместо
let s;
let dfdsfdsfdsfdsf;
let qaqaqqawewe;

//Лучше писать 
let size;
let age_1;
let leftSidebarSize;

//Регистр имеет значение
let sidebarsize;
let sidebarSize;

//Нельзя использовать зарезервированные имена
//let let;
//let break;
//let for;

//ПРИСВОЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ

//Объявление без значения
let myLifeStyle_1;

//Присвоение значения
myLifeStyle_1 = 'freelance';

//Объявление переменной и присвоение значения
let myLifeStyle_2 = 'freelance';

//Объявление нескольких переменных

//В строку через запятую
let myName_1 = 'Фрилансер', myAge_1 = 36, myMessage_1 = 'Живи, работай в свободное время!';

//Через запятую с новой строки
let myName_2 = 'Фрилансер',
    myAge_2 = 36,
    myMessage_2 = 'Живи, работай в свободное время!';

//Отдельно
let myName_3 = 'Фрилансер';
let myAge_3 = 36;
let myMessage_3 = 'Живи, работай в свободное время!';

//Изменение значения переменной
let myAge_4 = 36;
myAge_4 = 18;
console.log(myAge_4)

//Передача значений переменных
let myAge_5 = 36;
let myNewAge_5 = 46;
//Копируем значение переменной myNewAge в переменную myAge
myAge_5 = myNewAge_5;
console.log(myAge_5)

//При включенном режиме use strict (что чаще присутствует в современных проектах)
// объявление переменной возможно только с ключевым словом let
// Без включенного use strict - можно объявлять и без let


//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННОЙ

//Пример блока инструкций
function testBlock_1() {
    console.log('Learn');
    console.log('JS');
}
testBlock_1();

//Переменные внутри и за пределами блока имеют одно и тоже название
//Фактически это разные переменные и дают разные значения
let myAge_6 = 40;

function testBlock_2() {
    let myAge_6 = 25;
    console.log(myAge_6);
}
testBlock_2()

console.log(myAge_6);

//В рамках одного блока переменную стоит использовать 
//только после её объявления

//Повторное объявление переменной в рамках одного блока запрещено
//В тоже время внутри блока (например цикла) проблем нет
for (let i = 0; i < 3; i++) {
    //Тут своя переменная
    console.log(i)
}
for (let i = 0; i < 3; i++) {
    //И тут своя переменная
    console.log(i)
}

//КОНСТАНТЫ

//Объявление константы
const myAge_7 = 44;
//myAge_7 = 18; нельзя изменить константу

//Имена констант с заранее известными значениями
//записываем в ВЕРХНЕМ регистре
const BLOCK_SIZE = 25;
const COLOR_RED = "#F00";

//Имена констант с просвоенным значением 
//записываем как и имена переменных (в верблюжьем стиле)
const summSizes = 25 + 30;

//Смена значений в константе
//Объект с данными
const userProfile = {
    name: 'Фрилансер',
    age: 40,
    message: "Живи, а работай в свободное время!"
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 118;
//Ошибки нет, данные изменились
console.log(userProfile);


//Ключевое слово VAR

//Переменную можно использовать до её объявления ключевым словом var
//при этом неважно используем мы use strict или нет

age_2 = 115;
console.log(age_2);

var age_2;

//Область видимости переменных при var

//В блоках function - что с let, что с var
//Переменная не видна за пределами блока

function testBlock_3() {
    let myAgeLet = 38;
}
testBlock_3();

//console.log(myAgeLet); - не работает - не видит

function testBlock_3() {
    var myAgeLet = 38;
}
testBlock_3();

//console.log(myAgeLet); - не работает - не видит


//В других блоках, кроме function 
//let не видна за пределами блока
//var ВИДНА за пределами блока

if (true)  {
    let sizeLet = 38;
}

//console.log(sizeLet); - не работает - не видит

if (true)  {
    var sizeVAR = 138;
}

console.log(sizeVAR); //работает, ВИДИТ

//РЕКОМЕНДУЕТСЯ СОЗДАВАТЬ ОТДЕЛЬНУЮ ПЕРЕМЕННУЮ ДЛЯ КАЖДОГО ОТДЕЛЬНОГО ЗНАЧЕНИЯ
