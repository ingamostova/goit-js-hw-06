const form = document.querySelector('.login-form');
const emailEl = document.querySelector('[name="email"]');
const passwordEl = document.querySelector('[name="password"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    // console.log('This is form submit');
    
    if (passwordEl.value === '' || emailEl.value === '') {
        return alert('Всі поля повинні бути заповненими');
    }
    
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;
    
    const formData = {
        email,
        password,
    }
    console.log(formData);

    event.target.reset();
}
