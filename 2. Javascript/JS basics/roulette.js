// roulette

const testArray = [0,1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22,23,24,25,26,27,28,29,30,31,
                    32,33,34,35,36];
const round = 50;
const luckyNumber = 23;
let randomNumber = Math.floor(Math.random() * 37);

function getRandomFiftyRound(){
    for (let index = 0; index < round; index++) {
        const element = round;
        while(element <= round) {
            testArray.forEach(element => {
                if (element == luckyNumber) {
                    console.log("23");
                }else{
                    console.log("af");
                }
            });
        }
    }
}
getRandomFiftyRound();

