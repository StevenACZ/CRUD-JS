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

function getValues() {
  const inputName = document.querySelector("[name='name']");
  const inputLastname = document.querySelector("[name='lastname']");
  const inputBreed = document.querySelector("[name='breed']");
  const inputPhone = document.querySelector("[name='phone']");
  const inputCountry = document.querySelector("[name='country']");
  const inputPhoto = document.querySelector("[name='photo']");
  const inputAbout = document.querySelector("[name='about']");

  return {
    inputName: inputName.value,
    inputLastname: inputLastname.value,
    inputBreed: inputBreed.value,
    inputPhone: inputPhone.value,
    inputCountry: inputCountry.value,
    inputPhoto: inputPhoto.value,
    inputAbout: inputAbout.value
  }
}

function init() {
  const form = document.querySelector('.modal__body');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    insertCard(createCard(getValues()));
    let btnAddPet = document.querySelector('.js_btnAddPet');
    let btnAddPetHeader = document.querySelector('.js_btnAddPetHeader');
    btnAddPet.style.display = 'none';
    btnAddPetHeader.style.display = 'block';
  })
}

function insertCard(card) {
  const main = document.querySelector('.main');
  main.appendChild(card);
}

function createCard(values) {
  const {
    inputName: name,
    inputLastname: lastname,
    inputBreed: breed,
    inputPhone: phone,
    inputCountry: country,
    inputPhoto: photo,
    inputAbout: about
  } = values;
  const card = document.createElement('article');
  card.classList.add('pet');
  card.innerHTML = `
    <button class="pet__edit js_edit">
      <img src="./src/icons/edit.png">
      Edit
    </button>
    <button class="pet__delete js_delete">
      <img src="./src/icons/delete.png">
      Delete
    </button>

    <img class="pet__img" src="${photo}" alt="A pet">

    <div class="pet__information">
      <p class="pet__name">${name}</p>
      <p><span class="pet__phone">${phone}</span> | <span class="pet__email">${breed}</span></p>
      <p class="pet__country">${country}</p>
    </div>

    <p class="pet__about">
      ${about}
    </p>
  `
  return card;
}


init();