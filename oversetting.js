// Hei hei
// Dette scriptet oversetter tall i det binære tallsystemet til titallsystemet
// Den tar det binære tallet, konverterer det til en string, splitter stringen til et array, og reverserer arrayen.
// For loopen går igjennom arrayen og tar 2 opphøyd i posisjonen av hver verdi
// Har lagt til litt logging slik at du ser hva den driver med. Verbose logging rocks!
const prompt = require('prompt-sync')();
let binary = prompt("Hvilket binært tall vil du oversette?");

console.log("Binært tall:", binary, "\n");

let revBinary = binary.split("").reverse();

let decimal = 0;

for (let i = 0; i < revBinary.length; i++) {
    let bit = Number(revBinary[i]);
    console.log("Tallet jeg ser på:", bit);
    if (bit === 1) {
        decimal += Math.pow(2, i);
        console.log("Tallet i titallsystemet er nå", decimal, "\n");
    }
    else {
        console.log("Tallet er 0 og blir derfor ignorert.");
    }
}

console.log(binary, "i binær er", decimal, "i titallsystemet");