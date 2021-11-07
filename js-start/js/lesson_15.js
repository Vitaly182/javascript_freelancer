//Свойства, события, методы. Практические примеры


//Свойства и методы форм

//Коллекция всех форм на странице - document.forms

//Получить коллекцию всех форм на странице
console.log(document.forms);

//Получить конкретную форму на странице
const mainForm_1 = document.forms[0];
console.log(mainForm_1);

//Атрибут name
const mainForm_2 = document.forms.main;
console.log(mainForm_2);

//Разница между document.forms и document.querySelectorAll('form');

//Коллекция
console.log(document.querySelectorAll('form'));
//Живая коллекция
console.log(document.forms);

//Добавление новой формы
document.body.insertAdjacentHTML(
    'beforeend',
    `<form name='some' class='some-form' action='#'></form>`,
)

//Элементы форм - document.forms.elements

const mainForm_3 = document.forms.main;
console.log(mainForm_3.elements);

//Получаем элемент с именем nameInput
const mainFormInput_3 = mainForm_3.elements.nameInput;
// или mainForm.nameInput
console.log(mainFormInput_3);

//Получаем коллекцию с именем nameRadio
const mainFormRadioButtons_3 = mainForm_3.nameRadio;
// или mainForm.elements.nameRadio
console.log(mainFormRadioButtons_3);

//Обратная ссылка - element.form

//Получаем объект родительской формы документа
console.log(mainFormInput_3.form)

//Работа с input и textarea

/*
Значение можно получить через свойство 

input.value(строка) - если атрибут value ничем не заполнен,
то по умолчанию значение будет 'on'

input.checked(булево значение) для чекбоксов и радиокнопок
- проверяем выбрана ли эта кнопка в данный момент
*/

//const mainForm_4 = document.forms.main;

const mainFormInput_1 = mainForm_1.nameInput;
const mainFormTextarea = mainForm_1.nameTextarea;

//Получить значение (содержимого) поля
console.log(mainFormInput_1.value);
//Получить значение (содержимого) текстового поля
console.log(mainFormTextarea.value);

//Присвоить значение (содержимое) поля
mainFormInput_1.value = 'Пока';
//Присвоить значение (содержимое) текстового поля
mainFormTextarea.value = 'Вот';


const mainFormRadioButtons = mainForm_1.nameRadio;
const mainFormCheckBox = mainForm_1.nameCheck;
const mainFormFile = mainForm_1.nameFile;

//Получим значение поля type radio
console.log(mainFormRadioButtons[0].value);
console.log(mainFormRadioButtons[1].value);
console.log(mainFormRadioButtons[0].checked);
console.log(mainFormRadioButtons[1].checked);

//Получим значение поля type checkbox
console.log(mainFormCheckBox.value);
console.log(mainFormCheckBox.checked);

//Получим значение поля type file
console.log(mainFormFile.value);

//Теперь научимся присваивать значения этим элементам из JS
//Назначим значение поля type radio

mainFormRadioButtons[0].value = 'left';
mainFormRadioButtons[1].value = 'right';
mainFormRadioButtons[1].checked = 'true';

//Назначим значение поля type checkbox
mainFormCheckBox.value = 'save';
mainFormCheckBox.checked = true;

//Назначим значение поля type file
mainFormFile.value = '';


//Работа с select и option

/*
Элемент <select> имеет 3 важных свойства:
select.options - коллекция из подэлементов <option>,
select.value - значение выбранного в данный момент <option>,
select.selectedIndex - номер выбранного <option>

Они дают три разных способа установить значение в <select>:
- найти соответствующий элемент <option> и установить
в option.selected значение true
- установить в select.value значение нужного <option>
- установить в select.selectedIndex номер нужного <option>

Первый способ наиболее понятный,
но (2) и (3) являются более удобными в работе
*/

//const mainForm = document.forms.main
const mainFormSelect = mainForm_1.nameSelect;

//Получить все options
console.log(mainFormSelect.options);

//Получить индекс выбранного option
const mainFormSelectIndex = mainFormSelect.selectedIndex;
console.log(mainFormSelectIndex);
//Получить значение выбранного option
const mainFormSelectValue = mainFormSelect.value;
console.log(mainFormSelectValue);
//Получить текст выбранного option
const mainFormSelectText = mainFormSelect.options[mainFormSelectIndex].text;
console.log(mainFormSelectText);

/*
Элементы <option> имеют свойства:
- выбрана ли функция - option.selected
- номер опции среди других в списке <select> - option.index
- содержимое опции (то, что видит посетитель) - option.text
*/


//Изменение объекта select из JS

//изменение selected - и теперь у нас виден второй option
mainFormSelect.options[1].selected = true;
//тоже самое можно сделать изменив selectedIndex
mainFormSelect.selectedIndex = 0;
//тоже самое можно сделать изменив value
mainFormSelect.value = 3;

/*
с помощью JS можно добавить новую option для selected

option = new Option(text, value, defaultSelected, selected);

Параметры:
text - текст внутри <option>
value - значение
defaultSelected - если true, то ставится HTML - атрибут selected
selected - если true, то элемент <option> будет выбранным

Тут может быть небольшая путаница с defaultSelected и selected
Всё просто: defaultSelected - задаёт HTML - атрибут,
его можно получить как option.getAttribute('selected')
а selected - выбрано значение или нет, именно его важно поставить правильно
Впрочем, обычно ставят оба этих значения в true или не ставят вовсе (т.е. false)
*/

//Пример
let newOption_1 = new Option('100', '4', false, false);
mainFormSelect.append(newOption_1);
let newOption_2 = new Option('500', '5', true, true);
mainFormSelect.append(newOption_2);


//Мультивыбор
//добавляем в html в тэг select - 'multiple'
//и сейчас можем поставить атрибут selected для нескольких option
//получаем все выбранные значения из select с multiple
//для этого используем массив и методы filter и map
let selectedOptions = Array.from(mainFormSelect.options)
    .filter(option => option.selected)
    .map(option => option.value);

console.log(selectedOptions);


//События форм и их элементов

/*
Фокусировка focus и blur

Элемент получает фокус (focus), когда пользователь кликает по нему
или использует клавишу Tab
Также существует HTML - атрибут autofocus, который устанавливает
фокус на элемент, когда страница загружается.
Есть и другие способы получения фокуса.

Фокусировка обычно означает:
"приготовиться к вводу данных на этом элементе",
это хороший момент, чтобы инициализировать или загрузить что-нибудь

Момент потери фокуса (blur) - это момент,
когда пользователь кликает куда-то еще или нажимает Tab,
чтобы переключиться на следующее полу формы.
Есть и другие способы потери фокуса

В момент события "потеря фокуса" мы можем выполнить
проверку введённых данных или даже отправить эти
данные на сервер и так далее
*/

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput

const mainFormInputValue = mainFormInput.value;

mainFormInput.addEventListener('focus', function (e) {
    mainFormInput.value = '';
});
mainFormInput.addEventListener('blur', function (e) {
    mainFormInput.value = mainFormInputValue;
});

/*
или меняем placeholder

const mainFormInputPlaceholder = mainFormInput.placeholder;

mainFormInput.addEventListener('focus', function (e) {
    mainFormInput.placeholder = '';
});
mainFormInput.addEventListener('blur', function (e) {
    mainFormInput.placeholder = mainFormInputPlaceholder;
});
*/


/*
Действия могут быть самыми разными:
валидация поля, отправка формы и т.д.
*/


//Методы elem.focus() и elem.blur()
//устанавливают или снимают фокус
//c их помощью можем управлять из JS фокусировкой того или иного элемента

//Пример - направляем фокус на элемент Input на 3 секунды

//const mainForm = document.forms.main;
//const mainFormInput = mainForm.nameInput

mainFormInput.focus();

setTimeout(() => {
    mainFormInput.blur();
}, 3000);


/*
Фокусировка на любом элементе с помощью tabindex

Многие элементы по умолчанию не поддерживают фокусировку.
Какие именно - зависит от браузера, но одно всегда верно:
поддержка focus/blur гарантирована для элементов,
с которыми посетитель может взаимодействовать:
<button>, <input>, <select>, <a> и т.д.

С другой стороны, элементы форматирования
<div>, <span> - по умолчанию не могут получить фокус.

Метод elem.focus() не работает для них,
и события focus/blur никогда не срабатывают.

Это можно изменить HTML-атрибутом tabindex.

tabindex = '0' ставит элемент в один ряд
с элементами без tabindex. То есть, при переключении
такие элементы будут после элементов с tabindex >= 1
Обычно используется, чтобы включить фокусировку на элементе,
но не менять порядок переключения. Чтобы элемент мог
участвовать в форме наравне с обычными <input>

tabindex = '-1' позволяет фокусироваться на элементе только программно.
Клавиша Tab проигнорирует такой элемент,
но метод elem.focus() будет действовать.
*/

//Пример
//Для срабатывания добавляем tabindex="-1" в div с lesson
//При кликание на div сейчас вокруг div появляется рамка - прописано в CSS

const lesson = document.querySelector('.lesson');

//Реализуем на событие "в фокусе"
lesson.addEventListener('focus', function (e) {
    lesson.classList.add('_focus');
    console.log('Div lesson в фокусе');
});

//Реализуем на событие "потеря фокуса"
lesson.addEventListener('blur', function (e) {
    lesson.classList.remove('_focus');
});

/*
Текущий элемент с фокусом можно получить
из document.activeElement
*/
console.log(document.activeElement);


//События focusin и focusout
//Работают также как и focus/blur но при этом всплывают

//const mainForm = document.forms.main

//Хотим установить фокус на форме при работе с элементами
mainForm.addEventListener('focusin', function (e) {
    mainForm.classList.add('_active');
}, {'capture': true});

/*
{'capture': true} - или ловим фокусировку формы в момент погружения

mainForm.addEventListener('focus', function (e) {
    mainForm.classList.add('_active');
}, {'capture': true});
*/


//Событие change
//Срабатывает по окончании изменения элемента

/*
В текстовых input и textarea работает также как и blur (потеря фокуса),
но в select, radio, checkbox и т.д. сразу
*/

//const mainForm = document.forms.main;
//const mainFormInput = mainForm.nameInput;
//const mainFormSelect = mainForm.nameSelect;
//const mainFormFile = mainForm.nameFile;

mainFormInput.addEventListener('change', function (e) {
    console.log('Сработало change в input');
});
mainFormSelect.addEventListener('change', function (e) {
    console.log('Сработало change в select');
});
mainFormFile.addEventListener('change', function (e) {
    console.log('Сработало change в file');
});


//Событие input
/*
Событие input срабатывает каждый раз при изменении значения.
В отличии от событий клавиатуры, оно работает
при любых изменениях значенийЮ даже если они 
не связаны с клавиатурными действиями:
вставка с помощью мыши или распознавание речи при диктовке текста
*/

//const mainForm = document.forms.main;
//const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener('input', function (event) {
    console.log(`value: ${mainFormInput.value}`);
});


//События cut, copy, paste
//эти события происходят при вырезании/копировании/вставке данных

//const mainForm = document.forms.main;
//const mainFormInput = mainForm.nameInput;

mainFormInput.addEventListener('copy', function (event) {
    console.log(`Копируем`);
});
mainFormInput.addEventListener('paste', function (event) {
    console.log(`Вставляем`);
});
mainFormInput.addEventListener('cut', function (event) {
    console.log(`Вырезаем`);
});

/*
любое из этих действия можем отменить используя event.preventDefault()
*/

mainFormInput.addEventListener('copy', function (event) {
    console.log(`Нельзя копировать`);
    event.preventDefault();
});


//Отправка формы - событие и метод submit

/*
При отправке формы срабатывает событие submit,
оно обычно используется для проверки (валидации)
формы перед её отправкой на сервер или для
предотвращения отправки и обработки её с помощью JS

Есть два основных способа отправить форму:
1) нажать кнопку <input type="submit"> или <button type="submit">
2) нажать Enter, находясь на каком-либо поле
*/

//const mainForm = document.forms.main;
//const mainFormInput = mainForm.nameInput;

mainForm.addEventListener('submit', function (event) {
    console.log('Форма отправляется');

    //Проверяем поля и если есть ошибки отменяем отправку
    if (!mainFormInput.value) {
        console.log('Поле nameInput не заполнено');
        event.preventDefault();
    }
})

//Отправляем форму при потере фокуса у nameInput
mainFormInput.addEventListener('blur', function (e) {
    mainForm.submit();
})





















