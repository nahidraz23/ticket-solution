let availableSeats = document.querySelectorAll(".available");

let seatAvailable = 40;
let seatSelected = 0;

for(const seat of availableSeats){
    seat.addEventListener('click', function(event){
        if(seatSelected < 4){
            seatSelected = seatSelected + 1;
            
            seat.disabled = true;
            if(seat.disabled === true){
                seat.style.backgroundColor = "#32CD32";
                seat.style.color = "#fff";
            }
        }
        const getTakenSeat = document.getElementById('seat-selected');
        let takenSeat = seatSelected;
        getTakenSeat.innerText = takenSeat;

        const getAvailableSeat = document.getElementById('available-seats');
        let seatLeft = seatAvailable - takenSeat;
        getAvailableSeat.innerText = seatLeft;
    })
}