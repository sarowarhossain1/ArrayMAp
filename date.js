//let newDate = new Date(year, month, date, hour, minutes, second, miliseconds)
let newDate = new Date(2023, 11, 10, 9, 3, 2,40)
console.log(newDate)

let yr = newDate.getFullYear();
console.log("This Year is",yr);

let month = newDate.getMonth();
console.log("This Month is",month);

let date = newDate.getDate();
console.log("This Date is",date);

let hour = newDate.getHours();
console.log("This Hours is", hour) ;