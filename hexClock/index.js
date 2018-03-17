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
  return hexSet;
}
// let clock = document.getElementById('clock');
// let clockText = document.createTextNode(hexClock());
// let blankSpace = document.createTextNode(" ");
// clock.appendChild(blankSpace);
// clock.replaceChild(clockText, blankSpace);

// function updateClock(){

// }


function initiateClock()
{
    let clock = document.getElementById('clock');
let clockText = document.createTextNode(hexClock());
let blankSpace = document.createTextNode(" ");
clock.appendChild(clockText, blankSpace);
}

function replaceFirst()
{
  let clockText = document.createTextNode(hexClock());
  let newTime = clock.appendChild(clockText);
  let firstTime = document.getElementById('clock').firstChild;
  document.getElementById('clock').replaceChild(firstTime, newTime);
}


setInterval(replaceFirst(), 1000);


