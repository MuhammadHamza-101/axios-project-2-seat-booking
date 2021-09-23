//starting js to get values....
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.seat.row:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
let movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;



function updateSelectedCounts(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
    
}; 

container.addEventListener('click', e =>{
    if(e.target.classList.contains('seat')&&
    !e.target.classList.contains('occupied')
    ){
       e.target.classList.toggle('selected');
       updateSelectedCounts();
    }
});

movieSelect.addEventListener('change',e =>{  
    ticketPrice = +e.target.value
    updateSelectedCounts()
})