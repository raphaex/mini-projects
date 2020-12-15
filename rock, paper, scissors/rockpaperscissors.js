const getUserChoice = (input) => {
	input = input.toLowerCase();
	if(input === 'rock'){
		return input
	}
	else if(input === 'ppaer'){
		return input
	}
	else if (input === 'scissors'){
		return input
	}
	else if(input === 'bomb'){
		return '9/11'
	}
	else{
		console.log('pls input a choice from rock, paper or scissors')
		}
	}


const getComputerChoice = () => {
	const okay = Math.floor(Math.random() * 3)
	if(okay === 0){
		return 'rock'
		}
	else if(okay === 1){
		return 'paper'
		}	
	else{
		return 'scissors'
		}
	}


function determineWinner(userChoice, computerChoice){
	if(userChoice === computerChoice){
		return "it's a tie bitches"
	}
	else if(userChoice === 'rock'){
		if(computerChoice === 'paper'){
			return 'computer won'
				}
		else{
			return 'player won'
				}
	}
	else if(userChoice === 'paper'){
		if(computerChoice === 'scissors'){
			return 'computer won'
				}
		else{
			return 'player won'
				}
	}
	else if(userChoice === 'scissors'){
		if(computerChoice === 'rock'){
			return 'computer won'
				}
		else{
			return 'human won'
				}
	}
	else{
		return 'you win. happy now?'
	}
}

const playGame = () =>{
	let userChoice = getUserChoice('bomb')
	let computerChoice = getComputerChoice()
	console.log(`you pick ${userChoice} and the computer pick ${computerChoice}`)
	console.log(determineWinner(userChoice, computerChoice))
}

playGame()