//Практические примеры


//Проверяем ввод email, выводим ошибку

const mainForm = document.forms.main;
const mainFormInput = mainForm.nameInput;

mainForm.addEventListener('submit', function (event) {
    if (emailTest(mainFormInput)) {
        mainFormInput.parentElement.insertAdjacentHTML(
            'beforeend',
            `<div class='main-form__error'>
                Введите email
            </div>`
        );
        event.preventDefault();
    }
});

mainFormInput.addEventListener('focus', function (event) {
    if (mainFormInput.nextElementSibling) {
        mainFormInput.nextElementSibling.remove();
    }
});

//Функция теста email
function emailTest (input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}


//Выводим картинку после выбора

//const mainForm = document.forms.main;
const mainFormFile = mainForm.nameFile;

mainFormFile.addEventListener('change', function (e) {
    let selectedFile = mainFormFile.files[0];

    //Получаем url изображения
    let fileUrl = URL.createObjectURL(selectedFile);

    mainFormFile.parentElement.insertAdjacentHTML(
        'beforeend',
        `<div class='main-form__image'>
            <img alt='' title='${selectedFile.name}' src='${fileUrl}'>
        </div>`
    );
});



















