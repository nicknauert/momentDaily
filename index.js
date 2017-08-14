const moment = require('moment');
const chalk = require('chalk');
let timeToNow = parseInt(moment().startOf('day').fromNow(true));
let hours = moment().format('HH');
let minutes = moment().format('mm');
let seconds = moment().format('ss');
let totalSec = (hours * 60 * 60) + (minutes * 60) + seconds;

console.log('It is ' + chalk.keyword('lightblue')(moment().format("dddd, MMM Do YYYY, h:mm:ss a")) + '.');
console.log('It is the ' + chalk.keyword('pink')(moment().format('DDDo')) + " day of the year.");
console.log('It is ' + chalk.keyword('aqua')(totalSec) + ' seconds into the day.');
function dst(){
  if(moment().isDST() == true){
    console.log("It " + chalk.keyword('green')('is') + " during Daylight Savings Time")
  }
  else {
    console.log("It " + chalk.keyword('green')('is not') + " during Daylight Savings Time")
  }
}
dst();

function leapYear(){
  if(moment().isLeapYear()==true){
    console.log("It " + chalk.keyword('red')('is') + " a leap year")
  }
  else {
    console.log("It " + chalk.keyword('red')('is not') + " a leap year")
  }
}
leapYear();
