let numbers = prompt("enter your numbers with spaces");

let eachNumbers = numbers.split(" ");
console.log(eachNumbers);
let newArray=[];
function array_even_nums(arr){
    eachNumbers.forEach(num => {
        if(num%2==0){
            newArray.push(num);
        }
    })
    console.log(newArray)
}

array_even_nums(numbers);





