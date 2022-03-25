let numbers = [5,7,0,4,8,6];
let sum = 0;
function findAverageNum(arr){
    numbers.forEach(eachNum =>{
        sum += eachNum;
    })

    console.log(sum/numbers.length)
}

findAverageNum(numbers)