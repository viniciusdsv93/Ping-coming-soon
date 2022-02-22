let objValidator = {
    handleSubmit: (event) => {
        event.preventDefault();
        
        let send = true;

        let emailInput = document.querySelector('.input-email');
        emailInput.classList.remove('border-red');

        let errorMessage = document.querySelector('.error-message');
        errorMessage.classList.add('hidden');
        
        if (emailInput.value == '') {
            emailInput.classList.add('border-red');
            errorMessage.classList.remove('hidden');
            errorMessage.innerHTML = 'Email Address cannot be empty.';
            console.log('Email Address cannot be empty.');
            send = false;
        }
        else {
            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(emailInput.value.toLowerCase())) {
                emailInput.classList.add('border-red');
                errorMessage.classList.remove('hidden');
                errorMessage.innerHTML = 'Invalid email format.';
                console.log('Invalid email format.');
                send = false;
            }
        }

        if (send) {
            alert('Data successfully submitted.');
        }
    }
}

let submitButton = document.querySelector('.validator');

submitButton.addEventListener('submit', objValidator.handleSubmit);