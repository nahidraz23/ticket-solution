const availableSeats = document.querySelectorAll('.available');

const addTicket1 = document.getElementById('ticketNo1');
const addTicket2 = document.getElementById('ticketNo2');
const addTicket3 = document.getElementById('ticketNo3');

const addTicket4 = document.getElementById('ticketNo4');
const addTicket5 = document.getElementById('ticketNo5');
const addTicket6 = document.getElementById('ticketNo6');

const addTicket7 = document.getElementById('ticketNo7');
const addTicket8 = document.getElementById('ticketNo8');
const addTicket9 = document.getElementById('ticketNo9');

const addTicket10 = document.getElementById('ticketNo10');
const addTicket11 = document.getElementById('ticketNo11');
const addTicket12 = document.getElementById('ticketNo12');

const getTotalTicketCostId = document.getElementById('total-ticket-cost');

let totalTicketCost = parseInt(
  document.getElementById('total-ticket-cost').innerText
);

const getGrandTotaCostlId = document.getElementById('grand-total');

let grandTotalCost = parseInt(document.getElementById('grand-total').innerText);

const getCouponCode = document.getElementById('coupon-code');

const getApplyBtnId = document.getElementById('btn-apply');

const couponDiv = document.getElementById('coupon-div');

let seatAvailable = 40;
let seatSelected = 0;
const seatClass = 'Economy';
const seatFare = 550;

for (const seat of availableSeats) {
  seat.addEventListener('click', function (event) {
    if (seatSelected < 4) {
      seatSelected = seatSelected + 1;

      let seatNo = seat.innerText;

      if (seatSelected == 1) {
        addTicket1.innerText = seatNo;
        addTicket2.innerText = seatClass;
        addTicket3.innerText = seatFare;
      } else if (seatSelected == 2) {
        addTicket4.innerText = seatNo;
        addTicket5.innerText = seatClass;
        addTicket6.innerText = seatFare;
      } else if (seatSelected == 3) {
        addTicket7.innerText = seatNo;
        addTicket8.innerText = seatClass;
        addTicket9.innerText = seatFare;
      } else if (seatSelected == 4) {
        addTicket10.innerText = seatNo;
        addTicket11.innerText = seatClass;
        addTicket12.innerText = seatFare;
      }

      totalTicketCost = seatSelected * seatFare;

      getTotalTicketCostId.innerText = totalTicketCost;

      getGrandTotaCostlId.innerText = totalTicketCost;

      grandTotalCost = totalTicketCost;

      seat.disabled = true;
      if (seat.disabled === true) {
        seat.style.backgroundColor = '#32CD32';
        seat.style.color = '#fff';
      }
    } else {
      alert('You can not select more than 4 seats at a time');
    }
    const getTakenSeat = document.getElementById('seat-selected');
    let takenSeat = seatSelected;
    getTakenSeat.innerText = takenSeat;

    const getAvailableSeat = document.getElementById('available-seats');
    let seatLeft = seatAvailable - takenSeat;
    getAvailableSeat.innerText = seatLeft;
  })
}

// coupon code
let discount = 0;

function checkCouponCode () {
  if (getCouponCode.value === 'NEW15') {
    discount = parseInt(grandTotalCost * 0.15);
    grandTotalCost = grandTotalCost - discount;
    getGrandTotaCostlId.innerText = grandTotalCost;
    couponDiv.classList.add("hidden")

  } else if (getCouponCode.value === 'Couple 20') {
    discount = parseInt(grandTotalCost * 0.2);
    grandTotalCost = grandTotalCost - discount;
    getGrandTotaCostlId.innerText = grandTotalCost;
    couponDiv.classList.add("hidden")
  } else {
    alert('Please provide correct coupon code');
  }
}
