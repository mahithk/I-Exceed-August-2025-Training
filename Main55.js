let myDate = new Date('October 26, 2025');
let month = myDate.getMonth() + 1;
let day = myDate.getDate();
let year = myDate.getFullYear();

let result = '';

if (month === 10) {
  result = `The month is October.`;
} else if (month < 10) {
  result = `The month is before October.`;
} else {
  result = `The month is after October.`;
}

if (day > 20) {
  result += ` The day is after the 20th.`;
}

if (year === 2025 && month === 10 && day === 26) {
  result += ` It's exactly my birthday!`;
}

console.log(result);
