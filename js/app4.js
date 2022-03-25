let numbers = prompt("enter your numbers with spaces");

let eachNumbers = numbers.split(" ");
console.log(eachNumbers);
let newArray=[];
let average;

function array_even_nums(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum = sum + Number(arr[i])
    }

 average = sum/eachNumbers.length;

    console.log("average num is: "+ average);

    arr.forEach(num =>{
        if(num>average){
            newArray.push(num)
        }
    })
    
    console.log(newArray)
}

array_even_nums(eachNumbers);