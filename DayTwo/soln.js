
const fs = require('fs');
const input = fs.readFileSync("D:\\Advent-Of-Code2022\\DayTwo\\input.txt", { encoding: "utf-8" }).split("\r\n");

function partOne(){

    var scores = 0;
    let totalScores = 0;
    for(let x =0; x<input.length; x++){
        var elemnt = input[x];
        var firstPos = elemnt.slice(0, 1); // elemnt[0];
        var seconPos = elemnt[2];// elemnt.slice(2, 3);  

        if(seconPos == 'X'){
            //rocky choice. Scores 1
            if(firstPos == 'A'){
                scores = 3 + 1;
                totalScores = totalScores + scores;

            }else if(firstPos == 'B'){
                scores =  1;
                totalScores = totalScores + scores;

            }else if(firstPos == 'C'){
                scores = 6 + 1;
                totalScores = totalScores + scores;

            }

        }else if(seconPos == 'Y'){
            //paper choice. Scores 2
            if(firstPos == 'A'){
                scores = 6 + 2;
                totalScores = totalScores + scores;

            }else if(firstPos == 'B'){
                scores = 3 + 2;
                totalScores = totalScores + scores;

            }else if(firstPos == 'C'){
                scores = 2;
                totalScores = totalScores + scores;
                
            }

        }else if(seconPos == 'Z'){
            //Scissors choice. Scores 3
            if(firstPos == 'A'){
                scores = 3;
                totalScores = totalScores + scores;

            }else if(firstPos == 'B'){
                scores = 6 + 3;
                totalScores = totalScores + scores;

            }else if(firstPos == 'C'){
                scores = 3 + 3;
                totalScores = totalScores + scores;
                
            }

        }
    }

    console.log(totalScores);
}

partOne();

function partTwo(){

    var scores = 0;
    let totalScores = 0;
    for(let x =0; x<input.length; x++){
        var elemnt = input[x];
        var firstPos = elemnt.slice(0, 1); // elemnt[0];
        var seconPos = elemnt[2];// elemnt.slice(2, 3);  

        if(seconPos == 'X'){
            //I need to lose
            if(firstPos == 'A'){
                scores = 3 + 0;
                totalScores = totalScores + scores;
            }else if(firstPos == 'B'){
                scores =  1 + 0;
                totalScores = totalScores + scores;
            }else if(firstPos == 'C'){
                scores = 2 + 0;
                totalScores = totalScores + scores;
            }

        }else if(seconPos == 'Y'){
            //I need to Draw
            if(firstPos == 'A'){
                scores = 1 + 3;
                totalScores = totalScores + scores;
            }else if(firstPos == 'B'){
                scores = 2 + 3;
                totalScores = totalScores + scores;
            }else if(firstPos == 'C'){
                scores = 3 + 3;
                totalScores = totalScores + scores;
            }

        }else if(seconPos == 'Z'){
            //I need to win
            if(firstPos == 'A'){
                scores = 2 + 6;
                totalScores = totalScores + scores;
            }else if(firstPos == 'B'){
                scores = 3 + 6;
                totalScores = totalScores + scores;
            }else if(firstPos == 'C'){
                scores = 1 + 6;
                totalScores = totalScores + scores;
            }

        }
    }

     console.log(totalScores);

}


partTwo();