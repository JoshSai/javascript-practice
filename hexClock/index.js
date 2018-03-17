function hexClock(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if(hour < 10){
    hour = `0${hour}`;
  }
  if(minutes < 10){
    minutes = `0${minutes}`;
  }
  if(seconds < 10){
    seconds = `0${seconds}`;
  }
  
  let hexSet = `#${hour}${minutes}${seconds}`;
  
  document.body.style.backgroundColor = hexSet;
  
  let clock = document.getElementById('clock');
  let clockText = document.createTextNode(hexSet);
  clock.appendChild(clockText);
  return;
  
}

setInterval(hexClock(), 1000);




