const launchStatus = document.querySelector(".wrapper p:first-child");

const dayCard = document.querySelector(".wrapper .days .card");
const dayCardWipe = document.querySelector(".wrapper .days .card .before");
const dayCardText = document.querySelector(".wrapper .days .card span");

const hourCard = document.querySelector(".wrapper .hours .card");
const hourCardWipe = document.querySelector(".wrapper .hours .card .before");
const hourCardText = document.querySelector(".wrapper .hours .card span");

const minuteCard = document.querySelector(".wrapper .minutes .card");
const minuteCardWipe = document.querySelector(".wrapper .minutes .card .before");
const minuteCardText = document.querySelector(".wrapper .minutes .card span");

const secondCard = document.querySelector(".wrapper .seconds .card");
const secondCardWipe = document.querySelector(".wrapper .seconds .card .before");
const secondCardText = document.querySelector(".wrapper .seconds .card span");

const root = document.querySelector(":root");
let b = new Date(new Date().getTime() + Math.floor(Math.random() * 3452347554));
/* This code generates a random date in the future and counts down from there
   Using random generated makes it easy to modify to take a date sent by an api and implement */
function randomDate() { //returns the seconds gap between the current time and the future time
  let a = new Date() //current date and time
  return (b.getTime() - a.getTime())
}



function valueCompute(seconds=randomDate()) { //calcultes the value to be shown in each card (days, hours, minutes, seconds)
  let date = new Date(seconds)
  let daysValue = date.getDate();
  let hoursValue = date.getHours()
  let minutesValue = date.getMinutes()
  let secondValue = date.getSeconds()
  return [secondValue, minutesValue, hoursValue, daysValue]
}
const itemHolder = [{
  text: secondCardText,
  wipe: secondCardWipe
}, {
  text: minuteCardText,
  wipe: minuteCardWipe
  }, {
  text: hourCardText,
  wipe: hourCardWipe
  }, {
  text: dayCardText,
  wipe: dayCardWipe
}]
function valueDisplay(array = valueCompute()) {
  for (let i = 0; i < 4; i++) {
    if (array[i] != parseInt(itemHolder[i].text.innerText)) {
      itemHolder[i].wipe.classList.add('spin')
      setTimeout(() => {
        if (array[i] < 10) {
          itemHolder[i].text.innerText = `0${array[i]}`
          return
        }
        itemHolder[i].text.innerText = array[i];
      }, 200)
      setTimeout(() => {
        itemHolder[i].wipe.classList.remove('spin')
      }, 400)
    }
  }
}
setInterval(() => {
  valueDisplay()
}, 1000)




dayCard.addEventListener('click', () => {
  document.querySelector('.wrapper .days .card .before').classList.toggle('spin')
})
function spinner(element, wipe) {
  wipe.classList.add('spin')
  setTimeout(() => {
    wipe.classList.remove('spin')
  }, 100)
}