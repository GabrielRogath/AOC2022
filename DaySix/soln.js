const fs = require('fs');
const input = fs.readFileSync("D:\\Advent-Of-Code2022\\DaySix\\input.txt", { encoding: "utf-8" })
.replace(/\r/g, "");


function partOne(){
   
    let counter = 0;
    let myArray = [];
    for(let x =0; x<input.length; x++){

        if(myArray.length < 3){
            counter++;
            myArray.push(input[x]);
        }
        
        if(myArray.length == 3){
         
              //let newArr =  myArray =  myArray.filter( (value, index) => index != value);
               let newArr = myArray.filter((item, index) => myArray.indexOf(item) === index);

                if(myArray.includes(input[x+1]) === false  && newArr.length == 3){
                    myArray.push(input[x+1]);
                    counter++;
                    break;

                }else{myArray.shift(); newArr.length =0;}
            }          
    }

    console.log(counter);
    //console.log(myArray);

}

partOne();

function partTwo(){
    let counter = 0;
    let myArray = [];
    for(let x =0; x<input.length; x++){

        if(myArray.length < 13){
            counter++;
            myArray.push(input[x]);
          
        }

        if(myArray.length == 13){
         
             let newArr = myArray.filter((item, index) => myArray.indexOf(item) === index);

              if(myArray.includes(input[x+1]) === false  && newArr.length == 13){
                  myArray.push(input[x+1]);
                  counter++;
               
                  break;

              }else{myArray.shift(); newArr.length =0;}
          }          

    }
    console.log(counter);
   // console.log(myArray);
}

partTwo();