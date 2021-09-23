//starting js to get values....
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat.row:not(.Occupied)');
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

const moviePrice = movieSelect.value;
console.log(moviePrice);