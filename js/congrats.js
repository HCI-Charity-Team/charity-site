var timeleft = 6;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    window.location.href = '/index.html';
  }
  document.querySelector('#time').innerHTML = timeleft;
  timeleft -= 1;
}, 1000);
