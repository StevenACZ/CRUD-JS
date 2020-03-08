//---------------------------------------------------------
//- MODAL 
//---------------------------------------------------------
/*function Modal(element, callbackClose, callbackAccept, callbackCancel) {
  this.element = document.querySelector(element);
  this.elementClose = this.element.querySelector('.js_close');
  this.elementAccept = this.element.querySelector('.js_accept');
  this.elementCancel = this.element.querySelector('.js_cancel');

  this.registerEvents(callbackClose, callbackAccept, callbackCancel);
}

Modal.prototype.open = function() {
  this.element.classList.add('active');
}

Modal.prototype.close = function() {
  this.element.classList.remove('active');
}

Modal.prototype.registerEvents = function(callbackClose, callbackAccept, callbackCancel){
  this.elementClose.addEventListener('click', () => {
    callbackClose();
    this.close();
  })
  this.elementAccept.addEventListener('click', () => {
    callbackAccept();
    this.close();
  })
  this.elementCancel.addEventListener('click', () => {
    callbackCancel();
    this.close();
  })
}

let modalSetPet = new Modal('.js_modalSetPet', function() {
  console.log('Close');
  container.classList.remove('active');
}, function() {
  console.log('Accept');
  container.classList.remove('active');
  btnAddPet.style.display = 'none';

}, function() {
  console.log('Cancel');
  container.classList.remove('active');
});

let btnAddPet = document.querySelector('.js_btnAddPet');
let container = document.querySelector('.container');
btnAddPet.addEventListener('click', function() {
  modalSetPet.open();
  container.classList.add('active');
})*/

function init() {
  const form = document.querySelector('.modal__body');
  const inputName = document.querySelector("[name='name']");
  const inputLastname = document.querySelector("[name='lastname']");
  const inputBreed = document.querySelector("[name='breed']");
  const inputPhone = document.querySelector("[name='phone']");
  const inputCountry = document.querySelector("[name='country']");
  const inputPhoto = document.querySelector("[name='photo']");

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('inputName', inputName.value);
    console.log('inputLastName', inputLastname.value);
    console.log('inputName', inputBreed.value);
    console.log('inputName', inputPhone.value);
    console.log('inputName', inputPhoto.value);
  })
}




init();