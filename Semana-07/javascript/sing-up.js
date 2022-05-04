const keys = [
  'name', 'lastName', 'dni', 'dob', 'phone','address',
  'city','zip', 'email', 'password', 'confirmpassword', 'confirmemail'
];

function getDomElementValue(id) {
  return document.querySelector(id).value;
}
function removeHiddenClass(id) {
  document.querySelector(id).classList.remove('hidden');
};
function addHiddenClass(id) {
  document.querySelector(id).classList.add('hidden');
}
function validateIsNotEmptyField(id) {
  const field = getDomElementValue(`#${id}`);
  const errorId = `#${id}-error`;
  let isValid = true;

  if (field === '') {
    removeHiddenClass(errorId);
    isValid = false;
  } else {
    addHiddenClass(errorId);
  }

  return isValid;
}

window.onload = () => {
  const personFromLocalStorage = localStorage.getItem('signup');

  if (personFromLocalStorage) {
    const person = JSON.parse(personFromLocalStorage);
    
    keys.slice(0, keys.length - 2).forEach(field => {
      let domNode = document.querySelector(`#${field}`);
      domNode.value = person[field];
    });

    let confirmEmailDomNode = document.querySelector('#confirmemail');
    confirmEmailDomNode.value = person['email'];
    
    let confirmPasswordDomNode = document.querySelector('#confirmpassword');
    confirmPasswordDomNode.value = person['password'];
  }
}

function onSubmit(event) {
  event.stopPropagation();
  event.preventDefault();

  let isValid = true;
  let person = {};

  keys.forEach((field) => {
    person[field] = getDomElementValue(`#${field}`);

    if (isValid && !validateIsNotEmptyField(field)) {
      isValid = false;
    };
  });

  if (isValid) {
    let url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
    let keysToSend = keys.slice(0, keys.length - 2);

    keysToSend.forEach((field, index) => {
      let value = person[field];
      const connector = index === keys.length - 1? '' : '&';

      if (field === 'dob') {
        const date = value.split('-');
        
        value = `${date[1]}/${date[2]}/${date[0]}`
      }

      url += `${field}=${value}${connector}`;
    });

    fetch(url)
      .then(response => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('signup', JSON.stringify(person));
          alert('Person has been created');
        } else {
          const errorMessages = data.errors ? data.errors.map(({ msg }) => msg) : data.msg;

          alert(data.errors ? errorMessages.join('\n') : errorMessages);
        }
      }
    );
  }
}