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



/*для подсчета суммы, не работает

let totp = document.querySelector('.total-price');
let price = 0;

let a = document.getElementById('1 tish').innerHTML; // нужно будет брать по id
let b = document.getElementById('2 tish').innerHTML;  // нужно будет брать по id
let c = document.getElementById('3 tish').innerHTML; // нужно будет брать по id
a = parseInt(a.slice(0, -1));
b = parseInt(b.slice(0, -1));
c = parseInt(c.slice(0, -1));

function myFunc(a, b, c) {
  price = a + b + c;
  totp.setAttribute("value", price);
}
*/

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

  if (value < 8) {
    value = value + 1;
  } else {
    value =8;
  }

  $input.val(value);
});


/*var minus = document.querySelectorAll('.minus-btn'), i;//проблема в селекторе
var plus = document.querySelectorAll('.plus-btn'), j;

//var divs = document.querySelectorAll('div'), i;

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
};
*/
