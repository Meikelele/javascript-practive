const input = prompt("Podaj jakis input...");

function countWord(input) {
    if (!input) {
        return null;
    }

    const count = input.trim().split(" ").length;
    return count;
}

const count = countWord(input);

if (count === null) {
    console.log("Nie mam co liczyć");
  } else {
    console.log(`Tekst "${input}" składa się z ${count} ${count === 1 ? "wyrazu" : "wyrazów"}`);
  }