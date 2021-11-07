//СОБЫТИЯ

/*
Отлавливать возникновение события мы будем с помощью
специальных обработчиков

Любому событию можно назначить обработчик, т.е. функцию,
которая срабатывает, как только произойдёт нужное нам событие.
Именно благодаря этим обработчикам JS может
реагировать на действия пользователя

Есть несколько способов назначить событию обработчик.
*/

//1 способ - использование атрибута HTML
//прописываем действие прямо в HTML коде

//2 способ - использование DOM

const button_2 = document.querySelector('.button_DOM');

button_2.onclick = function () {
    console.log('Клик -  использование DOM')
}

//3 способ - отдельная функция

const button_3 = document.querySelector('.button_function');

function showConsole() {
    console.log('Клик - отделная функция');
}
button_3.onclick = showConsole;

//Важно! Без круглых скобок!


/*
Фундаментальный недостаток описанных выше способов
назначения обработчика - невозможность повесить несколько
обработчиков на одно событие
Каждое новое назначение обработчика перезапишет предыдущее
*/


//Обработчик событий addEventListener / removeEventListener

/*
Существует основной способ назначения 
обработчиков при помощи специальных
методов addEventListener / removeEventListener
которые лишены этого недостатка

element.addEventListener(event, handler[, options])
*/

const button_4 = document.querySelector('.button_addEventListener');

button_4.addEventListener('click', function (e) {
    console.log('Клик - addEventListener');
});
button_4.addEventListener('click', function (e) {
    console.log('Клак - addEventListener');
});


const button_5 = document.querySelector('.button_removeEventListener');

function showConsole_5() {
    console.log('Клик removeEventListener');
    button_5.removeEventListener('click', showConsole_5);
}

button_5.addEventListener('click', showConsole_5);

//Опции

const options = {
    'capture': false, //фаза, на которой должен сработать обработчик
    'once': true, //если true, тогда обработчик будет
    //автоматически удалён после выполнения
    'passive': false, //если true, то указывает, что обработчик
    //никогда не вызовет preventDefault()
}

const button_6 = document.querySelector('.button_options');

function showConsole_6() {
    console.log('Клик options');
}

button_6.addEventListener('click', showConsole_6, options);

/*
Метод addEventListener может показаться сложнее чем, onclick
Но, из-за того,что он обладает преимуществом
"прослушивания" нескольких событий,
а также  учитывая тот факт что существуют события которые
можно отловить только при помощи только этого метода
В результате разработчики чаще используют именно его
*/


//Объект события
/*
Чтобы хорошо обработать событие, могут понадобиться детали того,
что произошло. Не просто "клик" или "нажатие клавиши",
а также - какие координаты указателя мыши, какая клавиша нажата и т.д.
Когда происходит событие, браузер создаёт объект события,
записывает в него детали и передаёт его в качестве
аргумента функции - обработчику
*/

const button_7 = document.querySelector('.button_event');

function showConsole_7(event) {
    //тип события
    console.log(event.type);
    //объект на котором сработал обработчик
    console.log(event.target);
    //объект к которому назначен обработчик
    console.log(event.currentTarget);
    //положение курсора по оси X
    console.log(event.clientX);
    //положение курсора по оси Y
    console.log(event.clientY);
    //все детали события
    console.log(event);
}
button_7.addEventListener('click', showConsole_7);
//button_7.addEventListener('mouseenter', showConsole_7)


//Всплытие и погружение

const block = document.querySelector('.block')
const blockInner = document.querySelector('.block__inner')
const blockInnerInner = document.querySelector('.block__inner-inner')

/*
Всплытие
Когда на элементе происходит событие, обработчики
сначала срабатывают на нём, потом на его родителе,
затем выше и так далее, вверх по цепочке предков
*/

/*
Погружение
Для того чтобы что-то всплыло, оно должно 
сначало погрузиться :)
*/

block.addEventListener('click', function (event) {
    console.log('Клик на Блок первого уровня');
    //console.log(event.target);
});

blockInner.addEventListener('click', function (event) {
    console.log('Клик на Блок второго уровня');
}, { 'capture': false });  //Отлавливание погружения - true

blockInnerInner.addEventListener('click', function (event) {
    console.log('Клик на Блок третьего уровня');
    //Остановка всплытия
    //event.stopPropagation();
});

/*
В современной разработке стадия погружения исползуется очень редко, 
обычно события обрабатываются во время всплытия
*/


//Делегирование событий

/*
Всплытие и перехват событий позволяет реализовать
один из самых важных приёмов разработки - делегирование
*/


const button_8 = document.querySelectorAll('.button_delegation')

function showConsole_8() {
    console.log('Ура');
}
button_8.forEach(buttonItem => {
    buttonItem.addEventListener('click', showConsole_8);
});

//Вместо того, чтобы назначать обработчик на каждый элемент
//Мы назначим обработчик для их родителя

const lesson_9 = document.querySelector('.lesson');

function showConsole_9() {
    console.log('Hurra');
}
lesson_9.addEventListener('click', function (event) {
    if (event.target.closest('.button_delegation')) {
        showConsole_9();
    }
});


//Пример  с МЕНЮ

const menuBody = document.querySelector('.menu');

document.addEventListener('click', menu);

function menu(event) {
    if (event.target.closest('.menu__button')) {
        menuBody.classList.toggle('_active');
    }
    if (!event.target.closest('.menu')) {
        menuBody.classList.remove('_active');
    }
}


//Действия браузера по умолчанию

/*
Многие события автоматически влекут за собой действие браузера
Например:
- Клик по ссылке инициирует переход на новый URL
- Нажатие на кнопку "отправить" в форме - отсылку её на сервер
- Зажатие кнопки мыши над текстом и её движение в таком состоянии - 
инициирует его выделение и т.д.

Если мы обрабатываем событие в JS,
то зачастую такое действие браузера нам не нужно
К счастью - его можно отменить
*/

const link = document.querySelector('.link');

//Первый способ
link.addEventListener('click', function (event) {
    console.log('Наши действия');
    //отменить действие браузера (переход по ссылке)
    event.preventDefault();
});

//Второй способ
link.onclick = function () {
    console.log('Наши действия');
    //отменить действие браузера (переход по ссылке)
    return false;
}

/*
Необязательная опция passive: true для addEventListener
сигнализирует браузеру, что обработчик не собирается выполнять
preventDefault(). Почему это может быть полезно?
Есть некоторые события, как touchmove на мобильных 
устройствах (когда пользовать перемещает палец по экрану),
которое по умолчанию начинает прокрутку, но мы можем отменить
это действие, использую preventDefault() в обработчике.
Поэтому, когда браузер обнаружит такое событие,
он должен для начала запустить все обработчики и после,
если preventDefault() не вызывается нигде, он может начать прокрутку.
Это может вызвать ненужные задержки в пользовательском интерфейсе.
Опция passive: true сообщает браузеру, что обработчик
не собирается отменять прокрутку. Тогда браузер начинает её немедленно,
обеспечивая максимально плавный интерфейс, параллельно обрабатывая событие.
Для некоторых браузеров(Firefox, Chrome) опция passive по умолчанию
включена в true для таких событий, как touchstart и touchmove
*/


//Основы событий мыши

/*
Типы событий мыши: простые и комплексные

Простые события - самые часто используемые:
mousedown / mouseup - кнопка мыши нажата/отпущена над элементом
mouseover / mouseout - кнопка мыши появляется над элементом и уходит с него
mousemove - каждое движение мыши над элементом генерирует это событие
contextmenu - вызывается при попытке открытия контекстного меню,
            как правило, нажатием правой кнопки мыши.
            Но заметим, это не совсем событие мыши,
            оно может вызываться и специальной клавишей клавиатуры

Комплексные события:
click - вызывается при mousedown, а затем mouseup над одним
        и тем же элементом, если использовалась основная кнопка мыши
dbclick - вызывается двойным кликом на элементе

Комплексные события состоят из простых, поэтому в теории мы
могли бы без них обойтись
Но хорошо, что они существуют, потому что работать с ними очень удобно.
*/

const button_mouse = document.querySelector('.button_event_mouse');

button_mouse.addEventListener('mousedown', function (event) {
    console.log(`Нажата кнопка ${event.which}`);
});

button_mouse.addEventListener('click', function (event) {
    console.log('Нажата основная кнопка');
});

button_mouse.addEventListener('contextmenu', function (event) {
    console.log('Вызвано контекстное меню (не основная кнопка мыши)');
});

/*
event.which = 1 - Нажата основная кнопка мыши (обычно левая)
event.which = 2 - Нажата средняя кнопка мыши (колесо)
event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
*/

//Координаты: clientX/Y, pageX/Y

const blockForMouse = document.querySelector('.block-for-mouse')
/*
blockForMouse.addEventListener('mousemove', function (event) {
    blockForMouse.innerHTML = 
    `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
});
*/

/*
Наведение мыши: события - mouseover/out
mouseover - происходит в момент, когда курсор оказывается 
над элементом
mouseout - происходит в момент, когда курсор уходит с элемента
*/

blockForMouse.addEventListener('mouseover', function (event) {
    blockForMouse.innerHTML = 'Курсор над элементом';
});
blockForMouse.addEventListener('mouseout', function (event) {
    blockForMouse.innerHTML = 'Курсор уходит с элемента';
});

/*
mouseover и mouseout - являются особенными потому что у них имеется 
свойство relatedTarget. Оно "дополняет" target. Когда мышь переходит
с одного элемента на другой, то один из них будет target,
а другой relatedTarget

Для события mouseover:
event.target - это элемент, на который курсор перешёл
event.relatedTarget - это элемент, с которого курсор ушёл
relatedTarget -> target

Для события mouseout наоборот
event.target - элемент, с которого курсор ушёл
event.relatedTarget - элемент, на который курсор перешёл
target -> relatedTarget 
*/

blockForMouse.addEventListener('mouseover', function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});
blockForMouse.addEventListener('mouseout', function (event) {
    console.log(event.target);
    console.log(event.relatedTarget);
});


blockForMouse.addEventListener('mouseover', function (event) {
    console.log('Курсор над элементом');
});
blockForMouse.addEventListener('mouseout', function (event) {
    console.log('Курсор уходит с элемента');
});

/*
Наведение мыши: события - mouseenter/leave
Пара важных отличий:
1. Переходы внутри элемента, на его потомки и с них, не считаются
2. эти события не всплывают
*/

blockForMouse.addEventListener('mouseenter', function (event) {
    console.log('Курсор над элементом');
});
blockForMouse.addEventListener('mouseleave', function (event) {
    console.log('Курсор уходит с элемента');
});

//Делегирование событий наведения мыши

const blockForMouseDelegation = document.querySelector('.block-for-mouse-delegation');
blockForMouseDelegation.addEventListener('mouseover', function (event) {
    let target = event.target.closest('span');
    //переход не на <span> игнорировать
    if (!target) return;
    target.style.cssText = `background-color: #77608d;`;
});
blockForMouseDelegation.addEventListener('mouseout', function (event) {
    let target = event.target.closest('span');
    //переход не на <span> игнорировать
    if (!target) return;
    target.style.cssText = ``;
});


//Перетаскивание Drag`n`Drop

const gragField = document.querySelector('.drag-field');
const gragItem = document.querySelector('.drag-field__item');

gragItem.addEventListener("mousedown", function (event) {

    let coordsItemX = event.clientX - gragItem.getBoundingClientRect().left;
    let coordsItemY = event.clientY - gragItem.getBoundingClientRect().top;

    let gragItemSizes = {
        width: gragItem.offsetWidth,
        height: gragItem.offsetHeight
    }
    let gragFieldSizes = {
        left: gragField.getBoundingClientRect().left + scrollX,
        top: gragField.getBoundingClientRect().top + scrollY,
        right: gragField.getBoundingClientRect().left + scrollX + gragField.offsetWidth,
        bottom: gragField.getBoundingClientRect().top + scrollY + gragField.offsetHeight
    }

    gragItem.style.position = 'absolute';
    gragItem.style.zIndex = 1000;
    document.body.append(gragItem);

    moveItem(event.pageX, event.pageY);

    function moveItem(pageX, pageY) {
        let currentX = pageX - coordsItemX;
        let currentY = pageY - coordsItemY;

        if (
            currentX + gragItemSizes.width <= gragFieldSizes.right &&
            currentX >= gragFieldSizes.left
        ) {
            gragItem.style.left = `${currentX}px`;
        } else {
            if (currentX + gragItemSizes.width > gragFieldSizes.right) {
                gragItem.style.left = `${gragFieldSizes.right - gragItemSizes.width}px`;
            }
            if (currentX < gragFieldSizes.left) {
                gragItem.style.left = `${gragFieldSizes.left}px`;
            }
        }
        if (
            currentY + gragItemSizes.height <= gragFieldSizes.bottom &&
            currentY >= gragFieldSizes.top
        ) {
            gragItem.style.top = `${currentY}px`;
        } else {
            if (currentY + gragItemSizes.height > gragFieldSizes.bottom) {
                gragItem.style.top = `${gragFieldSizes.bottom - gragItemSizes.height}px`;
            }
            if (currentY < gragFieldSizes.top) {
                gragItem.style.top = `${gragFieldSizes.top}px`;
            }
        }
    }

    let currentDroppable = null;

    function onDragItem(event) {
        moveItem(event.pageX, event.pageY);

        gragItem.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        gragItem.hidden = false;

        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest('.drag-field__point');

        if (currentDroppable !== droppableBelow) {
            if (currentDroppable) {
                currentDroppable.classList.remove('_active');
                gragItem.classList.remove('_active');
            }
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                currentDroppable.classList.add('_active');
                gragItem.classList.add('_active');
            }
        }
    }
    document.addEventListener('mousemove', onDragItem);

    document.addEventListener("mouseup", function (event) {
        document.removeEventListener('mousemove', onDragItem);
    }, { "once": true });
});
gragItem.addEventListener("dragstart", function (event) {
    event.preventDefault();
});


//Клавиатура

/*
Основные события при работе с клавиатурой это:
keydown - происходит при нажатии клавиши
keyup - при отпускании клавиши

event.code и event.key

Если пользователь работает с разными языками, то при переключении
на другой язык символ измениться с "G" на совершенно другой.
Получившееся станет новым значением event.key,
тогда как event.code останется тем же: "KeyG"

Автоповтор
При долгом нажатии клавиши возникает автоповтор: keydown срабатывает
снова и снова, и когда клавишу отпускают, от отрабатывает keyup
Так что ситуация, когда много keydown и один keyup, абсолютно нормальна.
Для событий, вызванных автоповтором, у объекта события
свойство event.repeat равно true
*/

document.addEventListener('keydown', function (event) {
    console.log(`Нажата клавиша ${event.code} (${event.key})`);
    console.log(event.repeat);
});
document.addEventListener('keyup', function (event) {
    console.log(`Отжата клавиша ${event.code} (${event.key})`);
});

//проверка зажатия двух клавиш - например Ctrl + Z отмена действия
document.addEventListener('keydown', function (event) {
    if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
        console.log('Отмена действия');
    }
});

//Пример
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener('keyup', txtSetCounter);
txtItem.addEventListener('keydown', function (event) {
    if (event.repeat) txtSetCounter();
})

function txtSetCounter() {
    const txtCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounterResult;
}


/*
Ещё можно воспроизвести с обработчиком события input

const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener('input', txtSetCounter);

function txtSetCounter() {
    const txtCounterResult = txtItemLimit - txtItem.value.length;
    txtCounter.innerHTML = txtCounterResult;
}
*/


//Пример  с МЕНЮ

const menuBody_2 = document.querySelector('.menu_2');

document.addEventListener('click', menu_2);

function menu_2(event) {
    if (event.target.closest('.menu__button_2')) {
        menuBody_2.classList.toggle('_active');
    }
    if (!event.target.closest('.menu_2')) {
        menuBody_2.classList.remove('_active');
    }
}

document.addEventListener('keyup', function (event) {
    console.log(event.code);
    if (event.code === 'Escape') {
        menuBody_2.classList.remove('_active');
    }
});


//Прокрутка (скролл)

window.addEventListener('scroll', function (event) {
    //количество прокрученных пикселей по вертикали
    //scrollY или pageYOffset (устарел)
    //количество прокрученных пикселей по горизонтали
    //scrollX или pageXOffset (устарел)

    console.log(`${scrollY}px`);
})

//Предотвращение прокрутки
/*
Нельля предотвратить прокрутку, используя event.preventDefault()
в обработчике scroll, потому что он срабатывает после того,
как прокрутка уже произошла

Но можно предотвратить прокрутку, используя event.preventDefault()
на событии, которое вызывает прокрутку, например, 
на событии keydowm для клавиш pageUp и pageDown

Способо инициировать прокрутку много, более надёжный
способ - использовать CSS, свойство overflow: hidden
*/

//Использование
/*
Событие прокрутки scroll позволяет реагировать на прокрутку страницы
или элемента. Есть много хороших вещей, которые при этом можно сделать.

- Показать / скрыть дополнительные элементы управления или информацию,
основываясь на том, в какой части документа находится пользователь.
Например анимация при скролле или ленивая подгрузка (подгрузка
ранее скрытых элементов).
- Подгрузить данные, когда пользователь прокручивает страницу вниз 
до конца. Бесконечный скролл.

Более интересным решением данных задач будет использование
IntersectionObserver, который позволяет веб-приложениям 
асинхронно следить за изменением пересечения элемента
с его родителем или областью видимости документа
*/


//События загрузки страницы

/*
1) DOMContentLoaded - браузер полностью загрузил HTML,
было построено DOM - дерево, но внешние ресурсы,
такие как картинки <img> и стили, могут быть еще не загружены.
2) load - браузер загрузил HTML и внешние ресурсы (картинки, стили и т.д.)
3) beforeunload / unload - пользователь покудает страницу
*/

/*
document.readyState - состояние загрузки

Есть три важных значения:
'loading' - документ загружается
'interactive' - документ был полностью прочитан
'complete' - документ был полностью прочитан 
и все ресурсы (такие как изображения) были тоже загружены
*/

//Событие DOMContentLoaded срабатывает на объект document
document.addEventListener('DOMContentLoaded', readyDOM);

//Событие Load срабатывает на объекте window
window.addEventListener('load', readyLoad);

function readyDOM() {
    const image = document.querySelector('.image');
    console.log(document.readyState);
    console.log('DOM загружен');
    console.log(image.offsetWidth);
}

function readyLoad() {
    console.log(document.readyState);
    const image = document.querySelector('.image');
    console.log('Страница загружена');
    console.log(image.offsetWidth);
}

//Событие beforeunload срабатывает на объекте window
window.addEventListener('beforeunload', beforeUnLoad);

function beforeUnLoad(event) {
    //Отмените событие как указано в станданрте
    event.preventDefault();
    //Chrome требует установки возвратного значения
    event.returnValue = '';
}


//Событие unload срабатывает на объекте window
window.addEventListener('unload', function (e) {
    //Отправка статистики в фоновом режиме и т.д.
    //navigator.sendBeacon(url, data)
    //https://w3c.github.io/beacon/
})













