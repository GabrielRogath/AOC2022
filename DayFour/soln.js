const fs = require('fs');
const input = fs.readFileSync("D:\\Advent-Of-Code2022\\DayFour\\input.txt", { encoding: "utf-8" }).split("\r\n");

function partOne(){

    let totalCounter = 0;

    for(let x=0; x<input.length; x++){

       let mySplitted= input[x].split(",");
       let firstPartSplitted = mySplitted[0];
       let secondPartSplitted = mySplitted[1];
      
       let section1Array = firstPartSplitted.split("-");
       let section2Array = secondPartSplitted.split("-");
       
        let leftPart1 = section1Array[0];
        let leftPart2 = section1Array[1];
        let rightPart1 = section2Array[0];
        let rightPart2 = section2Array[1];
       
        let firstSectionArray = [];
        let secondSectionArray = [];

        //populate the first Section Array
        let lengthFirstSection = leftPart2 - leftPart1;
        let startingPoint = parseInt(leftPart1);

        for(let f=0; f<=lengthFirstSection; f++){
            firstSectionArray.push(startingPoint);
            startingPoint++;
        }
        //populate the second Section Array
        let lengthSecondSection = rightPart2 - rightPart1;
        let startingPoint2 = parseInt(rightPart1);
        for(let s=0; s<=lengthSecondSection; s++){
            secondSectionArray.push(startingPoint2);
            startingPoint2++;
        }

        //This is important due to the fact some arrays are equal so if it the case 
        //there's no need to go to below loop we just add out counter and proceed to another.
        if (JSON.stringify(firstSectionArray) === JSON.stringify(secondSectionArray)) {
            totalCounter++;
        }
        else{
        //we loop in first array to see if it's all element are contained in second array
       
        let check1 = false;
        for(let arr1=0; arr1<firstSectionArray.length; arr1++){
          let answer =  secondSectionArray.includes(firstSectionArray[arr1]);
          if(answer == false){
            check1 = false;
            break;
          }else{
            check1 = true;
          }
          if(firstSectionArray[firstSectionArray.length -1] == firstSectionArray[arr1] && check1 == true){
            totalCounter++;
            check1 = false;
          }
        }

        //we loop in Second array to see if it's all element are contained in first array
        let check2 = false;
        for(let arr2=0; arr2<secondSectionArray.length; arr2++){
          let answer2 =  firstSectionArray.includes(secondSectionArray[arr2]);
          if(answer2 == false){
            check2 = false;
            break;
           }else{
            check2 = true;
          }
          if(secondSectionArray[secondSectionArray.length -1] == secondSectionArray[arr2] && check2 == true){
            totalCounter++;
            check2 = false;
          }
        }

        //break;
        
    }
}

    console.log(totalCounter);

}

partOne();


function partTwo(){

    let totalCounter = 0;
    for(let x=0; x<input.length; x++){

        let mySplitted= input[x].split(",");
        let firstPartSplitted = mySplitted[0];
        let secondPartSplitted = mySplitted[1];
       
        let section1Array = firstPartSplitted.split("-");
        let section2Array = secondPartSplitted.split("-");
        
         let leftPart1 = section1Array[0];
         let leftPart2 = section1Array[1];
         let rightPart1 = section2Array[0];
         let rightPart2 = section2Array[1];
        
         let firstSectionArray = [];
         let secondSectionArray = [];
 
         //populate the first Section Array
         let lengthFirstSection = leftPart2 - leftPart1;
         let startingPoint = parseInt(leftPart1);
 
         for(let f=0; f<=lengthFirstSection; f++){
             firstSectionArray.push(startingPoint);
             startingPoint++;
         }
         //populate the second Section Array
         let lengthSecondSection = rightPart2 - rightPart1;
         let startingPoint2 = parseInt(rightPart1);
         for(let s=0; s<=lengthSecondSection; s++){
             secondSectionArray.push(startingPoint2);
             startingPoint2++;
         }

         for(let ov=0; ov<firstSectionArray.length; ov++){

            let ans = secondSectionArray.includes(firstSectionArray[ov]);

            if(ans == true){
                totalCounter++;
                break;
            }

         }
    }

    console.log(totalCounter);

}

partTwo();