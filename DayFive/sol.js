const fs = require('fs');
const input = fs.readFileSync("D:\\Advent-Of-Code2022\\DayFive\\input.txt", { encoding: "utf-8" })
.replace(/\r/g, ""); //removes all \r characters to avoid issues on Windows
//.trim();  // removing whitespace at starting or endeing


function partOne(){

    const [stacks, moves ]= input.split("\n\n");
    
    const stackSplitted = stacks.split("\n");

    const parsedStacks = stackSplitted.map((line) =>
    [...line].filter((value, index) => index % 4 === 1));

    let firstArryColumn = [];
    let secondArryColumn = [];
    let thirdArryColumn = [];
    let fourthArryColumn = [];
    let firthArryColumn = [];
    let sixthArrayColumn = [];
    let sevenArrayColumn = [];
    let eightArrayColumn = [];
    let nineArrayColumn = [];

    for(let x=0; x<parsedStacks.length; x++){

        for(let z= 0; z<parsedStacks[x].length; z++){
            if(z==0){
                firstArryColumn.push(parsedStacks[x][z]);
            }else if(z==1){
                secondArryColumn.push(parsedStacks[x][z]);
            }else if(z==2){
                thirdArryColumn.push(parsedStacks[x][z]);
            }else if(z==3){
                fourthArryColumn.push(parsedStacks[x][z]);
            }else if(z==4){
                firthArryColumn.push(parsedStacks[x][z]);
            }else if(z==5){
                sixthArrayColumn.push(parsedStacks[x][z]);
            }else if(z==6){
                sevenArrayColumn.push(parsedStacks[x][z]);
            }else if(z==7){
                eightArrayColumn.push(parsedStacks[x][z]);
            }else if(z==8){
                nineArrayColumn.push(parsedStacks[x][z]);
            }
        }
    
    }


    //We remove the last elements of the arrays we dont need
    firstArryColumn.pop();
    secondArryColumn.pop();
    thirdArryColumn.pop();
    fourthArryColumn.pop();
    firthArryColumn.pop();
    sixthArrayColumn.pop();
    sevenArrayColumn.pop();
    eightArrayColumn.pop();
    nineArrayColumn.pop();

    const columnOne = firstArryColumn.filter((value, index) => index = value.trim());
    const columnTwo = secondArryColumn.filter((value, index) => index = value.trim());
    const columnThree = thirdArryColumn.filter((value, index) => index = value.trim());
    const columnFour = fourthArryColumn.filter((value, index) => index = value.trim());
    const columnFive = firthArryColumn.filter((value, index) => index = value.trim());
    const columnSix = sixthArrayColumn.filter((value, index) => index = value.trim());
    const columnSeven = sevenArrayColumn.filter((value, index) => index = value.trim());
    const columnEight = eightArrayColumn.filter((value, index) => index = value.trim());
    const columnNine = nineArrayColumn.filter((value, index) => index = value.trim());

    //Now we empty our arrays to give new values
    firstArryColumn.length = 0;
    secondArryColumn.length = 0;
    thirdArryColumn.length = 0;
    fourthArryColumn.length = 0;
    firthArryColumn.length = 0;
    sixthArrayColumn.length = 0;
    sevenArrayColumn.length = 0;
    eightArrayColumn.length = 0;
    nineArrayColumn.length = 0;

    //We give new values to the arrays
    firstArryColumn = [...columnOne];
    secondArryColumn = [...columnTwo];
    thirdArryColumn = [...columnThree];
    fourthArryColumn = [...columnFour];
    firthArryColumn = [...columnFive];
    sixthArrayColumn = [...columnSix];
    sevenArrayColumn = [...columnSeven];
    eightArrayColumn = [...columnEight];
    nineArrayColumn = [...columnNine];

  
    //Split the moves

    let splitedMoves = moves.split("\n");
   
    for(let q=0; q<splitedMoves.length; q++){
        let filt =  splitedMoves[q].split(" ");
        
        let steps = parseInt(filt[1]); 
        let  from = parseInt(filt[3]);
        let  to = parseInt(filt[5]);
      
        if(from == 1){
            let splicedElement = firstArryColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            }

        }else if(from == 2){
            let splicedElement = secondArryColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            }
        }else if(from == 3){
            let splicedElement = thirdArryColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            }
        }else if(from == 4){
            let splicedElement = fourthArryColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            
            }
        }else if(from == 5){
            let splicedElement = firthArryColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            
            }
        }else if(from == 6){
            let splicedElement = sixthArrayColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            
            }
        }else if(from == 7){
            let splicedElement = sevenArrayColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            
            }
        }else if(from == 8){
            let splicedElement = eightArrayColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            
            }
        }else if(from == 9){
            let splicedElement = nineArrayColumn.splice(0, steps);
            switch(to){
                case 1:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firstArryColumn.unshift(splicedElement[e]);
                    }
                    break;
                case 2:
                    for(let e = 0; e<splicedElement.length; e ++){
                        secondArryColumn.unshift(splicedElement[e]); 
                    }         
                    break;
                case 3:
                    for(let e = 0; e<splicedElement.length; e ++){
                        thirdArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 4:
                    for(let e = 0; e<splicedElement.length; e ++){
                        fourthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 5:
                    for(let e = 0; e<splicedElement.length; e ++){
                        firthArryColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 6:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sixthArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 7:
                    for(let e = 0; e<splicedElement.length; e ++){
                        sevenArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 8:
                    for(let e = 0; e<splicedElement.length; e ++){
                        eightArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                case 9:
                    for(let e = 0; e<splicedElement.length; e ++){
                        nineArrayColumn.unshift(splicedElement[e]);
                    }      
                    break;
                default:
                    //
                    break;
            
            }
        }
        
    }

   
    console.log(firstArryColumn[0]);
    console.log(secondArryColumn[0]);
    console.log(thirdArryColumn[0]);
    console.log(fourthArryColumn[0]);
    console.log(firthArryColumn[0]);
    console.log(sixthArrayColumn[0]);
    console.log(sevenArrayColumn[0]);
    console.log(eightArrayColumn[0]);
    console.log(nineArrayColumn[0]);


    console.log("END OF PART ONE")
 

}

partOne();




///In part two you just use the same method as above but,
// you reverse every spliced array that you are going to 
// add to another stack 
// Check inside for loop , that after every if and else if
// the spliced array is reverse first before added to another stack like below

// let splicedElement = firstArryColumn.splice(0, steps);
// splicedElement.reverse(); 

function partTwo(){
    console.log("THE BEGINING OF PART TWO")
     const [stacks, moves ]= input.split("\n\n");
        
      const stackSplitted = stacks.split("\n");
  
      const parsedStacks = stackSplitted.map((line) =>
      [...line].filter((value, index) => index % 4 === 1));
  
      let firstArryColumn = [];
      let secondArryColumn = [];
      let thirdArryColumn = [];
      let fourthArryColumn = [];
      let firthArryColumn = [];
      let sixthArrayColumn = [];
      let sevenArrayColumn = [];
      let eightArrayColumn = [];
      let nineArrayColumn = [];
  
      for(let x=0; x<parsedStacks.length; x++){
  
          for(let z= 0; z<parsedStacks[x].length; z++){
              if(z==0){
                  firstArryColumn.push(parsedStacks[x][z]);
              }else if(z==1){
                  secondArryColumn.push(parsedStacks[x][z]);
              }else if(z==2){
                  thirdArryColumn.push(parsedStacks[x][z]);
              }else if(z==3){
                  fourthArryColumn.push(parsedStacks[x][z]);
              }else if(z==4){
                  firthArryColumn.push(parsedStacks[x][z]);
              }else if(z==5){
                  sixthArrayColumn.push(parsedStacks[x][z]);
              }else if(z==6){
                  sevenArrayColumn.push(parsedStacks[x][z]);
              }else if(z==7){
                  eightArrayColumn.push(parsedStacks[x][z]);
              }else if(z==8){
                  nineArrayColumn.push(parsedStacks[x][z]);
              }
          }
      
      }
  
  
      //We remove the last elements of the arrays we dont need
      firstArryColumn.pop();
      secondArryColumn.pop();
      thirdArryColumn.pop();
      fourthArryColumn.pop();
      firthArryColumn.pop();
      sixthArrayColumn.pop();
      sevenArrayColumn.pop();
      eightArrayColumn.pop();
      nineArrayColumn.pop();
  
      const columnOne = firstArryColumn.filter((value, index) => index = value.trim());
      const columnTwo = secondArryColumn.filter((value, index) => index = value.trim());
      const columnThree = thirdArryColumn.filter((value, index) => index = value.trim());
      const columnFour = fourthArryColumn.filter((value, index) => index = value.trim());
      const columnFive = firthArryColumn.filter((value, index) => index = value.trim());
      const columnSix = sixthArrayColumn.filter((value, index) => index = value.trim());
      const columnSeven = sevenArrayColumn.filter((value, index) => index = value.trim());
      const columnEight = eightArrayColumn.filter((value, index) => index = value.trim());
      const columnNine = nineArrayColumn.filter((value, index) => index = value.trim());
  
      //Now we empty our arrays to give new values
      firstArryColumn.length = 0;
      secondArryColumn.length = 0;
      thirdArryColumn.length = 0;
      fourthArryColumn.length = 0;
      firthArryColumn.length = 0;
      sixthArrayColumn.length = 0;
      sevenArrayColumn.length = 0;
      eightArrayColumn.length = 0;
      nineArrayColumn.length = 0;
  
      //We give new values to the arrays
      firstArryColumn = [...columnOne];
      secondArryColumn = [...columnTwo];
      thirdArryColumn = [...columnThree];
      fourthArryColumn = [...columnFour];
      firthArryColumn = [...columnFive];
      sixthArrayColumn = [...columnSix];
      sevenArrayColumn = [...columnSeven];
      eightArrayColumn = [...columnEight];
      nineArrayColumn = [...columnNine];
  
      //Split the moves
  
      let splitedMoves = moves.split("\n");
     
      for(let q=0; q<splitedMoves.length; q++){
          let filt =  splitedMoves[q].split(" ");
         
          let steps = parseInt(filt[1]); 
          let  from = parseInt(filt[3]);
          let  to = parseInt(filt[5]);
        
          if(from == 1){
              let splicedElement = firstArryColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              }
  
          }else if(from == 2){
              let splicedElement = secondArryColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              }
          }else if(from == 3){
              let splicedElement = thirdArryColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              }
          }else if(from == 4){
              let splicedElement = fourthArryColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              
              }
          }else if(from == 5){
              let splicedElement = firthArryColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              
              }
          }else if(from == 6){
              let splicedElement = sixthArrayColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              
              }
          }else if(from == 7){
              let splicedElement = sevenArrayColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              
              }
          }else if(from == 8){
              let splicedElement = eightArrayColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              
              }
          }else if(from == 9){
              let splicedElement = nineArrayColumn.splice(0, steps);
              splicedElement.reverse();
              switch(to){
                  case 1:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firstArryColumn.unshift(splicedElement[e]);
                      }
                      break;
                  case 2:
                      for(let e = 0; e<splicedElement.length; e ++){
                          secondArryColumn.unshift(splicedElement[e]); 
                      }         
                      break;
                  case 3:
                      for(let e = 0; e<splicedElement.length; e ++){
                          thirdArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 4:
                      for(let e = 0; e<splicedElement.length; e ++){
                          fourthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 5:
                      for(let e = 0; e<splicedElement.length; e ++){
                          firthArryColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 6:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sixthArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 7:
                      for(let e = 0; e<splicedElement.length; e ++){
                          sevenArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 8:
                      for(let e = 0; e<splicedElement.length; e ++){
                          eightArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  case 9:
                      for(let e = 0; e<splicedElement.length; e ++){
                          nineArrayColumn.unshift(splicedElement[e]);
                      }      
                      break;
                  default:
                      //
                      break;
              
              }
          }
          
      }
  
     
      console.log(firstArryColumn[0]);
      console.log(secondArryColumn[0]);
      console.log(thirdArryColumn[0]);
      console.log(fourthArryColumn[0]);
      console.log(firthArryColumn[0]);
      console.log(sixthArrayColumn[0]);
      console.log(sevenArrayColumn[0]);
      console.log(eightArrayColumn[0]);
      console.log(nineArrayColumn[0]);
     
}

partTwo();