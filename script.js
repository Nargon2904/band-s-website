function sayHi() {
    alert("Hello");
}

// window.sayHi();


let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
  evt.preventDefault();
  // Измените значение textContent на следующей строке
  alert('Почта ' + email.value + ' теперь подписана на рассылку!');
};