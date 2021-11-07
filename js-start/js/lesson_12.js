//Javascript Document object model (DOM)
//Изменение HTML CSS. Атрибуты и свойства. Окружение.

/*
Браузерное окружение - WINDOM - состоит из DOM / BOM / Javascript
DOM - document object model - document 
BOM - browser object model - navigator / location / history
Javascript - Object / Array / Function
*/

//Пример
//объект WINDOW - с помощью метода innerWidth - можем получить
//ширину окна браузера

const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth} px`);

//BOM - это дополнительный объекты предоставляемые браузером, 
//для того, чтобы работать со всем кроме документа

//Пример
//  С помощью объекта Navigator - можем получать 
//информацию о браузере и операционной системе

//Браузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes('Chrome')) {
    console.log('Браузер Хром');
} else if (navigator.userAgent.includes('Firefox')) {
    console.log('Браузер Firefox');
}
//Платформа
console.log(navigator.platform);

//Location
/*
С помощью объекта location можем получить текущий URL
или перенаправить браузер по новому адресу
*/

//Получаем URL
console.log(location.href);
//Меняем URL
//location.href = 'https://fls.guru'

//History
/*
Объект history позволяет управлять историей браузера,
передвигаться по посещённым ранее страницам
*/

history.back();
history.forward();

//Полезные методы для коммуникации с пользователем
//Alert / Confirm / Prompt

//Alert
//alert ('Hi !')

//Confirm
//const confirmResult = confirm('Хочешь научиться верстать ?');
//console.log(confirmResult)

//Prompt
//const promptResult = prompt('Кто ты по жизни ?');
//console.log(promptResult)

/*
HTML представлены в браузере в виде дерева DOM
(Просмотреть код - Elements)
Тэги становятся узлами объектами и формируют структуру документа
Текст становиться текстовым узлом
Всё что написано в html документе является частью DOM дерева
даже комментарии
*/

/*
Все операции с DOM начинаются с объекта document
из document можем получить доступ к любому узлу
*/

//DOM
//Навигация по документу

/*
Самые верхние элементы дерева
доступны как свойства объекта document
*/

const htmlElement_1 = document.documentElement;
const headElement_1 = document.head;
const bodyElement_1 = document.body;
console.log(htmlElement_1);
console.log(headElement_1);
console.log(bodyElement_1);

//Получаем объект body
const bodyElement_2 = document.body;

//Первый и последний дочерние элементы узлов
const firstChildNode = bodyElement_2.firstChild;
//firstChildNode показывает text - символ перевода строки
//который встречается перед h1 и который отчётливо
//видно в childNodes ниже

const lastChildNode = bodyElement_2.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);

/*
В документе, возможно, есть еще "какой то HTML-код",
но на момент выполнения скрипта браузер еще до него не дошел
Поэтому следует размещать скрипт в самом конце документа
*/

//Коллекция childNodes содержит список всех детей
//включая текстовые узлы
const childNodes_1 = bodyElement_2.childNodes;
console.log(childNodes_1);

//Для проверки наличия дочерних узлов
//существует также специальная функция hasChildNodes()
console.log(bodyElement_2.hasChildNodes())

/*
Как мы видели - childNodes похож на массив.
На самом деле это не массив, а коллекция
- особый перебираемый объект - псевдомассив

Отличия от массивов:
1. Для перебора коллекции можем использовать for...of
2. Методы массивов не будут работать, потому что
коллекция это не массив
*/

//Перебор коллекции
for (let node of childNodes_1) {
    console.log(node); //покажет все узлы из коллекции
}

//"Живые" коллекции
/*
Почт все DOM-коллекции, за небольшим исключением, "живые".
Другими словами, они отражают текущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим
узлы из DOM, то они появятся в сохранённой коллекции автоматически
*/

//Только для чтения
/*
DOM - коллекции, и даже более - все навигационные свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = .....
Для изменения DOM требуются другие методы
*/

//Соседние и родительские узлы
const previousSiblingNode = bodyElement_2.previousSibling;
//получаем предыдущий узел - опять text - перевод строки до body

const nextSiblingNode = bodyElement_2.nextSibling;
//получаем след. узел после body - null - т.к. следующего просто нет

const parentNode = bodyElement_2.parentNode;
//получаем родителя для body - html объект со всем содержимым


console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

/*
Навигационные свойства, описанные выше относятся 
ко всем узлам в документе
В частности, в childNodes находятся и текстовые узлы и 
узлы-элементы и узлы-комментарии,если они есть
*/

//Получаем коллекцию всех дочерних узлов
const childNodes_2 = bodyElement_2.childNodes;
console.log(childNodes_2);

/*
Но для большинства задач текстовые узлы и 
узлы-комментарии нам не нужны. Мы хотим манипулировать
узлами-элементами, которые представляют собой тэги и
формируют структуру страницы.
*/

//Получаем коллекцию всех дочерних элементов
const bodyChildren = bodyElement_2.children;
console.log(bodyChildren);

//Первый и последний дочерние элементы
const firstChild = bodyElement_2.firstElementChild;
const lastChild = bodyElement_2.lastElementChild;
console.log(firstChild);
console.log(lastChild);

//Соседние и родительский элементы
const previousSibling = bodyElement_2.previousElementSibling;
const nextSibling = bodyElement_2.nextElementSibling;
const parentElement = bodyElement_2.parentElement;

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);


//Поиск произвольного элемента

//elem.querySelectorAll(CSS);
/*
Самый универсальный метод поиска, он возвращает все элементы
внутри elem, удовлетворяющему данному CSS-селектору.
Этот метод действительно мощный, потому что можно использовать
любой CSS-селектор
*/

//Поиск по селектору класса
//При поиске по селектору тэга - обязательно ставим точку перед именем класса
const elems_1 = document.querySelectorAll('.lesson_list');
console.log(elems_1);

//Поиск по селектору тэга
const elems_2 = document.querySelectorAll('li');
console.log(elems_2);

//Поиск по смешанному селектору тэга и класса
const elems_3 = document.querySelectorAll('li.lesson_item-list');
console.log(elems_3);

//Поиск по тэгу первого уровня вложенности
const elems_4 = document.querySelectorAll('.lesson_list>li');
console.log(elems_4);

//Поиск по нескольким классам
const elems_5 = document.querySelectorAll('.lesson_list, .lesson_text');
console.log(elems_5);

//Поиск по вложенным классам
const elems_6 = document.querySelectorAll('.lesson_list .lesson_text');
console.log(elems_6);

//Поиск по ID
const elems_7 = document.querySelectorAll('#listItem');
console.log(elems_7);

//Поиск по атрибуту
const elems_8 = document.querySelectorAll('[data-item]');
console.log(elems_8);

//Поиск по атрибуту со значением
const elems_9 = document.querySelectorAll('[data-item="85"]');
console.log(elems_9);


//querySelectorAll - статичная коллекция

//Получение конкретного элемента коллекции
const elems_10 = document.querySelectorAll('li');
console.log(elems_10[2]);

//Перебор коллекции с помощью конструкции for...of
for (const item of elems_10) {
    console.log(item)
}

//Несмотря на то, что это не массив
//мы можем также использовать метод перебора forEach
elems_10.forEach(item => {
    console.log(item)
})

//Искать можно не только в document
const subList_1 = document.querySelectorAll('.lesson_sub-list');
const subItem_1 = subList_1[0].querySelectorAll('li');
console.log(subItem_1);

//Неожиданный результат поиска
const subList_2 = document.querySelectorAll('.lesson_sub-list');
const subItem_2 = subList_2[0].querySelectorAll('.lesson_list .lesson_item-sub-list');
console.log(subItem_2);

/*
В данном примере, когда мы выбрали '.lesson_list .lesson_item-sub-list'
в контексте <ul> с классом "lesson_sub-list", элемент с классом 
'.lesson_item-sub-list' были всё равно найден, хотя lesson_list
не является потомком элемента в котором происходил поиск lesson_sub-list

По умолчанию, querySelectorAll() проверяет только последний элемент 
без учёта контекста
*/


//elem.querySelector(CSS)
//Возвращает первый элемент внутри elem,
//соответствующий данному CSS-селектору

const lessonList_1 = document.querySelectorAll('.lesson_list')[0];
console.log(lessonList_1);
const lessonList_2 = document.querySelector('.lesson_list');
console.log(lessonList_2);

/*
document.getElementById(ID) и elem.getElementsBy*
Эти методы отличаются тем что возвращают ЖИВУЮ коллекцию
На данный момент они используются редко,
т.к. querySelectorAll может их заменить
Но отличия всё же есть
*/

//document.getElementById(ID)
/*
Если у элемента есть атрибут id, то мы можем
получить его вызовом document.getElementById(ID),
где бы он не находился
*/
const elems_11 = document.getElementById('listItem');
console.log(elems_11);
/*
1. id - уникален
2. поиск только внутри document
*/

//getElementsBy*
//Внимание getElementsBy*  а не getElementBy*

/*
elem.getElementsByTagName(tag)
Ищет элементы с данным тэгом и возвращает их ЖИВУЮ коллекцию
Передав "*" вместо тэга, можно получить всех потомков
*/

const elems_12 = document.getElementsByTagName('li');
console.log(elems_12);

/*
elem.getElementsByClassName(className)
здесь уже точку писать не нужно - потому что итак мы ищем по имени класса
возвращает элементы, которые имеют данный CSS - класс
*/

const elems_13 = document.getElementsByClassName('lesson_item-list');
console.log(elems_13);

/*
elem.getElementsByName(Name)
возвращает элементы с заданным атрибутом name.
Редко используется, поиск только внутри document
*/

const elems_14 = document.getElementsByName('list');
console.log(elems_14);


//Получаем статическую коллекцию
const listStatic = document.querySelectorAll('.lesson_item-list');
console.log(listStatic);

//Получаем живую коллекцию
const listLive = document.getElementsByClassName('lesson_item-list');
console.log(listLive);

//Создаём новый HTML - объект
const lesson_list = document.querySelector('.lesson_list');
lesson_list.insertAdjacentHTML(
    "beforeend",
    '<li class="lesson_item-list">Новый пункт</li>'
)


//closest
/*
Метод elem.closest(css) ищет ближайшего предка, который 
соответсвует CSS - селектору. Сам элемент также
включается в поиск

Предки элемента это родитель, родитель родителя, 
его родителя и т.д. Вместе они образуют цепочку иерархии
от элемента до вершины

Другими словами, метод closest подпимается вверх от
элемента и проверяет каждого из родителей. Если он
соответствует селектору, поиск прекращается. Метод возвращает 
либо предка, либо null, если такой элемент не найден

Свойство parentElement возвращает только
непосредственного родителя элемента
*/

const elem_1 = document.querySelector('.lesson_item-sub-list');
const parentList_1 = elem_1.closest('.lesson_list');
console.log(parentList_1);

/*
Очень полезный метод, часто используется для проверки
на существование того или иного родителя, либо для изменения
родителя конкретного элемента
*/

//Проверка matches
/*
ничего не ищет, а проверяет, удовлетворяет ли элемент
CSS-селектору, и возвращает true или false
*/

const elems_15 = document.querySelectorAll('.lesson_item-list');
for (let elem of elems_15) {
    if (elem.matches('[class$="lesson_item-list_red"]')) {
        console.log('Красный');
    } else if (elem.matches('[class$="lesson_item-list_blue"]')) {
        console.log('Синий');
    }
}

/*
Стоит добавить, что получив объект тем или иным способом
мы можем применять свойства навигации о которых говорили ранее
*/

const text = document.querySelector('.lesson_text');
const list = text.nextElementSibling;
console.log(list)


//ИЗМЕНЕНИЕ ДОКУМЕНТА

//Содержимое элемента innerHTML

//Получаем объект
const textElement_1 = document.querySelector('.lesson_text');

//Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent_1 = textElement_1.innerHTML;
console.log(textElementContent_1);

//Перезапись содержимого объекта
//textElement.innerHTML = `Живи, а работай в свободное время`;

//Дописываем содержимое объекта
textElement_1.innerHTML = `<p>${textElementContent_1}</p> <p>Живи, а 
работай в <span class="yellow">свободное</span> время</p>`
console.log(textElement_1.innerHTML);


//Содержимое документа целиком outerHTML

//Получаем объект
const textElement_2 = document.querySelector('.lesson_text');

//Получаем содержимое объекта "как есть" вместе с HTML
//а также сам элемент
const textElementContent_2 = textElement_2.outerHTML;
console.log(textElementContent_2);

//При изменении документа - документа меняется, но если 
//мы заново захотим получить outerHTML данного объекта 
// - мы всё еще получим старую оригинальную запись

textElement_2.outerHTML = `<p>Живи, а работай в <span 
class="yellow">свободное</span> время</p>`

console.log(textElement_2.outerHTML);

//Просто текст элемента textContent

//Получаем объект
const textElement_3 = document.querySelector('.lesson_text');
const textElementContent_3 = textElement_3.textContent;
console.log(textElementContent_3);

/*
Полезная возможность textContent - записывать
текст "безопасным способом"
*/

textElement_3.textContent = `<p>Живи, а работай в <span 
class="yellow">свободное</span> время</p>`;
console.log(textElement_3.textContent);

/*
Мы не хотим, чтобы на сайте появлялся произвольный HTML-код
Присваивание через textContent - один из способов
от этого защититься 
*/


//data
//Содержимое текстового узла/комментария

const textElement_4 = document.querySelector('.lesson');
const getComment_4 = textElement_4.nextSibling;

console.log(getComment_4);
console.log(getComment_4.data);

//Изменение текстового узла/комментария
getComment_4.data = 'Hello world'
console.log(getComment_4.data);


//Создание элементов и узлов

//Создание нового элемента (тэга)
const newElement = document.createElement('div');
console.log(newElement);

//Наполняем новый элемент
newElement.innerHTML = `<p>Живи, а работай в <span 
class="yellow">свободное</span> время</p>`;
console.log(newElement);

//Создание нового текстового узла
const newText = document.createTextNode('Hi Hi');
console.log(newText);

/*
Созданные объекты находятся в константах,
но не являются частью документа
*/

//Методы вставки

//Получаем объект
const textElement_5 = document.querySelector('.lesson_item-list_red');

//Создание нового элемента (тэга)
const newElement_5_1 = document.createElement('div');
//Наполняем новый элемент
newElement_5_1.innerHTML = `<p> ПЕРЕД </p>`;

//Создание нового элемента (тэга)
const newElement_5_2 = document.createElement('div');
//Наполняем новый элемент
newElement_5_2.innerHTML = `<p> ПОСЛЕ </p>`;

//Создание нового элемента (тэга)
const newElement_5_3 = document.createElement('div');
//Наполняем новый элемент
newElement_5_3.innerHTML = `<p> ВНУТРИ ПЕРЕД </p>`;

//Создание нового элемента (тэга)
const newElement_5_4 = document.createElement('div');
//Наполняем новый элемент
newElement_5_4.innerHTML = `<p> ВНУТРИ ПОСЛЕ </p>`;

//Вставляем новый элемент...

//...перед объектом
textElement_5.before(newElement_5_1);
//...после объекта
textElement_5.after(newElement_5_2);
//...внутрь и в начало объекта
textElement_5.prepend(newElement_5_3);
//...внутрь и в конец объекта
textElement_5.append(newElement_5_4);

//Вставка нескольких фрагментов сразу
const textElement_6 = document.querySelector('.lesson_item-list_blue');
const newElement_6 = document.createElement('div');
newElement_6.innerHTML = `<p>Живи, а работай в <span 
class="yellow">свободное</span> время</p>`;

//Вставка нескольких фрагментов сразу
textElement_6.append(newElement_6, 'Hello');

//Можно вставлять строку
textElement_6.append(` + String`);

/*
Другими словами,с троки вставляются безопасным способом,
как делает это textContent, поэтому эти методы могут
использоваться только для вставки DOM-узлов или
текстовых фрагментов. А что, если мы хотим вставить
HTML именно "как HTML", со всеми тэгами и прочим,
как это делает innerHTML ?
*/

//Вставляем строку с HTML тэгами 
//insertAdjacentHTML/Text/Element

//Получаем объект
const textElement_7 = document.querySelector('.lesson_text');

//Вставляем текст, HTML, элемент
textElement_7.insertAdjacentHTML(
    'beforebegin',
    `<p>Живи-insertAdjacentHTML в <span 
class="yellow">свободное</span> время</p>`
);

/*
'beforebegin' - вставить html непосредственно перед textElement
'afterbegin' - вставить html в начало textElement
'beforeend' - вставить html в конец  textElement
'afterend' - вставить html непосредственно после textElement
*/

//Вставляем текст
textElement_7.insertAdjacentText(
    'afterend',
    `<p>Живи-insertAdjacentHTML в <span 
class="yellow">свободное</span> время</p>`
);

//Создание нового элемента (тэга)
const newElement_7 = document.createElement('div');
//Наполняем новый элемент
newElement_7.innerHTML = `<p>Хватит <span 
class="yellow">работать</span> там</p>`;

//Вставляем элемент
textElement_7.insertAdjacentElement(
    'afterend',
    newElement_7
)

/*
На практике часто используется только insertAdjacentHTML
Потому что для элементов и текста у нас есть методы 
append / prepend / before / after - их быстрее написать,
и они могут вставлять как узлы, так и текст
*/

/*
Методы вставки insertAdjacentHTML / Text / Element
lesson_list - это наш объект

beforebegin
<ul class="lesson_list">
    afterbegin
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
    beforeend
</ul>
afterend
*/

//Перенос элемента

/*
Мы можем вставлять не только новые узлы,
но и переносить существующие
Все методы вставки автоматически 
удаляют узлы со старых мест
*/

//Получаем объект
const lessonBlock = document.querySelector('.lesson');
//Получаем объект
const title = document.querySelector('h3');

//Переносим title в конец блока lessonBlock
lessonBlock.append(title)

//Клонирование узлов cloneNode
//Если нужен не перенос а именно копия элемента

//Получаем объект
const textElement_8 = document.querySelector('.lesson_for_clone');
//Клонирование без дочерних элементов (без содержимого)
const cloneTextElement_8_1 = textElement_8.cloneNode();

//Глубокое клонирование вместе с содержимым
const cloneTextElement_8_2 = textElement_8.cloneNode(true);

const lessonBlock_8_1 = document.querySelector('.lesson_clone');
lessonBlock_8_1.append(cloneTextElement_8_1);

const lessonBlock_8_2 = document.querySelector('.lesson_clone');
lessonBlock_8_2.append(cloneTextElement_8_2);

//Удаление узлов

//Получаем объект
const textElement_9 = document.querySelector('.lesson_for_clone');
//Удаляем объект
textElement_9.remove();


//СТИЛИ И КЛАССЫ

//Управление классами
//Свойства className и classList

/*
Изменение класса является одним из 
наиболее часто используемых действий в Javascript
*/

//Свойство className

//Получаем элемент
const element_10 = document.querySelector('.lesson_item-list_red')

//Получаем имена всех классов данного объекта
const elementClassNames_10 = element_10.className;
console.log(elementClassNames_10);

//Перезаписываем имя всего класса (даже если там несколько классов)
element_10.className = 'red'

//Свойство classList

/*
Специальный объект с методами для
добавления/удаления одного класса
*/

//Получаем элемент
const element_11 = document.querySelector('.lesson_item-list_blue');

//Добавить класс
element_11.classList.add('active');

//Проверка наличия класса (возвращает true/false)
if (element_11.classList.contains('active')) {
    console.log(`У element есть класс active`);
} else {
    console.log(`У element нет класса active`);
}

//Удалить класс
element_11.classList.remove('active');

//Проверка наличия класса (возвращает true/false)
if (element_11.classList.contains('active')) {
    console.log(`У element есть класс active`);
} else {
    console.log(`У element нет класса active`);
}

//Добавить класс, если его нет, а если есть удалить
element_11.classList.toggle('active');

//Проверка наличия класса (возвращает true/false)
if (element_11.classList.contains('active')) {
    console.log(`У element есть класс active`);
} else {
    console.log(`У element нет класса active`);
}

//classList является перебираемым, поэтому можно 
//перечислить все классы при помощи for ... of

for (let className of element_11.classList) {
    console.log(className)
}

//Управление стилями
//element.style

//Получаем элемент
const element_12 = document.querySelector('.lesson_item-list_blue');

//Задаём стиль с помощью CSS свойства
element_12.style.color = 'red';

//Для свойства из нескольких слов используется camelCase:
//margin-bottom
element_12.style.marginBottom = '10px';
//z-index
element_12.style.zIndex = "10";

//Каждое свойство пишется отдельно

//Получение значения свойства
//Только если оно записано в атрибуте style
console.log(element_12.style.zIndex);

//Сброс стиля - можем присвоить пустую строку
//и оно полностью исчезнет из атрибута style
element_12.style.zIndex = "";
console.log(element_12.style.zIndex);

//Полная перезапись стилей
//style.cssText - полностью перезаписывает все свойства 
//которые были до этого в атрибуте style


//Получаем элемент
const element_13 = document.querySelector('.lesson_item-list_blue');

element_13.style.cssText = `
    margin-bottom: 0px;
    color: green;
`;

//Вычисленные стили. getComputedStyle(element, [pseudo])

//Получаем элемент
const element_14 = document.querySelector('.lesson_item-list_blue');

//Получение значения свойства
//Только если оно записано в атрибут style
console.log(element_14.style.fontSize);

//Стиль элемента
//Получаем вычисленные стили
const elementStyle = getComputedStyle(element_14);
console.log(elementStyle.fontSize);

//Стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(element_14, "::before");
console.log(elementBeforeStyle.backgroundColor);

//Чтобы получить конкретное значение
//Следует писать точное (полное)  свойство

//Получаем точное значение
console.log(elementStyle.paddingLeft);
//Получаем непредсказуемую запись
console.log(elementStyle.padding);

//getComputedStyle - работает только для чтения
//мы не можем переназначить свойство


//Получаем число
const fontSize_1 = parseInt(elementStyle.fontSize);
console.log(fontSize_1);

//Помним про единицы измерения
//element_14.style.marginLeft = 20; - так ничего не сработает
element_14.style.marginLeft = "20px"; //так всё сработает


/*
Как мы уже поняли из JS можем управлять как
классами так и стилями

Управлять классами - более приорететный вариант по 
сравнению со стилями

Манипулировать свойством style  следует только в том случае,
если классы нам помочь не могут. Например, при изменении
координатов объекта на лету

Одним словом, если мы можем возложить решение
той или иной задачи на плечи CSS путём манипуляции
с классами, то так и следует сделать
*/


//Атрибуты и свойства

/*
Стандартные атрибуты элемента 
превращаются в свойства

У разных DOM-элементов могут быть разные свойства.
Например, у тэга <a>, есть свойства, связанные со ссылками,
а у тэга <input> - свойства,связанные с полем ввода и т.д.

В HTML у тэгов могут быть атрибуты.
Когда браузер парсит HTML, чтобы создать
DOM-объекты для тэгов, он распознаёт стандартные
атрибуты и создаёт DOM-свойства для них.

Каждый DOM-узел принадлежит соответствующему встроенному классу
*/

const link = document.querySelector('.lesson_link');
const input = document.querySelector('.lesson_input');

console.log(link.href);
console.log(input.href);

console.log(link.value);
console.log(input.value);

//Получить весь список доступных свойств
console.dir(link);
console.dir(input);

//Произвольные атрибуты

//Получаем элемент
const lesson_Text = document.querySelector('.lesson_text');

//Проверяем наличие атрибута
lesson_Text.hasAttribute('name');
//Получаем значение атрибута
lesson_Text.getAttribute('name');
//Устанавливаем значение атрибута
lesson_Text.setAttribute('name', 'value');
//Удаляем атрибут
lesson_Text.removeAttribute('name');

//Пример
//Устанавливаем значение атрибута
lesson_Text.setAttribute('some-attribute', 'some-value');
//Проверяем наличие атрибута
if (lesson_Text.hasAttribute('some-attribute')) {
    console.log('some-attribute существует')
}


//Синхронизация между атрибутами и свойствами

/*
Мы можем обратиться к тому или иному свойству через
методы доступа к атрибутам
Когда стандартный атрибут изменяется, соответствующее
свойство автоматически обновляется
Это работает и в обратную сторону (за некоторыми исключениями)
*/

//Получаем элемент
const input_1 = document.querySelector('.lesson_input');

input.setAttribute('id', '123');
console.log(input.id);

input.id = "321";
console.log(input.getAttribute('id'));

//НО
//В момент установки атрибута всё работает
//Но когда мы пытаемся изменить свойства - оно не меняется

input.setAttribute('value', 'Hello');
console.log(input.value);

input.value = 'How are you?';
console.log(input.getAttribute('value'));

//Нестандартные атрибуты

/*
Мы уже использовали произвольные атрибуты,
но это рискованно

Все атрибуты, начинающиеся с префикса "data-",
зарезервированы для использования программистами
Они доступны в ствойстве dataset
*/

//Получаем элемент
const lessonText = document.querySelector('.lesson');

//Получаем data-атрибут
console.log(lessonText.dataset.size);

//Перезаписываем data-атрибут
lessonText.dataset.size = "5810";
console.log(lessonText.dataset.size);

//Если имя data-атрибута состоит из 2 и более слов
//то в JS стоит указывать имя в стиле lowerCamelCase
console.log(lessonText.dataset.sizeValue);

//Полезные свойства
const link_1 = document.querySelector('.lesson_link');

//Получаем тэг элемента
console.log(link_1.tagName);

//Скрыть/показать элемент
link_1.hidden = true;

//Запрос состояния свойства
console.log(link_1.hidden);
























