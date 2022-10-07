let input1 = prompt("Lütfen isminizi giriniz:");
input2 = input1.toUpperCase();

let name1 = document.querySelector("#myName")

name1.innerHTML = `${input2} `

function showTime() {

    var date = new Date()
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var day = date.getDay();


    if (day == 5) {
        day = "Saturday"
    } else if (day == 4) {
        day = "Friday"
    } else if (day == 3) {
        day = "Thursday"
    } else if (day == 2) {
        day = "Wednesday"
    } else if (day == 1) {
        day = "Tuesday"
    } else if (day == 0) {
        day = "Monday"
    } else if (day == 6) {
        day = "Sunday"
    }

    let clock = document.querySelector("#myClock")
    clock.innerHTML = `${hours}:${min}:${sec} -- ${day} `
}
setInterval(showTime, 1000)