
// Update the count down every 1 second
 var x = setInterval(function() {
  // Set the date we're counting down to
  var countDownDate = new Date("December 10, 2022 15:37:25").getTime();
  // Get today's date and time
  var now = new Date().getTime();
     // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "Day " + hours + ":Hours "
  + minutes + ":Minutes " + seconds + "Seconds";
   // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Do It";
     }
  }, 1000);
//function for the stop button
function x() {
    var distance = new Date();
    document.getElementById("timer").innerHTML = distance.toLocaleTimeString();
  }
  function stopBtn() {
    clearInterval(x);
  }
// functions for the start button
   function startBtn() {
        var countDownDate = new Date("December 10, 2022 15:37:25").getTime();
         x = setInterval(function () {
         var now = new Date().getTime();
         var distance = countDownDate - now;
         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
         // Output the result in an element with id="timer"
         document.getElementById("timer").innerHTML = days + "Day " + hours + ":H "
           + minutes + ":M " + seconds + "S";
       }, 1000);
     }
  function darkAndLight(){
    var element = document.body;
    element.classList.toggle("brightMode");
  }
