//Объекты

//Создание объекта
let userInfo_1 = new Object();   //через конструктор объекта
let userInfo_2 = {};             //через литерал объекта


//Свойство объектов. Ключ + значение
let userInfo_3 = {
    name: "Fink",  // свойство объекта
    age: 30,       // последняя (висячая) запятая
};
console.log(userInfo_3);
console.log(userInfo_3.name);


//Имена свойство

//Имя из двух и более слов
let userInfo_4 = {
    name: "Wulf",
    age: 44,
    "likes javascript": true,
};
console.log(userInfo_4.name);
console.log(userInfo_4['name']);
console.log(userInfo_4['likes javascript']);

//Вычисляемое либо передаваемое имя

//Вычисляемое имя
let firstPart_5 = 'likes';
let userInfo_5 = {
    name: 'Bunny',
    age: 14,
    [firstPart_5 + ' javascript']: true,
};
console.log(userInfo_5['likes javascript']);

//Передаём имя
let firstPart_6 = 'likes';
let userInfo_6 = {
    name: 'Bunny',
    age: 14,
    [firstPart_6]: true,
};
console.log(userInfo_6[firstPart_6]);

//Преимущество квадратных скобок
let key = 'name';
console.log(userInfo_6[key])

//Зарегистрированные слова в именах - можем использовать
//а в именах переменных не можем
let userInfo_7 = {
    let: 'Bunny',
    for: 14,
};
console.log(userInfo_7.let);
console.log(userInfo_7.for);

//Имена = строки либо символы
let userInfo_8 = {
    0: 'Bunny', //0 в данном случае тоже самое что строка "0"
};
console.log(userInfo_8[0]);
console.log(userInfo_8['0']);


//Тип данных Symbol

//Создаём символ id  с описанием (именем) 'id'
let id_9 = Symbol('id');
let userInfo_9 = {
    name: 'Dan',
    age: 47,
    [id_9]: 'Некое значение',
};
console.log(userInfo_9);

/*
Основное применение символов:
1 "Скрытые" свойства объектов
Символьные свойства не появляются в for ... in
2. Использование системных символов
Symbol.iterator, Symbol.toPrimitive и т.д.
*/


//Вложенность

let userInfo_10 = {
    name: "Tik",
    age: 4,
    address: {        //address тоже является объектом внутри которого свои свойства
        city: "Izh",
        street: "Freedom",
    }
}
console.log(userInfo_10);
console.log(userInfo_10.address);
console.log(userInfo_10.address.city);

//Свойство из переменной

function makeUserUnfo_1(name, age) {
    return {
        name: name,
        age: age,
        // ...другие свойства
    };
}
let user_1 = makeUserUnfo_1('Mike', 10);
console.log(user_1);

//В ситуации когда имя объекта равно переменной, 
//которая означает его значение - то можем записать просто одно имя
//это можнокомбинировать и с обычной записью когда у нас есть 
//имя - свойство объекта и его значение
function makeUserUnfo_2(name, age) {
    return {
        name,  // тоже самое что и name: name,
        age,   // тоже самое что и age: age,
        'likes javascript': true,
        // ...другие свойства
    };
}
let user_2 = makeUserUnfo_2('Mike', 10);
console.log(user_2);

//Изменение объекта

//Добавление свойства

let userInfo_11 = {
    name: 'Smit',
}
console.log(userInfo_11);

userInfo_11.age = 111;
console.log(userInfo_11);

userInfo_11['likes javascript'] = true;
console.log(userInfo_11);

userInfo_11.address = {
    city: 'New York',
    street: 'Wall Street',
}
console.log(userInfo_11);

//Удаление свойства

let userInfo_12 = {
    name: 'Rita',
    age: 30,
    'likes javascript': false,
}
console.log(userInfo_12);

delete userInfo_12.age;
console.log(userInfo_12);

delete userInfo_12['likes javascript']
console.log(userInfo_12);

//Изменение свойства
let userInfo_13 = {
    name: 'Rita',
    age: 30,
    'likes javascript': false,
}
console.log(userInfo_13);

userInfo_13.age = 18;
console.log(userInfo_13);

//Изменение свойств внутри объекта можно даже в константе

const userInfo_14 = {
    name: 'Rita',
    age: 36,
    'likes javascript': false,
}
console.log(userInfo_14);

userInfo_14.age = 55;
console.log(userInfo_14);

//Копирование объектов
//При копировании объекта в другую переменную
//сам объект не дублируется, а копируется только ссылка на него

let userInfo_15 = {
    name: 'Rita',
    age: 30,
}
console.log(userInfo_15);

let user_15 = userInfo_15;
console.log(user_15);

user_15.age = 44;
console.log(userInfo_15);


//Дублирование объектов (Object.assign)

//Синтаксис
//Object.assign(куда(объект), что(свойство1), что(свойство2), ...);

let userInfo_16 = {
    name: 'Rita',
    age: 33,
}
console.log(userInfo_16);

let user_16 = Object.assign({}, userInfo_16);

user_16.age = 144;
console.log(userInfo_16);
console.log(user_16);

//Также с помощью Object.assign мы можем добавлять новые значение

let userInfo_17 = {
    name: 'Rita',
    age: 33,
}
Object.assign(userInfo_17, { ['likes javascript']: true, city: 'Izh' });
console.log(userInfo_17);


//Проверка существования свойства
let userInfo_18 = {
    name: 'Rita',
    age: 33,
}
//console.log(userInfo_18.age);

if (userInfo_18.age) {   // true или false
    console.log(userInfo_18.age);
}

//еще один вариант проверки - Опциональная цепочка
//вместо ошибки пооучим undefined
let userInfo_19 = {
    name: 'Rita',
    age: 33,
    //address: {
    //    city: 'Izh',
    //    street: 'Wall'
    //}
}
console.log(userInfo_19?.address?.street);

//Оператор 'in'
/*
В большинстве случае сработает сравнение с undefined
либо опциональная цепочка
Но есть особый случай, когда свойство существует,
но содержит значение undefined
В этом случае необходимо использовать 'in'
*/

let userInfo_20 = {
    name: undefined,
}

//такая проверка не сработает
if (userInfo_20.name) {  //false
    console.log(userInfo_20.name)
}

//такая проверка сработавет
if ('name' in userInfo_20) {   //true
    console.log(userInfo_20.name)
}


//Цикл "for ... in"

//Для перебора всех свойств объекта используется цикл for ... in
//этот цикл отличается от изученного ранее цикла for(;;)

//Синтаксис
/*
for (let key in object) {
    тело цикла выполняется для каждого свойства объекта
}
*/

//Пример
let userInfo_21 = {
    name: 'Ted',
    age: 77,
    address: {
        city: 'Moscow',
        street: 'Retina',
    }
}

for (let key in userInfo_21) {
    //ключи
    console.log(key); //name, age, address
    //значения ключей
    console.log(userInfo_21[key]); //Ted, 77, Object {}
}

for (let key in userInfo_21.address) {
    //ключи
    console.log(key); //city, street
    //значения ключей
    console.log(userInfo_21.address[key]); //Moscow, Retro
}

//Методы объекта
let userInfo_22 = {
    name: 'Tedis',
    age: 277,
    address: {
        city: 'New Moscow',
        street: 'Retina net',
    },

    /*
    showInfo: function () {   //в качестве одного из свойств использовали ключ showInfo
        console.log(`${userInfo_22.name}, ${userInfo_22.age} лет. Адрес: г.${userInfo_22.address.city}, ул.${userInfo_22.address.street}`);
    }
    */

    //более короткая запись метода написанного выше
    showInfo() {   //в качестве одного из свойств использовали ключ showInfo
        console.log(`${userInfo_22.name}, ${userInfo_22.age} лет. Адрес: г.${userInfo_22.address.city}, ул.${userInfo_22.address.street}`);
    }
}
userInfo_22.showInfo();

//Использование 'this'
//'this' - можно заменить текущий объект
//'this' - обращается к первому родительскому объекту

let userInfo_23 = {
    name: 'Smit',
    age: 55,
    address: {
        city: 'New some',
        street: 'Could be',
    },

    showInfo() {   //в качестве одного из свойств использовали ключ showInfo
        //console.log(`${userInfo_23.name}, ${userInfo_23.age} лет. Адрес: г.${userInfo_23.address.city}, ул.${userInfo_23.address.street}`);
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
    }
}
userInfo_23.showInfo();

// при создании еще функции внутри - this выдаёт ошибку - т.к. обращается не к showInfo а к show
// у стрелочной функции нет своего this - используется значение из внешнего метода

let userInfo_24 = {
    name: 'Ann',
    age: 155,
    address: {
        city: 'some',
        street: 'be',
    },

    showInfo() {
        /*
        function show() {
            console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);    
        }
        */
        let show = () => console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
        show()
    }
}
userInfo_24.showInfo();

//Преимущество 'this'
// Использование this надёжнее чем использование имени переменной
// потому при обнулении переменной всё будет работать как и раньше

let userInfo_25 = {
    name: 'Smit',
    age: 55,
    address: {
        city: 'New some',
        street: 'Could be',
    },

    showInfo() {
        console.log(`${this.name}, ${this.age} лет. Адрес: г.${this.address.city}, ул.${this.address.street}`);
    }
}
userInfo_25.showInfo();

let user_25 = userInfo_25;
userInfo_25 = null;
user_25.showInfo();


//Функция - конструктор

/*
Обычный синтаксис создания объекта {...} позволяет создать
только один объект. Но часто нужно создать множество
однотипных объектов, таких как пользователи, элементы меню и т.д.
Это можно сделать при помощи функции - конструктора и оператора 'new'

Функции - конструкторы являются обычными функциями.
Но есть два правила:
1. Имя функции - конструктора должно начинаться с большой буквы.
2. Функция -конструктор должна вызываться при помощи оператора 'new'
*/

function UserInfo(name) {

    // this = {}; Создается пустой объект (неявно)

    this.name = name;
    this.age = 30;

    //return this; Возвращается объект (неявно)
}
console.log(new UserInfo('David'));
console.log(new UserInfo('Galop'));


//Hometask
let userInfo_26 = {
    name: 'Sam',
    age: 77,
}
console.log(userInfo_26);

userInfo_26.name = 'Rita';
console.log(userInfo_26);

delete userInfo_26.name;
console.log(userInfo_26);







