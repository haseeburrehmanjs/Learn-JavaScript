// toLowerCase
// toUpperCase
// length
// charAt
// indexOf
// slice
// replace
// replaceall
// split


// ====== STRINGS METHOD =====

// 1. Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable titled
// fullName. Greet the user using his full name

// let fName = prompt('Enter first Name!')
// let lName = prompt('Enter last Name!')
// let fullName = fName + lName
// console.log(fullName);

// const fName = prompt('enter first name')
// const lName = prompt('enter first name')
// const finalName = fName + lName
// console.log(finalName);



// =====> COMPLETEED TASK!

// 2. Write a program to take a user input about his favorite mobile
// phone model. Find and display the length of user input in your
// browser.

// let userName = 'Haseeb Ur Rehman'
// let userLenght = userName.length
// console.log(userLenght);


// const userName = prompt('tell me your favirote mobile')
// const length = userName.length
// console.log(length);


// =====> COMPLETEED TASK!

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

// let countryName = 'Pakistan'
// let check = countryName.indexOf('n')
// console.log(check);

// const countryName = 'pakistani'
// const findIndex = countryName.indexOf('n')
// console.log(findIndex);


// =====> COMPLETEED TASK!

// 4. Write a program to find the last index of letter “l” in the word
// “Hello World” and display the result in your browser.

// let user = 'Hello World'
// console.log(user.length);
// console.log(user.lastIndexOf());

// const user =  'hello world'
// const checkUser = user.lastIndexOf('l')
// console.log(checkUser);


// =====> COMPLETEED TASK!

// 5. Write a program to find the character at 3rd index in the word
// “Pakistani” and display the result in your browser.

// let countryName = 'Pakistan'
// let x = countryName.charAt(3)
// console.log(x);

// const countryName = 'pakistan'
// const x = countryName.charAt(5)
// console.log(x);

// =====> COMPLETEED TASK!

// 6. Repeat Q1 using string concat() method.

// let fName = prompt('Enter first Name!')
// let lName = prompt('Enter last Name!')
// let fullName = fName.concat(lName)
// console.log(fullName);

// const myName = 'haseeb'
// const Lname = ' ur rehman'
// const finalName = myName.concat(Lname)
// console.log(finalName);

// =====> COMPLETEED TASK!

// 7. Write a program to replace the “Hyder” to “Islam” in the word
// “Hyderabad” and display the result in your browser.

// let City = 'Hyderbad'
// let x = City.replace("Hyder", "Islam")
// console.log(x);

// const city = 'hydrabad'
// const finalCity = city.replace('hydra', 'islam')
// console.log(city);
// console.log(finalCity);


// =====> COMPLETEED TASK!

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.;

// let pragraph = '“Ali and Sami are best friends. They play cricket and football together.”'
// let change = pragraph.replaceAll('and', '&')
// document.write(change)

// const  pragraph = '“Ali and Sami are best friends. They play cricket and football together.”'
// const finalSentace = pragraph.replaceAll('and', '$')
// console.log(pragraph);
// console.log(finalSentace);

// =====> COMPLETEED TASK!

// 9. Write a program that converts a string “472” to a number 472.
// Display the values & types in your browser.

// let Number = '786';
// document.write(typeof(Number))
// let num = +Number;
// document.write(typeof(num))

// const myNumber = '786'
// const convertNumber = +myNumber
// console.log(typeof(convertNumber));
// console.log(typeof(myNumber));

// =====> COMPLETEED TASK!

// 10. Write a program that take a URL as user input in the
// following format: (www.facebook.com / www.yahoo.com ).
// Extract the domain name & show in your browser.

// let Url = "www.haseeb.com"
// let ubdateUrl = Url.slice(4,)
// document.write(ubdateUrl)


// const Url = 'www.haseeburrehmanjs.com'
// const FinalUrl = Url.slice(4)
// console.log(Url);
// console.log(FinalUrl);


// =====> COMPLETEED TASK!

// 11. Write a program that takes user input. Convert and show the
// input in capital letters.

// let dryFruits = "peanuts";
// document.write(dryFruits.toUpperCase())

// const FavVegitable = prompt('enter fav vagetable')
// const finalWord = FavVegitable.toLocaleUpperCase()
// console.log(finalWord);

// console.log(new Date);


// =====> COMPLETEED TASK!

// 12. Write a program that takes user input. Convert and show the
// input in small letters.

// let SimOne = 'ZONG 4G'
// console.log(SimOne.toLowerCase());

// =====> COMPLETEED TASK!

// 13. Write a program that takes user input. Convert and show the
// input in title case

// let userInput = prompt('Which Computer language are You Learn Now!')
// document.write(userInput.toLocaleUpperCase())

// =====> COMPLETEED TASK!

// 14. Write a program that converts the variable num to string.
//  var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let numOne = 35.36;
// let ubdate = numOne.(2,)
// console.log(ubdate);

const number = 35.36
const finalNumber = number.toString()
const result = finalNumber.split('.')
const finalResult = result.toString()
console.log(finalResult);


// let numTwo = numOne.slice()
// document.write(numTwo)

// =====> NOT COMPLETEED TASK! XXXXXXXXXXXXXXXX

// 15. Write a program to display the value of x in your browser if a=”3”
// and b=”3”?

// let a = '3'
// let b = '3'
// document.write(`a is = ${a}`)
// document.write(`b is = ${b}`)
// document.write(`a + b = ${a+b}`)

// =====> COMPLETEED TASK!

// 16. Write a program to display the value of y in your browser if a=”3”
// and b=”3”?

// let a = 3;
// let b = 3;
// let y = a - b;
// document.write(`a is ${a}`)
// document.write(`b is ${b}`)
// document.write(`a - b = ${a - b}` )

// =====> COMPLETEED TASK!

// 18. You have an array
//  A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.
// Note: Perform case insensitive search. Whether the user enters
// cookie, Cookie, COOKIE or coOkIE, program should inform
// about its availability. Example:

// let userInput = prompt('What do you Want!')
// let a = ['cake', 'apple', 'pie', 'cookie', 'chips', 'patties']

// if (a.includes(userInput)){
//     let indexValue = a.indexOf(userInput)
//     document.write(`${userInput} is Availble at index of ${indexValue}`);
// }else {
//     document.write(`We Are Sorry ${userInput} is not Availble in Our bekery`);
// }

// =====> COMPLETEED TASK!

// 19. Write a program to take two input strings. Using string
// comparison, tell which string is greater than other or if they
// both are equal.

// let fNumber = +prompt('Enter First Number');
// let sNumber = +prompt('Enter Secound Number');

// if (fNumber >= sNumber){
//     console.log('First Number bara ha!');
// }else {
//     console.log('First Number Chota ha!');
// }

// =====> COMPLETEED TASK!

// 21. Write a program to convert the following string to an array
// using string split method.
//  var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = 'University of Karachi';
// let change = university.split('')
// let ul = document.querySelector('ul')
// console.log(change);
// document.write(change)

// for(let i = 1; i <= change.length; i++){
//     ul.innerHTML += `<li>${change[i]}</li>`
// }

// =====> COMPLETEED TASK!

// 22. Write a program to display the last character of a user input.

// let username = 'haseeb'

// let checklastWord = username.lastIndexOf('b')
// console.log(checklastWord);

// let name = 'haseeb ur rehman'
// let repoCount = 28

// console.log(`my name is ${name} and my repo count is ${repoCount}`);
// let gameName = 'haseeb ur rehman'

// charAt
// indexOf
// length
// substring
// slice
// trim
// replace
// includes
// split

// console.log(gameName.charAt(2)); // ===> from index and check string 
// console.log(gameName.indexOf('s'));// ===> check string position
// console.log(gameName.indexOf('h'));
// console.log(gameName.length);
// console.log(gameName);
// console.log(gameName.toUpperCase());
// console.log(gameName.substring(0, 6));

// let anotherString = gameName.slice(0 , 8)
// console.log(anotherString);
// let newstring = ' haseeb '

// console.log(newstring);
// console.log(newstring.trim()) // ==> for remove string white space
// let url = 'https://haseeb.com/haseeb20%urRehman'
// console.log(url.replace('20%', '-'));
// console.log(url.includes('sunder'));
// console.log(gameName.split(' '));



// let userName = 'haseeb ur rehman'
// let countRepo = 28

// console.log(`My name is ${userName.toUpperCase()} my repo count is ${countRepo}`);
// console.log(userName.charAt(0)) // ==> consa index pr konsa string ha. 
// console.log(userName.indexOf("h")) // ==> string konsa index pr ha.
// console.log(userName.length) // ==> string ya array ki length check krna ka liya
// console.log(userName.substring(10, 16)) // ==> khan sa la kr khan tak chaya

// let newString = userName.slice(7 , 10) // ==> khan sa lakr khan tak chaya 
// console.log(newString);

// let url = 'haseeburrehmanjs.com'
// console.log(url.replace('www', 'https'));

// let newUrl = `https.${url}`
// console.log(newUrl);

// console.log(newUrl.split(''));