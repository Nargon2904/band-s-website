let form = document.querySelector('.subscription');
let email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
  evt.preventDefault();
  if (email.value != 0) {
    alert('Почта ' + email.value + ' теперь подписана на рассылку!');
  } else {
    alert('Почта не указана');
  }
};


$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value =100;
  }

  $input.val(value);
});


/*let minus = document.querySelector('.minus-btn');//проблема в селекторе, он берет первый элемент
let plus = document.querySelector('.plus-btn');

minus.onclick = function(evt) {
  evt.preventDefault();
  var inp = minus.previousElementSibling;
  var value = parseInt(inp.value);

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  inp.setAttribute("value", value);
};

plus.onclick = function(evt) {
  evt.preventDefault();
  var inp = plus.nextElementSibling;
  var value = parseInt(inp.value);

  if (value < 8) {
    value = value + 1;
  } else {
    value =8;
  }

  inp.setAttribute("value", value);
};*/


let totp = document.querySelector('.total-price');
let price = 0;

let a = document.querySelector('.product-price').innerHTML; // нужно будет брать по id
alert(a);
totp.setAttribute("value", price);