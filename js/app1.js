let sentence = prompt("enter your sentence");

let splitText = sentence.split(" ")
let count = 0;
for (let i=0; i<splitText.length; i++){
    count++;
}
console.log(count-1);