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

const userName = prompt("Podaj swoje imie...");

function fixName(userName) {
    if (!userName || !userName.trim()) return null;
    // let userNameLowerCase = userName.toLowerCase();
    // let firstUpperChar = userName.substring(0,1).toUpperCase();
    // return firstUpperChar + userNameLowerCase.slice(1);

    userName = userName.toLowerCase();
    return userName[0].toUpperCase() + userName.slice(1);


}
const userNameFixed = fixName(userName);

if (userNameFixed === null) { console.log(`nic nie wpisano`) }
else { console.log(`Imie ${userNameFixed} rozpoczyna sie od litery ${userNameFixed[0]}`); }

