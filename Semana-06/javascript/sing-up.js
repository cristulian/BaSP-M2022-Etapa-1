window.onLoad = () => {
    const test = () => {
      console.log('change');
    }
    const name = document.getElementById('name').addEventListener('change', test);
  }
  
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

    if (field === '') {
      removeHiddenClass(errorId);
    } else {
      addHiddenClass(errorId);
    }
  }
  function validateIsDNI() {
    const dni = getDomElementValue('#id');
    const errorId = '#id-error-2';

    if (dni.length < 8) {
      removeHiddenClass(errorId);
    } else {
      addHiddenClass(errorId);
    } 
  }
  function validateLenght(id,a){
    const field = getDomElementValue(`#${id}`);
    const errorId = `#${id}-error`;

    if (field.length >= a) {
      removeHiddenClass(errorId);
    } else {
      addHiddenClass(errorId);
    }

  function onSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    // validar los campos

    validateIsNotEmptyField('name');
    validateLenght('name',3);
    validateIsNotEmptyField('lastname');

    validateIsNotEmptyField('id');
    validateIsDNI();

    validateIsNotEmptyField('birthdate');
    validateIsNotEmptyField('tel');
    validateIsNotEmptyField('adress');
    validateIsNotEmptyField('location');
    validateIsNotEmptyField('postcode');
    validateIsNotEmptyField('email');
    validateIsNotEmptyField('password');
    validateIsNotEmptyField('confirmpassword');
    validateIsNotEmptyField('confirmemail');
    
  }