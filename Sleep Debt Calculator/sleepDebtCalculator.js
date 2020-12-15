/* bonus quest 

const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6
const  sunday = 7

*/

function getSleepHours(day){
	if(day === 'monday'){
		return 8
	}
	else if(day === 'tuesday'){
		return 8
	}
	else if(day === 'wednesday'){
		return 8
	}
	else if(day === 'thursday'){
		return 7
	}
	else if(day === 'friday'){
		return 8
	}
	else if(day === 'saturday'){
		return 8
	}
	else{
		return 8
	}
}

function getActualSleepHours(){
	return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

	/* bonus quest
function getActualSleepHours(){
	return monday + tuesday + wednesday + thursday + friday + saturday + sunday
}
	*/



function getIdealSleepHours(){
	let idealHours = 8
	return idealHours * 7
}
/*
function getIdealSleepHours(num){
	let idealHours = num
	return idealHours * 7
}
*/

function calculateSleepDebt(){
	var actualSleepHours = getActualSleepHours()
	var idealSleepHours = getIdealSleepHours()
	var okay = idealSleepHours - actualSleepHours

	if(actualSleepHours === idealSleepHours){
		return 'wow you sleep perfectly.'
	}
	else if(actualSleepHours > idealSleepHours){
		return `well you over slept for ${actualSleepHours - idealSleepHours} hours. better not slack off too much.`
	}
	else if(idealSleepHours > actualSleepHours){
		return `your lacking exactly ${okay} sleep hours. go to bed now.`
	}
	
}

console.log(calculateSleepDebt())