let age = prompt('Скільки Вам років?');

if (age >= 18) {
  message = 'Привіт!';
} else if (age < 18) {
  message = 'Будь ласка покиньте сайт.';
}
alert(message);
