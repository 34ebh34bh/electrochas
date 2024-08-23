// const dateInfo = document.getElementById('dateInfo');
// const timeInfo = document.getElementById('timeInfo');
// const stringRepresentation = document.getElementById('stringRepresentation');
// 
// const weekDays = [
    // 'Воскресенье',
    // 'Понедельник',
    // 'Вторник',
    // 'Среда',
    // 'Четверг',
    // 'Пятница',
    // 'Суббота'
// ];
// 
// const months = [
    // "Январь",
    // "Февраль",
    // "Март",
    // "Апрель",
    // "Май",
    // "Июнь",
    // "Июль",
    // "Август",
    // "Сентябрь",
    // "Октябрь",
    // "Ноябрь",
    // "Декабрь"
// ];
// 
// function getDate() {
    // let date = new Date();
    // dateInfo.textContent = date.toLocaleDateString();
    // timeInfo.textContent = date.toLocaleTimeString();
    // stringRepresentation.textContent = getStringRepresentation(date);
// 
// }
// 
// function getStringRepresentation(date) {
    // const monthNumber = date.getMonth();
    // const dayNumber = date.getDay();
    // const month = months[monthNumber];
    // const day = weekDays[dayNumber];
    // return month + ' ' + day
// }
// 
// setInterval(getDate, 1000);

const dateInfo = document.getElementById('date');
const timeInfo = document.getElementById('time');
const stringRepresentation = document.getElementById('stringRepresentation');

let weekDays = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
];

function setDate() {
    const date = new Date();
    dateInfo.textContent = date.toLocaleDateString();
    timeInfo.textContent = date.toLocaleTimeString();
    stringRepresentation.textContent = getstringRepresentation(date);
}

function getstringRepresentation(date) {
   let monthNumber = date.getMonth();
   let dayNumber = date.getDay();
   const day = weekDays[dayNumber];
   const month = months[monthNumber];
   return day + ' ' + month;
}

setInterval(setDate, 1000);

// let dateInfo = document.getElementById('date');
// let timeInfo = document.getElementById('time');
// let stringRapestation = document.getElementById('stringRapestation'); 

// let weekDays = [
//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота"
// ];

// let months = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь"
// ];

// function setDate() {
//     let date = new Date();
//     dateInfo.textContent = date.toLocaleDateString();
//     timeInfo.textContent = date.toLocaleTimeString();
//     stringRapestation.textContent = getStringRepresentation(date);
// }

// function getStringRepresentation(date) {
//     const dayNumber = date.getDate();
//     const monthNumber = date.getMonth(); 
//     const day = weekDays[dayNumber];
//     const month = months[monthNumber];
//     return month + ' ' + day;
// }

// setInterval(setDate, 1000);