const fs = require('fs');
const input = fs.readFileSync("D:\\AOC2022\\Day1\\input.txt", { encoding: "utf-8" }).split("\r\n");

function checkAnswer(){
    var count = 0;
    var totalCount = 0;

     for(let x =0; x<input.length; x++){
        if(input[x] == ""){

            if(totalCount<count){
                totalCount = count;
                count = 0;
            }else{
                count = 0;
            }

        }else{
            var num = parseInt(input[x]);
            count = count + num;
        } 
     }


     console.log(totalCount);
}

checkAnswer();