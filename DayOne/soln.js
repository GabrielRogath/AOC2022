const fs = require('fs');
const input = fs.readFileSync("D:\\Advent-Of-Code2022\\DayOne\\input.txt", { encoding: "utf-8" }).split("\r\n");

function partOne(){
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

partOne();

function partTwo(){

    var count = 0;
    var totalCount = 0;
    var myArry = [];

     for(let x =0; x<input.length; x++){
        if(input[x] == ""){

            totalCount = count;
            myArry.push(totalCount);
            myArry.sort(function(a, b){return b - a});
            count = 0;

        }else{
            var num = parseInt(input[x]);
            count = count + num;
        }
        

     var totalGrandCalories =0;
     for(let y =0; y<3; y++){
        totalGrandCalories = totalGrandCalories + myArry[y];
     }

}

     console.log(totalGrandCalories);

}

partTwo();