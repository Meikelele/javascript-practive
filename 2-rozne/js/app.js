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

function generateID() {
    //  losowo 20 cyfr liczby i cyfry i inne 
    const chars = "abcdefghijk1234567890!@#$%^&*()_-";
    let result = ``;
    const min = 0;
    const max = chars.length - 1;


    for (let i = 0; i < 20; i++) {
        let rdIndex =  Math.floor(Math.random() * (max - min + 1) + min);
        result += chars[rdIndex];
        console.log(result);
    }

    return result;
}
console.log("🚀 ~ generateID();:", generateID())
