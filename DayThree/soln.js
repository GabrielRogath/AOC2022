
const fs = require('fs');
const input = fs.readFileSync("D:\\Advent-Of-Code2022\\DayThree\\input.txt", { encoding: "utf-8" }).split("\r\n");

function partOne(){

    var count = 0;

    for(let x=0; x<input.length; x++){

        let myItemPosition = input[x];
        var myLength = myItemPosition.length;
        let firstPart = myItemPosition.slice(0, myLength/2);
        let seconPart = myItemPosition.slice(myLength/2);

       

        let copyArryFirstPart = [...firstPart];
        let copyArrySecondPart = [...seconPart];

        copyArryFirstPart.forEach(insider)

        function insider(item){
            for(let q=0; q<copyArrySecondPart.length; q++){
                if(copyArrySecondPart[q]== item){
                    copyArrySecondPart = copyArrySecondPart.filter(x => x !== item);

                    switch(item){

                    case "a": count = count + 1;
                        break;
                    case "b": count = count + 2;
                        break;
                    case "c": count = count + 3;
                        break;
                    case "d": count = count + 4;
                        break;
                    case "e": count = count + 5;
                        break;
                    case "f": count = count + 6;
                        break;
                    case "g": count = count + 7;
                        break;
                    case "h": count = count + 8;
                        break;
                    case "i": count = count + 9;
                        break;
                    case "j": count = count + 10;
                        break;
                    case "k": count = count + 11;
                        break;
                    case "l": count = count + 12;
                        break;
                    case "m": count = count + 13;
                        break;
                    case "n": count = count + 14;
                        break;
                    case "o": count = count + 15;
                        break;
                    case "p": count = count + 16;
                        break;
                    case "q": count = count + 17;
                        break;
                    case "r": count = count + 18;
                        break;
                    case "s": count = count + 19;
                        break;
                    case "t": count = count + 20;
                        break;
                    case "u": count = count + 21;
                        break;
                    case "v": count = count + 22;
                        break;
                    case "w": count = count + 23;
                        break;
                    case "x": count = count + 24;
                        break;
                    case "y": count = count + 25;
                        break;
                    case "z": count = count + 26;
                        break;


                    case "A": count = count + 27;
                        break;
                    case "B": count = count + 28;
                        break;
                    case "C": count = count + 29;
                        break;
                    case "D": count = count + 30;
                        break;
                    case "E": count = count + 31;
                        break;
                    case "F": count = count + 32;
                        break;
                    case "G": count = count + 33;
                        break;
                    case "H": count = count + 34;
                        break;
                    case "I": count = count + 35;
                        break;
                    case "J": count = count + 36;
                        break;
                    case "K": count = count + 37;
                        break;
                    case "L": count = count + 38;
                        break;
                    case "M": count = count + 39;
                        break;
                    case "N": count = count + 40;
                        break;
                    case "O": count = count + 41;
                        break;
                    case "P": count = count + 42;
                        break;
                    case "Q": count = count + 43;
                        break;
                    case "R": count = count + 44;
                        break;
                    case "S": count = count + 45;
                        break;
                    case "T": count = count + 46;
                        break;
                    case "U": count = count + 47;
                        break;
                    case "V": count = count + 48;
                        break;
                    case "W": count = count + 49;
                        break;
                    case "X": count = count + 50;
                        break;
                    case "Y": count = count + 51;
                        break;
                    case "Z": count = count + 52;
                        break;
                        default:
                        count = count + 0;
                    }

                }
            }
            
        }
          
        
    }

    console.log(count);

    
}

partOne();


function partTwo(){
    let count = 0;
    for(let a=0; a<input.length; a = a +3){

        let firstRucksack = input[a];
        let secondRucksack = input[a+1];
        let thirdRucksack = input[a+2];

        let arrFirstRucksack = [...firstRucksack];
        let arrSeconRucksack = [...secondRucksack];
        let arrThirdRucksack = [...thirdRucksack];

        for(let x= 0; x<arrFirstRucksack.length; x++){

            for(let y= 0; y<arrSeconRucksack.length; y++){
                if(arrFirstRucksack[x]=== arrSeconRucksack[y]){
                    for(let z=0; z<arrThirdRucksack.length; z++){
                        if(arrFirstRucksack[x] && arrSeconRucksack[y] === arrThirdRucksack[z]){

                            //Now we will get the uniqe value of bagde item
                            switch(arrFirstRucksack[x]){

                                case "a": count = count + 1;
                                    break;
                                case "b": count = count + 2;
                                    break;
                                case "c": count = count + 3;
                                    break;
                                case "d": count = count + 4;
                                    break;
                                case "e": count = count + 5;
                                    break;
                                case "f": count = count + 6;
                                    break;
                                case "g": count = count + 7;
                                    break;
                                case "h": count = count + 8;
                                    break;
                                case "i": count = count + 9;
                                    break;
                                case "j": count = count + 10;
                                    break;
                                case "k": count = count + 11;
                                    break;
                                case "l": count = count + 12;
                                    break;
                                case "m": count = count + 13;
                                    break;
                                case "n": count = count + 14;
                                    break;
                                case "o": count = count + 15;
                                    break;
                                case "p": count = count + 16;
                                    break;
                                case "q": count = count + 17;
                                    break;
                                case "r": count = count + 18;
                                    break;
                                case "s": count = count + 19;
                                    break;
                                case "t": count = count + 20;
                                    break;
                                case "u": count = count + 21;
                                    break;
                                case "v": count = count + 22;
                                    break;
                                case "w": count = count + 23;
                                    break;
                                case "x": count = count + 24;
                                    break;
                                case "y": count = count + 25;
                                    break;
                                case "z": count = count + 26;
                                    break;
            
            
                                case "A": count = count + 27;
                                    break;
                                case "B": count = count + 28;
                                    break;
                                case "C": count = count + 29;
                                    break;
                                case "D": count = count + 30;
                                    break;
                                case "E": count = count + 31;
                                    break;
                                case "F": count = count + 32;
                                    break;
                                case "G": count = count + 33;
                                    break;
                                case "H": count = count + 34;
                                    break;
                                case "I": count = count + 35;
                                    break;
                                case "J": count = count + 36;
                                    break;
                                case "K": count = count + 37;
                                    break;
                                case "L": count = count + 38;
                                    break;
                                case "M": count = count + 39;
                                    break;
                                case "N": count = count + 40;
                                    break;
                                case "O": count = count + 41;
                                    break;
                                case "P": count = count + 42;
                                    break;
                                case "Q": count = count + 43;
                                    break;
                                case "R": count = count + 44;
                                    break;
                                case "S": count = count + 45;
                                    break;
                                case "T": count = count + 46;
                                    break;
                                case "U": count = count + 47;
                                    break;
                                case "V": count = count + 48;
                                    break;
                                case "W": count = count + 49;
                                    break;
                                case "X": count = count + 50;
                                    break;
                                case "Y": count = count + 51;
                                    break;
                                case "Z": count = count + 52;
                                    break;
                                    default:
                                    count = count + 0;
                                }
                            
                            //Now we will trim our first array not to have duplicate element to iteraract with
                            arrFirstRucksack.forEach(myFunction)
                            function myFunction(){
                                let item = arrFirstRucksack[x];
                                arrFirstRucksack = arrFirstRucksack.filter(t => t !== item);
                            }
                            //End of trimming our first array.
                    break;
                        }
                    }
                }
            }
        }
    }

    console.log(count);
}

partTwo();