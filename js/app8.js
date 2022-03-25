let words = ["fidan","red","fake","sport","task","flowers"];
let newArray=[];
function myFunction(param1,letter){
    for(let i=0; i<param1.length; i++){
       
            if(param1[i][0]==letter){
                newArray.push(param1[i])
            }
        
    }
    console.log(newArray)
}

myFunction(words,"f")