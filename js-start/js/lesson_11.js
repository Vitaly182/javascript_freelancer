//МАССИВЫ

//Создание массива

let arr1 = new Array(); //используется редко
let arr2 = [];

// Значение массива

let arr_1 = [
    'Smit',
    'Rita',
    'Vit',
];
//или
let arr_2 = ['Smit', 'Rita', 'Vit',];

//Различные типы значений

let arr_3 = [
    'Ted',
    {
        type: 'JS',
        age: 44,
    },
    true,
    function () {
        console.log('Hello, I am here');
    }
];

//Многомерные массивы
let matrix_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Получение значений

let arr_4 = [
    'Smit',
    'Rita',
    'Vit',
];

console.log(arr_4[0]);
console.log(arr_4[1]);
console.log(arr_4[5]);

let arr_5 = [
    'Ted',
    {
        type: 'JS',
        age: 44,
    },
    true,
    function () {
        console.log('Hello, I am here');
    }
];

console.log(arr_5);
console.log(arr_5[0]);
console.log(arr_5[1].type);
console.log(arr_5[2]);
arr_5[3]();

let matrix_2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix_2);
console.log(matrix_2[0][1])

//Длина массива. Свойство length

let arr_6 = ['Smit', 'Rita', 'Vit',];
console.log(arr_6);
console.log(arr_6.length);

//Доступ к массиву

/*
Напоминаем что массив является объектом и следовательно
ведёт себя как объект, например - копируется по ссылке
*/

let arr_7 = ['Smit', 'Rita', 'Vit',];
console.log(arr_7);

let arr_8 = arr_7;

arr_8.length = 2;

console.log(arr_7);

//Изменение значений

let arr_9 = ['Smit', 'Rita', 'Vit',];
console.log(arr_9);

//Меняем существующее
arr_9[0] = 'Dad';
console.log(arr_9);

//Добавляем новое
arr_9[3] = 'Sun';
console.log(arr_9);


//Методы массивов

/*
Варианты применения для массивов

Первый - очередь или упорядоченная коллекция элементов
Очередь поддерживает два виде операций:
1. добавление элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь,
так что второй элемент становиться первым

Второй - структура данных, называемая стэк
Стэк поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в JS могут работать и как очередь и как стэк.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива
*/

//Метод push - добавляет элемент в конец массива

let arr_10 = ['Smit', 'Rita', 'Vit',];
console.log(arr_10);

arr_10.push('Drog');
console.log(arr_10);

arr_10.push('Nick', 'Tom');
console.log(arr_10);

//Метод shift - удаляет элемент в начале,
//так что второй элемент становиться первым

let arr_11 = ['Smit', 'Rita', 'Vit',];
console.log(arr_11);

arr_11.shift();
console.log(arr_11);

//Метод pop - удаляет последний элемент 

let arr_12 = ['Smit', 'Rita', 'Vit',];
console.log(arr_12);

arr_12.pop();
console.log(arr_12);

//метод unshift - добавляет элемент в начало массива

let arr_13 = ['Smit', 'Rita', 'Vit',];
console.log(arr_13);

arr_13.unshift('Drog');
console.log(arr_13);

arr_13.unshift('Nick', 'Tom');
console.log(arr_13);

/*
Методы push/pop выполняются быстро, а методы shift/unshift - медленно
Чем больше элементов содержит массив, тем больше времени потребуется 
для того, чтобы их переместить, больше операций с памятью
*/

//Удаление, добавление, изменение конкретных элементов

let arr_14 = ['Smit', 'Rita', 'Vit',];

delete arr_14[1];
console.log(arr_14);
console.log(arr_14[1]);
console.log(arr_14.length);

//Метод splice. Позволяет добавлять, удалять и заменять элементы
//Синтаксис arr.splice(index[, deleteCount, elem1, ..., elemN])

//Удаляем элемент
let arr_15 = ['Smit', 'Rita', 'Vit',];
//Начиная с первой позиции удаляем один элемент
arr_15.splice(1, 1);
console.log(arr_15);

//Удаляем элемент и возвращаем его в переменную
let arr_16 = ['Smit', 'Rita', 'Vit',];
let removed = arr_16.splice(1, 1);
console.log(removed);

//Заменяем элементы
let arr_17 = ['Smit', 'Rita', 'Vit',];
//Начиная с нулевой позиции заменяем один элемент
arr_17.splice(0, 1, 'Green');
console.log(arr_17);

//Добавляем элементы
let arr_18 = ['Smit', 'Rita', 'Vit',];
//Начиная с первой позиции добавляем два элемента
arr_18.splice(1, 0, 'Ted', 'Red');
console.log(arr_18);

//Удаляем элемент
let arr_19 = ['Smit', 'Rita', 'Vit',];
//Начиная с последней позиции удаляем один элемент
arr_19.splice(-1, 1);
console.log(arr_19);

//Метод slice
//Создаём новый массив, в который копируем часть либо весь массив
//Синтаксис arr.slice([start], [end]) не включая [end]

//Копируем часть массива
let arr_20 = ['Smit', 'Rita', 'Vit',];

//Начиная с 1й позиции до 2й позиции
let arr_21 = arr_20.slice(1, 2);
console.log(arr_21);

//Начиная с предпоследней позиции до последней(не включая)
let arr_22 = arr_20.slice(-2, -1);
console.log(arr_22);

//Копируем весь массив
let arr_23 = arr_20.slice();
console.log(arr_23);

//Метод concat
//Создаёт новый массив, в который копирует данные из других массивов
//и дополнительные значения (в конец массива)
//Синтаксис arr.concat(arg1, arg2...)

let arr_24 = ['Smit', 'Rita', 'Vit',];
let arr_25 = arr_24.concat('Roru')
console.log(arr_25);

//Поиск в массиве

//Методы indexOf/lastIndexf и includes
//аналоги строковым методам
/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from,
и возвращает индекс, на котором был найден искомый 
элемент, в противном случае -1
2. arr.lastIndexOf(item, from) - тоже самое, но ищет справа налево
3. arr.includes(item, from) - ищет item, начиная с индекса from, 
и возвращает true, если поиск успешен
*/

let arr_26 = ['Smit', 'Rita', 'Vit',];

// indexOf
console.log(arr_26.indexOf('Rita'));
console.log(arr_26.indexOf('Rom'));
console.log(arr_26.indexOf('Rita', 2));

//includes
console.log(arr_26.includes('Rita'));
console.log(arr_26.includes('Rom'));
console.log(arr_26.includes('Rita', 2));

//Поиск в массиве

//find и findIndex
//поиск в массиве объектов с опеределённым условием

/*
Синтаксис
let result = arr.find(function(item, index, array) {
    если true - возвращается текущий элемент и перебор прерывается
    если все итерации оказались ложными, возвращается undefined
});
*/

let arr_27 = [
    { name: 'Smit', age: 36 },
    { name: 'Rita', age: 25 },
    { name: 'Vit',  age: 'Не скажу'},
];

let result_27_1 = arr_27.find(function(item, index, array) {
    return item.age === 25;
});

let result_27_2 = arr_27.find(item => item.age === 25);
console.log(result_27_1);
console.log(result_27_2);

//findIndex
let result_27_3 = arr_27.findIndex(item => item.age === 25);
console.log(result_27_3);

//filter
//Метод ищет все элементы, на которых функция-колбэк вернёт true
/*
let results = arr.filter(function(item, index, array) {
    если true - элемент добаляется к результату, и перебор продолжается
    если ничего не найдено - возвращается пустой массив
})
*/

let arr_28 = [
    { name: 'Smit', age: 36 },
    { name: 'Rita', age: 25 },
    { name: 'Vit',  age: 'Не скажу'},
];
let result_28 = arr_28.filter(function(item, index, array) {
    return item.age >= 25;
});
console.log(result_28);


//Сортировка массивов

//Метод sort(fn)
//сортирует массив на месте, меняя в нем порядок элементов

//Сортировка слов

let arr_29 = ['Smit', 'Rita', 'Vit',];
console.log(arr_29.sort());

//Сортировка чисел
let arr_30 = [8, 22, 1,];
console.log(arr_30.sort());

//По умолчанию элементы сортируются как строки,
//Для строк применяется лексикографический порядок,
//и действительно выходит что "8" > "22"
console.log('8' > '22')

//Чтоб числа верно сортировались - пишем свою функцию сортировки
/*
function compareNumeric(a, b) {
    console.log(`Сравниваем ${a} и ${b}`);
    //if (a > b) return 1;
    //if (a == b) return 0;
    //if (a < b) return -1;

    return a - b
}
console.log(arr_30.sort(compareNumeric))
*/
console.log(arr_30.sort((a, b) => a - b));

//Метод reverse
//меняет порядок элементов в массиве на обратный

let arr_31 = ['Smit', 'Rita', 'Vit',];
console.log(arr_31.reverse())

//Преобразование массивов

//Метод map
//вызывает функцию для каждого элемента массива
//и возвращает массив результатов выполнения этой функции
/*
let result = arr.map(function(item, index, array) {
    возвращает новое значение вместо элемента
});
*/

let arr_32 = ['Smit', 'Rita', 'Vit',];

let result_32 = arr_32.map(function(item, index, array) {
    return item[0];
})
//let result_32 = arr_32.map(item => item[0]);
console.log(arr_32);
console.log(result_32);

//Методы split и join
/*
Метод split преобразовывает строку в массив 
по заданному разделителю
Синтаксис: str.split(delim)
*/

let str = 'Smit,Rita,Vit';

let arr_33 = str.split(',');
console.log(arr_33)

//Можно ограничить количество объектов
//которые попадут в массив

let arr_34 = str.split(',', 2);
console.log(arr_34)

/*
Метод join преобразовывает массив в строку 
с заданным разделителем 
Можем указать любой разделитель - , $ ; : "
Синтаксис: arr.join(glue)
*/

let arr_35 = ['Smit', 'Rita', 'Vit',];
let srt = arr_35.join(',');
console.log(srt)

//Получение строки из массива
/*
При переводе через String мы не можем указать разделитель
и он всегда будет запятая
*/
let arr_36 = ['Smit', 'Rita', 'Vit',];
console.log(String(arr_36));

//Проверка Array.isArray()

/*
Массивы не образуют отдельный тип данных
Они основаны на объектах
*/

let obj_37 = {};
let arr_37 = [];

console.log(typeof obj_37);
console.log(typeof arr_37);

//Как же нам узнать где массив, а где нет ?
if (Array.isArray(arr_37)) {
    console.log('Это массив');
} else {
    console.log('Это не массив');
}

if (Array.isArray(obj_37)) {
    console.log('Это массив');
} else {
    console.log('Это не массив');
}

//Перебор элементов
let arr_38 = ['Smit', 'Rita', 'Vit',];
console.log(arr_38.length);

//Цикл FOR
for (let i = 0; i < arr_38.length; i++) {
    console.log(arr_38[i])
}

//Цикл FOR...OF
//Можно использовать для вывода значений

let arr_39 = ['Smit', 'Rita', 'Vit',];

for (let arrItem of arr_39) {
    console.log(arrItem)
}

//метод перебора forEach
//Выполняет функцию для каждого элемента массива
/*
arr.forEach(function(item, index, array) {
    делать что-то с item
});
*/

let arr_40 = ['Smit', 'Rita', 'Vit',];

arr_40.forEach(function(item, index, array) {
    console.log(`${item} находится на ${index} позиции в ${array}`);
});


//Стрелочная функция
arr_40.forEach((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в ${array}`);
});


let arr_41 = ['Smit', 'Rita', 'Vit',];

//Для forEach можно указывать метод отдельной функции

arr_41.forEach(show);

function show(item) {
    console.log(item)
}

//Методы reduce / reduceRight

/*
Если нужно перебрать массив - можем использовать 
forEach, for или for...of

Если нужно перебрать массив и вернуть данные для 
каждого элемента - используем map

Методы arr.reduce и arr.reduceRight похожи на эти методы,
но они сложнее и используются для вычисления
какого-либо значения на основе всего массива

Синтаксис
let value = arr.reduce(function(previousValue, item, index, array) {
    ...........
}, [initial]);

К аргументам item, index, array добавляется previousValue:

previousValue - результат предыдущего вызова этой функции,
равен initial при первом вызове (если передан initial),
item - очередной элемент массива
index - его индекс
array - сам массив

Функция применяется по очереди ко всем элементам
массива и "переносит" свой результат на следующий вызов
*/

let arr_42 = [1, 2, 3, 4,];

let reduceValueOne = arr_42.reduce(function(previousValue, item, index, array) {
    return item + previousValue;
}, 0);
console.log(reduceValueOne);


let arr_43 = ['Smit', 'Rita', 'Vit',];
/*
Если не указать начальное значение, то оно будет равно
первому элементу массива (previousValue=Smit)
А работа метода начинается со второго элемента (item=Rita)
*/

let reduceValueTwo = arr_43.reduce(function(previousValue, item, index, array) {
    console.log(previousValue);
    console.log(item);
    return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);

//Методы arr.reduceRight работает аналогично,
//но проходит по массиву справо налево


/*
Следует помнить, что массив является объектом и
следовательно ведёт себя как объект
*/

let arr_44 = ['Smit', 'Rita', 'Vit',];
console.log(typeof arr_44);

//Добавление нечислового свойства
arr_44.name = 'Viktor';
console.log(arr_44);

/*
Что действительно делаем массивы особенными - это их 
внутренее представление. Движок Javascript старается
хранить элементы массива в непрерывной области памяти,
один за другим. Существуют и другие способы оптимизации,
благодаря которым массивы работают очень быстро.

Но все они утратят эффективность, если перестанем работать с 
массивом как с "упорядоченной коллекцией данных" и начнём 
использовать его обычный объект

Варианты неправильного применения массива:
1. Добавление нечислового свойства, например arr.test = 5
2. Создание "дыр", например: добавление arr[0],
затем arr[1000] - между ними ничего нет
3. Заполнение массива в обратном порядке, 
например: arr[1000], arr[999] и т.д.
*/












