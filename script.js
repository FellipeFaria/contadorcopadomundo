const daysInput = document.getElementById('inputDays');
const hoursInput = document.getElementById('inputHours');
const minutesInput = document.getElementById('inputMinutes');
const secondsInput = document.getElementById('inputSeconds');

const worldCupDate = new Date("2026-06-11T16:00:00").getTime();

const coutdown = setInterval(() => {
  const today = new Date().getTime();
  let timeLeft = worldCupDate - today;

  if (timeLeft < 0) {
    clearInterval(coutdown);

    daysInput.value = '00';
    hoursInput.value = '00';
    minutesInput.value = '00';
    secondsInput.value = '00';

    return;
  }

  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  let days = Math.floor(timeLeft / oneDay);
  let hours = Math.floor((timeLeft % oneDay) / oneHour);
  let minutes = Math.floor((timeLeft % oneHour) / oneMinute);
  let seconds = Math.floor((timeLeft % oneMinute) / oneSecond);

  daysInput.value = (days >= 10) ? days : '0' + days;
  hoursInput.value = (hours >= 10) ? hours : '0' + hours;
  minutesInput.value = (minutes >= 10) ? minutes : '0' + minutes;
  secondsInput.value = (seconds >= 10) ? seconds : '0' + seconds;
}, 1000);
