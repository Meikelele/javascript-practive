// ======================
//         ZADANIE 1
// ======================
// {
//     const input = prompt("Podaj jakis input...");
    
//     function countWord(input) {
//         if (!input) {
//             return null;
//         }
    
//         const count = input.trim().split(" ").length;
//         return count;
//     }
    
//     const count = countWord(input);
    
//     if (count === null) {
//         console.log("Nie mam co liczyć");
//       } else {
//         console.log(`Tekst "${input}" składa się z ${count} ${count === 1 ? "wyrazu" : "wyrazów"}`);
//       }
// }
// ======================
//         ZADANIE 2
// ======================
// {const userName = prompt("Podaj swoje imie...");

// function fixName(userName) {
//     if (!userName || !userName.trim()) return null;
//     // let userNameLowerCase = userName.toLowerCase();
//     // let firstUpperChar = userName.substring(0,1).toUpperCase();
//     // return firstUpperChar + userNameLowerCase.slice(1);

//     userName = userName.toLowerCase();
//     return userName[0].toUpperCase() + userName.slice(1);


// }
// const userNameFixed = fixName(userName);

// if (userNameFixed === null) { console.log(`nic nie wpisano`) }
// else { console.log(`Imie ${userNameFixed} rozpoczyna sie od litery ${userNameFixed[0]}`); }
// }
// ======================
//         ZADANIE 3
// ======================
// { const userFile = prompt("Podaj nazwe pliku wraz z rozserzeniem");
// const returnFile = fileInfo(userFile);

// if (returnFile) {
//     console.log(returnFile);
// } else {
//     console.log("Nie podano rozserzenia z '.'");
// }

// function fileInfo(file) {

//     if (!file.includes(".")) return false;
//     const lastDotindex = file.lastIndexOf(".");

//     return {
//         name: file.slice(0, lastDotindex),
//         extension: file.slice(lastDotindex + 1)
//     };
// }
// }
// ======================
//         ZADANIE 4
// ======================
// function generateID() {
//     //  losowo 20 cyfr liczby i cyfry i inne 
//     const chars = "abcdefghijk1234567890!@#$%^&*()_-";
//     let result = ``;
//     const min = 0;
//     const max = chars.length - 1;


//     for (let i = 0; i < 20; i++) {
//         let rdIndex =  Math.floor(Math.random() * (max - min + 1) + min);
//         result += chars[rdIndex];
//         console.log(result);
//     }

//     return result;
// }
// console.log("🚀 ~ generateID();:", generateID())

// ======================
//         ZADANIE 5
// ======================
// const usernumber = prompt("Prosze podac liczbe...");
// if (usernumber === null) console.log("Anulowano...");
// const number = parseInt(usernumber, 10);
// console.log(printNumbers(number));

// function printNumbers(nr) {
//     let result = ``;
//     for (let i = 1; i <= nr; i++) {
//         result += i;
//     }
//     // console.log(result);
//     return result;
// }

// ======================
//         ZADANIE 6
// ======================
// let name = `Michael`;
// let month = `lipiec`;

// myfunct(name, month);

// function myfunct(name, month) {
//     let monthly = month.toLowerCase();

//     if (typeof month !== 'string') {
//         console.log(`${name} uczy sie JS`);
//         return;
//     }

//     const winter = ['styczen', 'luty', 'marzec'];
//     const spring = ['kwiecien', 'maj', 'czerwiec'];
//     const summer = ['lipiec', 'sierpien', 'wrzesien'];
//     const autumn = ['pazdziernik', 'listopad', 'grudzien'];

//     switch (true) {
//         case (winter.includes(monthly)):
//             console.log(`${name} jezdzi na sankach`);
//             break;
//         case (spring.includes(monthly)):
//             console.log(`${name} chodzi po kaluzach`);
//             break;
//         case (summer.includes(monthly)):
//             console.log(`${name} opala sie`);
//             break;
//         case (autumn.includes(monthly)):
//             console.log(`${name} zbiera liscie`);
//             break;
//         default:
//             console.log(`${name} uczy sie JS`);
//     }

//     console.log(2+20);

// }

// ======================
//         ZADANIE 7
// ======================
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}















