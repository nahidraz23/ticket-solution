function scrollIntoView (event) {
  event.scrollIntoView({ behavior: 'smooth' })
};

document
  .getElementById('btn-buy-ticket')
  .addEventListener('click', function () {
    scrollIntoView(document.getElementById('buy-ticket-section'))
  });

  // function getSeatNo(event) {
      
  //     const seatNo = event.target.innerText;
  //     const element = document.getElementById(seatNo);

  //     element.classList.add('bg-green-500');
  
  //     let count = 0;
  //     if (element.classList.contains('bg-green-500') === true) {
  //       count++
  //       const disabled = (element.disabled = true)
  //       if (disabled === true) {
  //         element.style.backgroundColor = '#32CD32'
  //         element.style.color = 'white'
  //       }
  //     }
  // };


