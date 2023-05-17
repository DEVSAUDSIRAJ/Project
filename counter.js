const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading =  document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");
// Converting hours,minutes,second,days into millisecond
const second = 1000,
minute = 60 * second,
hour = 60 * minute,
day = 24 * hour;

const timerFunction = ()=>{
// Generating current date in mm/dd/yy  
    let now = new Date(),
    dd = String(now.getDate()).padStart(2,"0"),
    mm = String(now.getMonth()).padStart(2,"0"),
    yyyy = now.getFullYear();

// Taking target date from user
    const enteredDay = prompt("Enter Day").padStart(2,"0");
    const enteredMonth = prompt("Enter Month").padStart(2,"0");
    console.log(`${enteredMonth}/${enteredDay}/${yyyy}`);

    now = `${enteredMonth}/${enteredDay}/${yyyy}`;
    let targetDate = `${enteredMonth}/${enteredDay}/${yyyy}`;
// Checking if target date is for next year
    if(now > targetDate){
        console.log(`${enteredMonth}/${enteredDay}/${yyyy+1}`);
        targetDate = `${enteredMonth}/${enteredDay}/${yyyy+1}`;
    }

    const intervalId = setInterval(() => {
// Converting targetdate  into millisecond
        const timer =  new Date(targetDate).getTime();
// Taking current date in millisecond
        const today = new Date().getTime();

// Finding difference between targetdate and today date
        const difference = timer - today;

// Finding left hours minutes seconds
        const leftDay = (Math.floor(difference / day));
        const leftHour = (Math.floor((difference % day)/hour));
        const leftMinute = (Math.floor((difference % hour)/minute));
        const leftSecond = (Math.floor((difference % minute)/second));
// Showing time in DOM
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

// Stopping setInterval after reaching time interval
    if(difference < 0){
        counterTimer.style.display = "none";
        heading.innerText = "Times Up";
        clearInterval(intervalId);
    }

    }, 1000);


}
timerFunction();