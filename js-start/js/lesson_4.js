//ОПЕРАТОРЫ

//Термины: "унарный", "бинарный", "операнд"

//Операнд - это то к чему применяется оператор, их еще навывают аргументами

//Примеры:
let userAge_1 = 30 - 6; //Число 30 и 6 - это операнды
//либо
//let userHeight_1 = h - y; //Переменные h и y - это операнды

/*
Бинарными называются операторы, которые применяются к двум операндам
В нашем примере вычитание -, это бинарные оператор
*/
let userAge_2 = 30 - 6;

/*
Унарным считается оеператор, кторый применен только к
одному операнду
*/
let userCash = 800;


//Базовые операторы
let x;
//Сложение +
x = 5 + 8;
console.log(`Результат сложения: ${x}`);

//Вычитание -
x = 9 - 5;
console.log(`Результат вычитания: ${x}`);

//Умножение
x = 9 * 5;
console.log(`Результат умножения: ${x}`);

//Деление
x = 100 / 5;
console.log(`Результат деления: ${x}`);

//Взятие остатка от деления
x = 11 % 3;
console.log(`Результат взятия остатка от деления: ${x}`);

//Возведение в степень
x = 5 ** 3;
console.log(`Результат возведения в степень: ${x}`);


//Специальные возможности операторов

//Применение оператора сложения к строкам
let resultOne = "Фрилансер" + " " + "по" + " " + "жизни";
console.log(resultOne)
console.log(typeof resultOne)

//Если в выражении есть строка, т.е. если хотя бы один операнд будет строкой,
// то конечный результат будет строкой
let resultTwo = "Фрилансер " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Фрилансер";
console.log(resultThree);
console.log(typeof resultThree);

//Казусы
let resultFour = 2 + "2";
console.log(resultFour);
console.log(typeof resultFour);

//Операции до сложения со строкой выполняются как обычно
let resultFive = 58 - 18 + " Фрилансер";
console.log(resultFive)
console.log(typeof resultFive)

//Работа других операторов
let resultSix = "25" - 5;
console.log(resultSix);
console.log(typeof resultSix);

//Или

let resultSeven = 10 * "80";
console.log(resultSeven);
console.log(typeof resultSeven);

//Недопустимая операция
let resultEight = 3 * "Фрилансер";
console.log(resultEight);
console.log(typeof resultEight);


//Унарный оператор сложения

//Со строками
let resultNine = +"3";
console.log(resultNine);
console.log(typeof resultNine);

//С числами
let resultTen = +30;
console.log(resultTen);
console.log(typeof resultTen);

//Пример
let users = "25";
let admins = "10";
console.log(users + admins);

console.log(+users + +admins);

//Более длинная запись
console.log(Number(users) + Number(admins));

//Приоритет операторов

//Разный приоритет
let resultOne_1 = 2 - 1 * 5;
console.log(resultOne_1);

//Скобки
let resultOne_2 = (2 - 1) * 5;
console.log(resultOne_2);

//Одинаковый приоритет
let resultOne_3 = 2 - 1 - 5;
console.log(resultOne_3);


//Оператор присвоения
let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);

//Присваивание по цепочке
let result_One = result_Two = result_Three = 1 + 2;
console.log(result_One);
console.log(result_Two);
console.log(result_Three);

//Более понятная запись
let result_One_1 = 6 + 2;

result_Two_1 = result_One_1;
result_Three_1 = result_One_1;

console.log(result_One_1);
console.log(result_Two_1);
console.log(result_Three_1);

//С помощью оператора присвоения можно сокращать простые вычисления
let users_1 = 5;
users_1 = users_1 + 3;
users_1 = users_1 * 3;

//Можно записать так:
let users_2 = 5;
console.log(users_2);
users_2 += 3;
console.log(users_2);
users_2 *= 3;
console.log(users_2);

//Приоритет у такой записи такой же как и у обычного оператора присвоения
let users_3 = 5;
console.log(users_3);
users_3 += 1 + 2;
console.log(users_3);

//Инкремент ++
let addUser = 2;
addUser++;
console.log(addUser)

/*
Работает также как и 
addUser = addUser + 1;
или
addUser += 1;
*/

//Декремент --
let removeUser = 2;
removeUser--;
console.log(removeUser);

/*
Инкремент/декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведет к ошибке
console.log(5++);
*/

/*
Операторы ++ и -- могут быть расположены не только после,
но и до переменной
*/

//Постфиксная форма
//userCounter++;
//userCounter--;

//Префиксная форма
//++userCounter;
//--userCounter;


//Примеры

//Постфиксная форма
let usersCounter_1 = 0;
let newUsers_1 = usersCounter_1++;
console.log(newUsers_1);

//Префиксная форма
let usersCounter_2 = 0;
let newUsers_2 = ++usersCounter_2;
console.log(newUsers_2);

/*
Итого, если результат оператора не используется,
а нужно только увеличить/уменьшить переменную, 
тогда без разницы какую форму использовать
*/

let usersCounter_3 = 0;
usersCounter_3++;
console.log(usersCounter_3);

/*
Если хочется тут же использовать результат,
то нужна префиксная форма
*/
let usersCounter_4 = 0;
console.log(++usersCounter_4);

/*
Если нужно увеличить и при этом получить значение переменной 
до увеличения - нужна постфиксная форма
*/

let usersCounter_5 = 0;
console.log(usersCounter_5++);
console.log(usersCounter_5);

/*
Инкремент/декремент можно использовать в любых выражениях.
При этом их приоритет будет выше, чем у большинства
других арифметических операций
*/

let usersCounter_6 = 0;
let newUsers_6 = 2 * ++usersCounter_6;
console.log(newUsers_6);

//Отдельная запись более читабельна:
let usersCounter_7 = 0;
++usersCounter_7;
let newUsers_7 = 2 * usersCounter_7;
console.log(newUsers_7);


//Оператор запятая

/*
Предоставляет нам возможность вычислять несколько выражений,
разделяя их запятой ,. Каждое выражение выполняется,
но возвращается результат только последнего
*/

let usersCounter_8 = (8 + 2, 16 + 1);
console.log(usersCounter_8);


//Побитовые операторы
//Работают с 32 разрядными числами и используются редко
//например в криптографии

/*
AND(и) ( & )
OR(или) ( | )
XOR(побитовое исключение или) ( ^ )
NOT(не) ( ~ )
LEFT SHIFT(левый сдвиг) ( << )
RIGHT SHIFT(правый сдвиг) ( >> )
ZERO-FILL RIGHT SHIFT(правый сдвиг с заполненными нулями) ( >>> )
*/


//Операторы сравнения

/*
Больше: a > b
Меньше: a < b
Больше или равно: a >= b
Меньше или равно: a <= b
Равно: a == b
Не равно: a != b
Строгое равно: a === b
Строгое не равно: a !== b
*/

/*
Операторы сравнения возвращают логический тип данных
со значение true или false
*/

console.log(2 > 1);
console.log(4 < 1);
console.log(58 == 36);
console.log(8 != 9);

//Присваиваем результат переменной

let result_1 = 11 > 10;
console.log(result_1);

//Сравнение строк

//Алфавитный порядок
console.log('Б' > 'А');

//Алфавитный порядок
console.log('Скрипт' > 'Скрипка');

//Количество символов
console.log('Слайдер' > 'Слайд');

//Регистр
console.log('Фрилансер' > 'фрилансер');

/*
Алгорит сравнения двух строк довольно прост:
1. Сначало сравниваются первые символы строк
2. Если первый символ первой строки больше(меньше)
чем первый символ второй, то первая строка больше(меньше)
второй. Сравнение завершено
3. Если первые символы равны, то таким же образом сравниваются уже 
вторые символы строк
4. Сравнение продолжается пока не закончиться одна из строк
5. Если обе строки заканчиваются одновременно,
то они равны, иначе большей считается более длинная строка
*/


//Сравнение разных типов

//Преобразование в число
console.log('58' > 10);
console.log('007' == 7);

//Логическое значение true становиться 1, а false 0
console.log(true == 1);
console.log(false == 0);

//Интересные ситуации
let itemA = 0;
let itemB = "0";

console.log(Boolean(itemA));
console.log(Boolean(itemB));
console.log(itemA == itemB);


//Строгое сравнение
/*
оператор строгого равенства или не равенства 
проверяет равенство без приведения типов
*/

console.log(0 === false);
console.log('007' === 7);
console.log('58' !== 58);


//Сравнение c null и undefined

//Строгое равенство
console.log(null === undefined);

//Не строгие равенство
console.log(null == undefined);


//Сравнение c null и 0
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//Сравнение c undefined и 0
console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

/*
Чтобы избежать проблем при сравнении нужно очень
осторожно к любому сравнению с undefined / null,
кроме случаев строгого равенства ===
Не использовать сравнения >= > < <= с переменными,
которые могут принимать значения null / undefined?
разве что ты точно знаешь, что делаешь.
В любом случае, если переменная может принимать эти значения,
то стоит добавить для них отдельные проверки
*/


//Логические операторы

//Оператор || ИЛИ

/*
Оператор ИЛИ, записываеся как две вертикальные черты.
Процесс его работы следующий:
1. Вычисляет операнды слева направо
2. Каждый операнд конвертирует в логическое значение.
Если результат true, останавливается и возвращает
исходное значение этого операнда
3. Если все операнды являются ложными (false), возвращает 
значение последнего из них
*/

//Булевые значения
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//Разные типы

//Первый true это 1
console.log(1 || 0);
//Первый true это true
console.log(true || 'фрилансер');
//Первый true это 58
console.log(null || 58);
//Первый true это фрилансер
console.log(null || 'фрилансер' || 0);
//true нет совсем, вернёт последнее значение - 0
console.log(undefined || '' || null || 0);

//Присвоение значения в переменную

let userName_6 = '';
let userNickName_6 = 'Фрилансер';

let user_6 = userName_6 || userNickName_6 || "Без имени";
console.log(user_6)

//Сокращённое вычисление. Условие.
let admins_7 = 0;
let users_7 = 5;
admins_7 > users_7 || users_7++;
console.log(users_7)

//Оператор && (И)
/*
Оператор И, записываеся как &&.
Процесс работы:
1. Вычисляет операнды слева направо
2. Каждый операнд преобразует в логическое значение.
Если результат false, останавливается и возвращает 
исходное значение этого операнда
3. Если все операнды были истинными, возвращает
значение последнего
*/

//Булевые значения
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

//Разные типы

//Пример 0 - false
console.log('Фрилансер' && 0 && 2 && 3);
//Пример null - false
console.log(1 && 2 && null && 3);
//Пример Все true
console.log('15' && '42');

//Приоритет && больше чем ||
console.log(1 && 0 || 2 && 1);

//Подобие условия
let users_8 = 1;
(users_8 > 0) && console.log(`Пользователей ${users_8}`);

//Оператор ! (НЕ)
/*
Выполняет следующие действия:
1. Сначало приводит аргумент к логическому типу true / false
2. Затем возвращает противоположное значение
*/

//Булевые значения
console.log(!true);

//Разные типы
console.log(!null);
console.log(!1);
console.log(!'');
console.log(!'фрилансер');

/*
Приоритет НЕ ! является наивысшим из всех логических операторов,
поэтому он всегда выполняется первым, перед && или ||
*/
console.log(!true && 58 || 18 && !1);

//Используется для преобразования типа в boolean
console.log(!!'фрилансер');
//или
console.log(Boolean('фрилансер'))


//Оператор сравнения с null (??)

/*
Оператор ?? возвращает первый аргумент,
если он не null / undefined, иначе второй
*/

let name_1;
console.log(typeof name_1);
console.log(name_1 ?? "Без имени");

let name_2 = 'Фрилансер';
console.log(typeof name_2);
console.log(name_2 ?? "Без имени");