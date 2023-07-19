document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('.submit').addEventListener('click', function (event) {

        let email = document.querySelector('.email').value;
        let subject = document.querySelector('.subject').value;
        let message = document.querySelector('.message').value;
        let status = document.querySelector('.status');
        status.innerHTML = '';

        // Email verification
        if (email.length > 5 && email.includes('@') && email.includes('.')) {
            status.insertAdjacentHTML('beforeend', '<div class="valid">Email is valid</div>');
        } else {
            event.preventDefault();
            status.insertAdjacentHTML('beforeend', '<div class="error">Invalid Email Address!</div>');
        }

        // Subject verification
        if (subject.length >= 2) {
            status.insertAdjacentHTML('beforeend', '<div class="valid">Subject is valid</div>');
        } else {
            event.preventDefault();
            status.insertAdjacentHTML('beforeend', '<div class="error">Please enter a subject with at least two characters.</div>');
        }

        // Message verification
        if (message.length >= 10) {
            status.insertAdjacentHTML('beforeend', '<div class="valid">Message is valid</div>');
        } else {
            event.preventDefault();
            status.insertAdjacentHTML('beforeend', '<div class="error">Please enter a message with at least ten characters.</div>');
        }
    });
});
