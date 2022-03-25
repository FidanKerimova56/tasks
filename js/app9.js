function letter(){
    let word=prompt('Soz daxil edin:');

    for(let i = 0; i < word.length; i++){  
        let count=0;
        for(let j = 0; j < word.length; j++){

            if(word[i] === word[j]){
                count = count + 1;
            }
        }
        if(count > 0){
        console.log(word[i] + ' herfi :' + count+" defe tekrarlanib");
        }
    }
}

letter();
