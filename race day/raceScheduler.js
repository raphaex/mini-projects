let raceNumber = Math.floor(Math.random() * 1000);
//initial number generator


let registrationTime = false
let runnerAge = 18
//runner's conditions



if(registrationTime === true && runnerAge > 18){
	raceNumber + 1000
}//for the runners who are registered early and over 18 add a additional 1000 so that there's no exact same numbers



if(registrationTime === true && runnerAge > 18){
	console.log(`All runners that are registered early and over 18 the race will start at exactly 9:30AM your raceNumber should be ${raceNumber}+`)}
//for the runners who are registered early and over 18


else if(registrationTime === false && runnerAge > 18){
	console.log(`All runners that are registered late and over 18 the race will start at exactly 11:00AM your raceNumber should be ${raceNumber}`)}//for the runners who are late and over 18


else if(runnerAge === 18){
	console.log('Those who are exactly 18 pls see the registration Desk for further assistance')
}//for the runners who are exactly 18. sadness overflow lol.


else{
	console.log(`For the youth runners early or late the race will start at 12:30PM`)}//for all the youths who are below 18 early or late

