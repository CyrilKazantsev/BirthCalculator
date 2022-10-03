let BIRTHDAY;
const form = document.getElementById('form');
function myFunction(event) {
    event.preventDefault();
    alert(document.getElementById("uniqueID").value)
    let BIRTHDAY = document.getElementById("uniqueID").value;
    toString(BIRTHDAY)
    alert(birthdayCalculator(BIRTHDAY))
  }

function birthdayCalculator(birthday) {
    let today = new Date();
    let ddToday = +String(today.getDate()).padStart(2, '0');
    let mmToday = +String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyyToday = today.getFullYear();
    let yy = +birthday.split("-")[0];
    let mm = +birthday.split("-")[1];
    let dd = birthday.split("-")[2];
    let daysInBirthMonth = 32 - new Date(yy, mm-1, 32).getDate();

    let yyyyResult = mm < mmToday ? yyyyToday - yy : yyyyToday - yy - 1;
    let mmResult = mm < mmToday ? mmToday - mm : mmToday - mm + 12;
    mmResult = dd < ddToday ? mmResult : mmResult - 1;
    let ddResult = dd < ddToday ? ddToday - dd : ddToday + (daysInBirthMonth - dd);
    let result = `Вам ${yyyyResult} лет, ${mmResult} месяцев и ${ddResult} дней`;
    return result
    
}
