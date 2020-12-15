function addOne(test) {
  return test+1
}

//human's score
var humanScore = 0

//machine's score
var machineScore = 0


//individual score's of picks (rock, paper, scissors)
var rock = 0
var paper = 0
var scissors = 0

//players individual picks
//humans
var paperHumans = 0
var rockHumans = 0
var scissorsHumans = 0

//machine
var paperMachine = 0
var rockMachine = 0
var scissorsMachine = 0


//if the games are tie
var tiedGames = 0

//this function finds who won.
function game(){
//human's choice
const pickerForHumans = Math.floor(Math.random() * 3)
let humanChoice = () => {
	if(pickerForHumans === 1){
		return 'rock'
	}
	else if(pickerForHumans === 2){
		return 'paper'
	}
	else{
		return 'scissors'
	}
}
console.log(`humans pick ${humanChoice()}`)

//machine's choice
const pickerForMachine = Math.floor(Math.random() * 3)
let machineChoice = () => {
	if(pickerForMachine === 1){
		return 'rock'
	}
	else if(pickerForMachine === 2){
		return 'paper'
	}
	else{
		return 'scissors'
	}
}
console.log(`machine pick ${machineChoice()}`)


if(machineChoice() === humanChoice()){
	tiedGames = addOne(tiedGames)
	humanScore = addOne(humanScore)
	console.log("it's a tie.")
	}
else if(humanChoice() === 'rock'){
	if(machineChoice() === 'paper'){
		paperMachine = addOne(paperMachine)
		paper = addOne(paper)
		machineScore = addOne(machineScore)
		console.log('machine won.')
	}
	else{
		rockHumans = addOne(rockHumans)
		rock = addOne(rock)
		humanScore = addOne(humanScore)
		console.log('human won.')	}
	}
else if(humanChoice() === 'scissors'){
	if(machineChoice() === 'rock'){
		rockMachine = addOne(rockMachine)
		rock = addOne(rock)
		machineScore = addOne(machineScore)
		console.log('machine won.')
	}
	else{
		scissorsHumans = addOne(scissorsHumans)
		scissors = addOne(scissors)
		humanScore = addOne(humanScore)
		console.log('human won.')	}
	}
else if(humanChoice() === 'paper'){
	if(machineChoice() === 'scissors'){
		scissorsMachine = addOne(scissorsMachine)
		scissors = addOne(scissors)
		machineScore = addOne(machineScore)
		console.log('machine won.')
	}
	else{
		paperHumans = addOne(paperHumans)
		paper = addOne(paper)
		humanScore = addOne(humanScore)
		console.log('human won.')	}
	}
}

function playGame(){
	for (var i = 0; i < 1000000; i++) {
    game();
}
}

playGame()

function pickInfo(){
console.log(`there are ${paper} which paper win`)
console.log(`there are ${rock} which rock win`)
console.log(`there are ${scissors} which scissors win`)
}
pickInfo()

function games(){
console.log(`there are ${tiedGames} tied games`)
console.log(`humans: ${humanScore}`)
console.log(`machine: ${machineScore}`)
}
games()

const playerPickInfoHumans = () => {
	console.log(`humans pick paper and won ${paperHumans} times`)
	console.log(`humans pick rock and won ${rockHumans} times`)
	console.log(`humans pick scissors and won ${scissorsHumans} times`)
}
playerPickInfoHumans()

const playerPickInfoMachines = () => {
	console.log(`machine pick paper and won ${paperMachine}`)
	console.log(`machine pick rock and won ${rockMachine}`)
	console.log(`machine pick  scissors and won ${scissorsMachine}`)
}
playerPickInfoMachines()

