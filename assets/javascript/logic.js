// global variables

let targetScore = 0;
let userScore = 0;
let wins = 0;
let losses = 0;

var crystal = {
    
    purple:{
        name: "purple",
        value: 0,
    },

    blue:{
        name: "blue",
        value: 0,
    },

    red:{
        name: "red",
        value: 0,
    },

    green:{
        name: "green",
        value: 0,
    }
}

// gamesetup


function getRandom (max, min){
    return Math.floor(Math.random() * (max - min) + min);
}

//start game
function startGame(){

    targetScore = getRandom(19,120);
    userScore = 0;
    crystal.purple.value = getRandom(1,12);
    crystal.blue.value = getRandom(1,12);
    crystal.red.value = getRandom(1,12);
    crystal.green.value = getRandom(1,12);

    $('#target-score').text(targetScore);
    $('#user-score').text(userScore);
    $('#wins').text(wins);
    $('#losses').text(losses);

// Test Values

    console.log("------------Targets--------------")
console.log("Target Score: ",targetScore)
console.log("User Score: ", userScore)
console.log("------------Crystals--------------")
console.log("Purple Crystal: ", crystal.purple.value )
console.log("Blue Crystal: ", crystal.blue.value )
console.log("Red Crystal: ", crystal.red.value )
console.log("Green Crystal: ", crystal.green.value)
console.log("------------Score Board--------------")
console.log("wins: ", wins)
console.log("losses: ", wins)
}

//add crystals to userScore

let addCrystals = function(clickedValue){

userScore += clickedValue
$('#user-score').text(userScore);
console.log("User Score: ", userScore)
checkScore(userScore)
};

//check score

let checkScore = function(){
    console.log('checkScore running')
if(targetScore === userScore){
    wins++ 
    console.log('wins: ', wins)
    startGame()

} else if(targetScore < userScore){
    losses++
    $('#loss-modal').modal('show')
    console.log('losses: ', losses) 
    startGame()
   
} else{
    console.log('continues')
    userScore=userScore
}
}

startGame()

$('#purple').click(function(){
    addCrystals(crystal.purple.value)
})
$('#blue').click(function(){
    addCrystals(crystal.blue.value)
})
$('#red').click(function(){
    addCrystals(crystal.red.value)
})
$('#green').click(function(){
    addCrystals(crystal.green.value)
})



//TEST






