let arr1=["fidan","red","programmer","sport","smile"];
let arr2=["someone","sport","red","doctor","black"];

let newarr=[];

function same_words(param1,param2){
    for(let i = 0 ; i < arr1.length ; i++) {
        for(let j = 0 ; j < arr2.length ; j++) {
            if(arr1[i] == arr2[j]) {
                newarr.push(arr1[i]);
            }
        }
    }
    console.log(newarr)
}

same_words(arr1,arr2)