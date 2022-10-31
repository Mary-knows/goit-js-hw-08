import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
let formData = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', onKeyboardClick);
form.addEventListener('input', throttle(onTextareaInput, 500));


loadTextarea();


function onKeyboardClick(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    evt.currentTarget.reset(); 
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onTextareaInput(evt) {
    const email = form.email.value;
    const message = form.message.value;

    formData = {
        email,
        message
    }

    // formData[evt.target.name] = evt.target.value;

    const formDataStringify = JSON.stringify(formData);

    localStorage.setItem(LOCALSTORAGE_KEY, formDataStringify);
}

function loadTextarea() {
    const savedInputText = localStorage.getItem(LOCALSTORAGE_KEY);
        const formDataParse = JSON.parse(savedInputText);
    
    if (savedInputText) {
        form.email.value = formDataParse.email;
        form.message.value = formDataParse.message;
    }
}
