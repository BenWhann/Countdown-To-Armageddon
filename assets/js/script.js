var countDownDate = new Date("Jun 8, 2024 12:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
      
    var difference = countDownDate - now;
      
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
    document.getElementById("time-left").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "AN ACT OF SEXUAL VIOLENCE HAS BEEN COMMITED. DON IS NOW AN INCEL. MAY THE LORD HAVE MERCY ON US ALL";
    }
  }, 1000);