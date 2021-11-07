// IF ELSE 
//Условный оператор ?

//Синтаксис
let message_1 = "Привет, фрилансер!";

if (2 > 1) {
    //Код выполняется только если
    //выражение в скобках вернёт true
    console.log(message_1);
}

//В качестве операндов внутри условия моожно использовать и переменные
//предварительно присвоив им некоторые значения
let first_1 = 5;
let second_1 = 5;

if (first_1 === second_1) {
    console.log(message_1);
}

//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
    console.log(message_1);
}

//Преобразование типов
if ("") {
    console.log(message_1); // c "" не работает
}

if (" ") {
    console.log(message_1); // c " " работает
}

if (0) {
    console.log(message_1); // c 0 не работает
}

if (1) {
    console.log(message_1); // c 1 работает
}

//Если нам нужно выполнить только одну инструкцию
//можно использовать более короткая запись
//Код выполняется только если выражение в скобках вернёт true
if (2 > 1) console.log(message_1);


//Блоки ELSE и ELSE IF
let message_2 = "Hello";
let number_2 = 5;

if (number_2 > 10) {
    console.log(message_2);
} else {
    console.log('Условие не выполнено :(');
}


//Несколько условий
if (number_2 > 50) {
    console.log('5 больше 50');
} else if (number_2 > 30) {
    console.log('5 больше 30');
} else if (number_2 > 10) {
    console.log('5 больше 10');
} else if (number_2 > 1) {
    console.log('5 больше 1');
} else {
    console.log('Условие не выполнено :(');
}


//Условный оператор "?"
let message_3 = "Ho-ho"

/*
let messageEnd_3;

if (5 > 1) {
    messageEnd_3 = ", Вася!";
} else {
    messageEnd_3 = ", Оля!";
}
*/

//Вместо записи сверху - можно написать коротко
let messageEnd_3 = (5 > 1) ? ", Вася!" : ", Оля!";

message_3 += messageEnd_3;
console.log(message_3)

//Несколько условий с ?
let message_4 = "Good luck";
let messageEnd_4;

messageEnd_4 = 5 > 10 ? ", Вася!" :
    5 > 30 ? ", Оля!":
        5 > 10 ? ", Миша!":
            5 > 1 ? ", Андрей!": ", Иннокентий!";

message_4 += messageEnd_4
console.log(message_4)


