//---------------------------------------------------------
//- MODAL 
//---------------------------------------------------------
function Modal(element, callbackClose, callbackAccept, callbackCancel) {
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
  })
  this.elementCancel.addEventListener('click', () => {
    callbackCancel();
    this.close();
  })
}

let modalSetPet = new Modal('.js_modalSetPet', function() {
  container.classList.remove('active');
}, function() {


}, function() {
  container.classList.remove('active');
});

let btnAddPet = document.querySelector('.js_btnAddPet');
let btnAddPetHeader = document.querySelector('.js_btnAddPetHeader');
let container = document.querySelector('.container');
btnAddPet.addEventListener('click', function() {
  modalSetPet.open();
  container.classList.add('active');
})
btnAddPetHeader.addEventListener('click', function() {
  modalSetPet.open();
  container.classList.add('active');
})

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
    sendUser(getValues());
  })
}

function sendUser(user) {
  const {
    inputName: name,
    inputLastname: lastname,
    inputBreed: breed,
    inputPhone: phone,
    inputCountry: country,
    inputPhoto: photo,
    inputAbout: about
  } = user;

  fetch('http://localhost:3000/users', {
    method: 'POST',
    body: JSON.stringify({
      name,
      lastname,
      breed,
      phone,
      country,
      photo,
      about
    }),

    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(function() {
    return response.json()
  }).then(function(userCreated) {
    console.log('userCreated', userCreated);
  })
}

function readUsers() {
  fetch('http://localhost:3000/users')
  .then(function(response) {
    return response.json();
  }).then(function(users){
    users.forEach(user => {
      let btnAddPet = document.querySelector('.js_btnAddPet');
      let btnAddPetHeader = document.querySelector('.js_btnAddPetHeader');
      btnAddPet.style.display = 'none';
      btnAddPetHeader.style.display = 'block';

      insertCard(createCard(user));
    });
  })
}

function insertCard(card) {
  const main = document.querySelector('.main');
  main.appendChild(card);
}

function createCard(user) {
  const {
    name,
    lastname,
    breed,
    phone,
    country,
    photo,
    about
  } = user;

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
  card.querySelector('.js_edit').addEventListener('click', function() {
    console.log('user', user);
  });

  card.querySelector('.js_delete').addEventListener('click', function() {
    console.log('user', user);
  });

  return card;
}

init();
readUsers();