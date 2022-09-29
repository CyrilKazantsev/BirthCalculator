const BIRTHDAY = '14.05.2000';
let birthdayCalculator = function(birthday) {
    let today = new Date();
    let ddToday = +String(today.getDate()).padStart(2, '0');
    let mmToday = +String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyyToday = today.getFullYear();
    let dd = +BIRTHDAY.split(".")[0];
    let mm = +BIRTHDAY.split(".")[1];
    let yy = BIRTHDAY.split(".")[2];
    let daysInBirthMonth = 32 - new Date(yy, mm-1, 32).getDate();

    let yyyyResult = mm < mmToday ? yyyyToday - yy : yyyyToday - yy - 1;
    let mmResult = mm < mmToday ? mmToday - mm : mmToday - mm + 12;
    mmResult = dd < ddToday ? mmResult : mmResult - 1;
    let ddResult = dd < ddToday ? ddToday - dd : ddToday + (daysInBirthMonth - dd);
    let result = `Вам ${yyyyResult} лет, ${mmResult} месяцев и ${ddResult} дней`;
    return result
    
}
const age = birthdayCalculator(BIRTHDAY);
console.log(age) 