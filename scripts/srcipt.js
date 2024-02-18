function scrollIntoView(event){
    event.scrollIntoView({behavior: "smooth"});
}

document.getElementById('btn-buy-ticket').addEventListener('click', function(){
   scrollIntoView(document.getElementById('buy-ticket-section'));
});

function getSeatId(elementId){
   const element = document.getElementById(elementId)
    return element;
}

document.addEventListener('click', function(){
    const seatNo = getSeatId('A1');
    seatNo.classList.add('bg-green-500');
    // console.log(seatNo);
})

