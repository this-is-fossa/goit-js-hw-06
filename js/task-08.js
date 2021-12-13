const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
  event.preventDefault();
  
  const formElements = event.currentTarget.elements;

  const mail = formElements.email.value;
  const password = formElements.password.value;
  
  const formData = {
      mail,
      password,
  };

  if (mail === '' || password === '') {
    alert('Все поля должны быть заполнены');
  }
  else {
  console.log(formData);

  event.currentTarget.reset();
  }
  
};
