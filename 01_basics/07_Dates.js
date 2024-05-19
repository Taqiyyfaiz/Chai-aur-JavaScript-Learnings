// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTimezoneOffset());
// console.log(typeof myDate);

// Method 1
let CreatedDate = new Date(2025, 0, 23)
// console.log(CreatedDate.toDateString());

let NewCreatedDate = new Date("2024-01-18")
// console.log(NewCreatedDate.toLocaleDateString());

// specially if you want to design the quizes,polls in this situation mostly we will use TimeStamp 
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// if uou want take or compare with miliseconds for ex: Airbnb where we book hotel Dates this is where this concept applies
// console.log(NewCreatedDate.getTime());
// to convert in seconds
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

// to get year , month...etc  just like calender or Time...

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDate());

// remember this line ti might be helpfull and intresting to define dates and times zone
// Shortcut key : Crtl+Space
newDate.toLocaleString('default',{weekday: "short"})
console.log(newDate);