///--- DOM ELEMENTS
const body = document.getElementById('body');
const header = document.getElementById('header');
const main = document.getElementById('main');
const modalContact = document.getElementById('modal__contact');
const modalContactTitle = document.querySelector('.modal header h2');
const modalContactButton = document.querySelector('.photographer__contact--btn');
const modalContactClose = document.querySelector('.modal__contact--close');
const modalContactValidButton = document.querySelector('#valid-btn');

// Form elements
const modalFormContact = document.querySelector('form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Regex : https://regexr.com
const regexTextOnly = new RegExp(/^[^\s][a-zA-ZÀ-ȕ\s]{1,}$/);
const regexTextarea = new RegExp(/^[^\s][a-zA-ZÀ-ȕ0-9\s]{1,}$/);
const regexEMail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

///--- FUNCTIONS

// Show modal contact
function showModalContact(photographer) {
    // Disable scroll on body when modal is open
    body.classList.add('no-scroll');
    // Change attribute hidden
    header.setAttribute('aria-hidden', 'true');
    main.setAttribute('aria-hidden', 'true');
    modalContact.setAttribute('aria-hidden', 'false');
    // Add title with photographer name
    modalContactTitle.innerHTML = `Contactez-moi<br>${photographer.name}`;
    // Show modal
    modalContact.style.display = 'block';
    // Make focus on input firstname
    firstName.focus();
}

// Close modal contact
function closeModalContact() {
    // Remove disable scroll on body when modal is open
    body.classList.add('no-scroll');
    // Change attribute hidden
    header.setAttribute('aria-hidden', 'false');
    main.setAttribute('aria-hidden', 'false');
    modalContact.setAttribute('aria-hidden', 'true');
    // Hidden modal
    modalContact.style.display = 'none';
    $contactButton.focus();

    modalContact.style.display = 'none';
}

// Validation form contact
function validationFormContact(event) {
    // Stop default action of submit button
    event.preventDefault();
    // remove all actually error message
    hiddenError();

    // Get all data on form and valid (or not)
    let results = {
        firstname: validText(firstName),
        lastname: validText(lastName),
        email: validEmail(email),
        message: validTextarea(message),
    };

    // Checks if all results was true
    if (Object.values(results).every((e) => e == true)) {
        // Switch to validation Modal
        validationModalContact();
    } else {
        // Or something is false / wrong data
        Object.values(results).map((e) => {
            // Checks if we have a element and a message for this data
            if (e.hasOwnProperty('element') && e.hasOwnProperty('messageError')) {
                // we add a message error on this element / wront data
                showError(e.element, e.messageError);
            }
        });
    }
}

///--- Verification Form

// Checks valid text (only text)
function validText(text) {
    let messageError = 'Veuillez saisir un texte valide.';

    // Check if text have more than two caracters
    if (text.value.trim().length <= 2) {
        messageError = 'Veuillez entrer deux caractères ou plus';
    }

    // Checks if regexText is valid
    return regexTextOnly.test(text.value) && text.value.trim().length <= 2
        ? true
        : { element: text.parentNode, messageError: messageError };
}

// Checks valid email
function validEmail(email) {
    let messageError = 'Veuillez saisir un email valide.';

    // Checks if regexEmail is valid
    return regexEMail.test(email.value)
        ? true
        : { element: email.parentNode, messageError: messageError };
}

// Checks valid textarea (text + number)
function validTextarea(text) {
    let messageError = 'Veuillez saisir du texte valide.';

    // Check if text have more than two caracters
    if (text.value.trim().length <= 2) {
        messageError = 'Veuillez entrer deux caractères ou plus';
    }

    // Checks if regexText is valid
    return regexTextarea.test(text.value) && text.value.trim().length <= 2
        ? true
        : { element: text.parentNode, messageError: messageError };
}

// Show error message
function showError(element, messageError) {
    // create balise p HTML with message error and add error class style
    let p = document.createElement('p');
    p.innerText = messageError;
    p.classList.add('error');

    // Check if element is a input
    if (element.classList.contains('input-control')) {
        // Add red border style
        element.querySelector('.text-control').style.borderColor = 'red';
    }

    // add this message error at end of element
    element.appendChild(p);
}

// Remove all error class
function hiddenError() {
    // remove class error
    let allError = document.querySelectorAll('.error');
    Array.from(allError).map((e) => e.remove());

    // remove red border
    let allInput = document.querySelectorAll('.text-control');
    Array.from(allInput).map((e) => (e.style.borderColor = 'green'));
}

// reset form
function resetFormContact() {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
}

// Show Validation modal
function validationModalContact() {
    // Close button
    modalContactValidButton.addEventListener('click', () => {
        // valid submit form
        modalFormContact.submit();
        // reset form
        resetFormContact();
    });
}

///--- Event Listener

// Close modal event
modalContactClose.addEventListener('click', closeModalContact);
modalContactClose.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        closeModalContact();
    }
});

// Submit modal form
modalFormContact.addEventListener('submit', validationFormContact);
