const clock = document.getElementById('clock');
const onBreakClock = document.getElementById('on-break-clock');
const pause = document.getElementById('pause');
const resume = document.getElementById('resume');
const start = document.getElementById('start');
let onBreak = false;
let time = 0;
let breakTime = 0;


start.addEventListener('click', () => {
  timeCounter();
  toggleDiv(start)
  toggleDiv(pause)
})

pause.addEventListener('click', (e) => {
  // e.preventDefault();
  onBreak = true;
  toggleDiv(pause)
  toggleDiv(resume)
  breakTimeCounter();
})

resume.addEventListener('click', (e) => {
  // e.preventDefault();
  onBreak = false;
  toggleDiv(pause)
  toggleDiv(resume)
})

let timeCounter = function() {
  setInterval(function() {
    if(!onBreak) {
      time++
      clock.innerHTML = formatTime(time);
    }
  }, 1000);
}

let breakTimeCounter = function() {
  setInterval(function() {
    if(onBreak) {
      breakTime++
      onBreakClock.innerHTML = formatTime(breakTime);
    }
  }, 1000);
}


function formatTime(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [
    h,
    m > 9 ? m : (h ? '0' + m : m || '0'),
    s > 9 ? s : '0' + s,
  ].filter(a => a).join(':');
}

function toggleDiv(div) {
  div.classList.toggle("hidden")
}