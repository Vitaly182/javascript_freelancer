//Размеры, прокрутка и координаты элементов на странице и окна браузера

//Размеры окна браузера
//clientWidth и clientHeight

//Доступная ширина и высота окна
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementWidth);
console.log(mainElementHeight);

//Ширина и высота окна вместе с полосами прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowWidth);
console.log(windowHeight);

//Ширина и высота документа включая прокрученную часть

let scrollWidth = Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth,
);
let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
);
console.log(scrollWidth);
console.log(scrollHeight);

//Количество прокрученных пикселей
//Только для чтения

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);

//Управление прокруткой страницы

//Метод scrollBy(x, y) прокручивает страницу относительно 
//её текущего положения

function setScrollBy() {
    window.scrollBy(0, 50);
    const windowScrollTop_1 = window.pageYOffset;
    console.log(windowScrollTop_1);
}

//setScrollBy();

//Метод scrollTo(pageX, pageY) прокручивает страницу
//на абсолютные координаты (pageX, pageY)
//тоже самое что и window.scroll()

function setScrollTo() {
    window.scrollTo(0, 150);
    const windowScrollTop_2 = window.pageYOffset;
    console.log(windowScrollTop_2);
}

//setScrollTo()


function setScrollToOptions() {
    window.scrollTo({
        top: 500,
        left: 0,
        //smooth, instant
        //либо auto; по умолчанию auto
        behavior: 'smooth',
    });
}
//Опции не работают в Safari

//setScrollToOptions()

//Управление прокруткой страницы
/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху.

У него есть один аргумент:
- если top = true (по умолчанию), то странца будет прокручена,
чтобы elem появился в верхней части окна
Верхний край элемента совмещён с верхней частью окна
- если top = false, то странца будет прокручена, чтобы elem
появился внизу
Нижний край элемента будет совмещён с нижним краем окна.
*/

function setScrollIntoView(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView(top);
}

function setScrollViewOptions(top) {
    const lessonSelected = document.querySelector('.lesson__selected');
    lessonSelected.scrollIntoView({
        //"start", "center", "end", или "nearest". 
        //По умолчанию "center"
        //block отвечает за вертикальное позиционирование
        block: "center",
        //"start", "center", "end", или "nearest". 
        //По умолчанию "nearest"
        //inline отвечает за горизонтальное позиционирование
        inline: "nearest",
        //"auto" или "smooth"
        //По умолчанию "auto"
        behavior: "auto",
    });
}
//Опции не работают в Safari

//Запретить прокрутку
function setEnableDisableScroll() {
    //document.body.style.overflow = "hidden";
    document.body.classList.toggle('scroll-lock');
}

//setEnableDisableScroll()

/*
Для прокрутки страницы из JS её DOM должен быть полностью настроен
Например, если мы попытаемся прокрутить страницу из
скрипта в <head>, это не сработает
*/


//Метрики элементов на странице

//Получаем объект
const block = document.querySelector('.lesson__block');

//Позиция объекта
//Свойства offsetParent, offsetLeft и offsetTop

//Получаем родительский элемент
//относительно которого позиционирован наш объект
const elementOffsetParent = block.offsetParent;

/*
Это будет ближайший предок, который 
удовлетворяет след. условиям

1. Является CSS-позиционированным
(CSS-свойство position равно absolute, relative, fixed или sticky)
2. или тэги <td>, <th>, <table>,
3. или <body>
*/
console.log(elementOffsetParent);

/*
Ситуации, в которых elementOffsetParent равно null:
1. Для скрытых элементов
(с CSS - свойством display: none или когда его нет в документе)
2. Для элементов <body> и <html>
3. Для элементов с position: fixed
*/

//Получаем позицию объекта относительно предка(offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft);
console.log(elementOffsetTop);

//Общие размеры объекта
//offsetWidth и offsetHeight

//Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth);
console.log(elementOffsetHeight);

//Метрики для не показываемых элементов равны нулю

//Отступы внутренней части элемента от внешней
//clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop);
console.log(elementClientLeft);

//Размеры объекта без рамок и полосы прокрутки
//clientWidth и clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth);
console.log(elementClientHeight);

//общая ширина (offsetWidth) - рамка слева - рамка справа - скролл
// 500 - 20 - 20 - 17 = 443

//Размеры объекта включающие в себя
//прокрученную (которую не видно) часть
//В остальных работают как clientWidth/clientHeight
//scrollWidth и scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth);
console.log(elementScrollHeight);


//Размеры прокрученной области
//scrollLeft и scrollTop

//прокручиваем наш объект вниз на 150px
//block.scrollTop = 150;

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft);
console.log(elementScrollTop);

//Методы управления прокруткой
//scrollBy, scrollTo и scrollIntoView
//работают и для объекта

function setElementScrollBy() {
    block.scrollBy({
        top: 20,
        left: 0,
        behavior: 'smooth',
    })
}

//setElementScrollBy()


//Координаты
/*
Большинство соответствующих методов JS работают 
в одной из двух указанных ниже систем координат:
1. Относительно окна браузера
(как position: fixed, отсчёт идёт от верхнего левого угла окна)
Принято обозначать clientX / clientY
2. Относительно документа
(как position: absolute относительно <body>, отсчёт идёт от
верхнего левого угла документа)
Принято обозначать pageX / pageY

Когда страница полностью прокручена в самое начало,
то верхний левый угол окна совпадает с левым верхним
углом документа, при этом обе этих системы координат тоже совпадают.
Но если происходит прокрутка, то координаты элементов в 
контексте окна меняются, так как они двигаются,
но в то же время их координаты относительно 
документа остаются такими же
*/

//Координаты относительно окна браузера
//getBoundingClientRect

//Получаем объект
const item_1 = document.querySelector('.lesson__item');

//Получаем координаты относительно окна браузера
const getItemCoords = item_1.getBoundingClientRect();
console.log(getItemCoords);

//Получаем конкретную координату относительно окна браузера
const getItemLeftCoord = item_1.getBoundingClientRect().left;
console.log(getItemLeftCoord);


//Получаем конкретную координату относительно окна браузера
const getItemTopCoord = item_1.getBoundingClientRect().top;
console.log(getItemTopCoord);

//Получаем конкретную координату относительно документа
const getItemTopDocumentCoord = getItemTopCoord + window.pageYOffset;
console.log(getItemTopDocumentCoord);


//Получение объекта по координатам
//document.elementFromPoint(x, y);

const elem = document.elementFromPoint(100, 100);
console.log(elem);



























