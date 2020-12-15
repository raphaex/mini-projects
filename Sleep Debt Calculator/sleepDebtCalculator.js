/* bonus quest 
alternative way of having the data of your sleep hours this can be paired with the alternative for
getActualSleepHours() function. 

const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6
const  sunday = 7

*/


//this is were you can add your sleep hours for the week
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
}//the function that adds up all your sleep hours

	/* bonus quest
this is the alternative version of the function above this comment.	

function getActualSleepHours(){
	return monday + tuesday + wednesday + thursday + friday + saturday + sunday
}
	*/



function getIdealSleepHours(){
	let idealHours = 8
	return idealHours * 7
}//this is your ideal sleep hours 8 x 7 = 56 hours of sleep is needed to achieve an ideal week of sleep


/*
this is a alternative way of getting ideal hours you can input a parameter num and then that will serve as daily sleep goal
ex: you input 7 then 7 * 7 = 49 hours of sleep to get an ideal hours of sleep

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
	
}//this function compares the actual sleep hours that you get from the ideal sleep hours and give you insights.



console.log(calculateSleepDebt())
