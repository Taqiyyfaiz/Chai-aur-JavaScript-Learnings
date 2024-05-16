// To Write String
const name = "Taqiyy Faiz"
const repoCount = 10


// console.log(name +  repoCount + " value");


// ???
console.log('Hello my name is ${name} and my repo Count is ${repoCount}');


// Another Methods to Write the String
const gameName = new String('Dream-Cricket-com')
console.log(gameName[0]);
console.log(gameName.____proto___);


// To check the length of the String (length)
console.log(gameName.length); 


// To Make a String into UPPERCASE (touppercase) 
console.log(gameName.toUpperCase()); 


//  to see the character in which position (charAt)
console.log(gameName.charAt(2));


// to check the character in which position (indexof)
console.log(gameName.indexOf('t'));


// methods to wrtie strings

// It wil show you the 1st 6 Alphabet
const newString = gameName.substring(-3, 6)
console.log(newString);

// It wil show you the reverse  Alphabet
const anotherString = gameName.slice(-3, 6)
console.log(anotherString);

const newStringOne = "     Taqiyy      "
console.log(newStringOne);
// Trim will remove the starting space and last ending space
console.log(newStringOne.trim());

// url.remove is used to remove and change the url
const url = "https://Faiz.com/Taqiyy%20Faiz"
console.log(url.replace('%20', '_')); 

// to check the string in url is available or not
console.log(url.includes('Faiz'));


// to split the string 
console.log(gameName.split('-'));