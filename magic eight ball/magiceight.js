let userName = 'raphael'
//user's name

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!')
//ternary operator that checks if you entered a name and if you did greet you with your name and if not then just say Hello!

if(userName){userName = userName}else{userName = 'Wizard'}
//this is for the user question so that a default name will be displayed if the user did not input any name.

let userQuestion = "do i go with mj?"
//the question


console.log(`oh i see, ${userName} you asked the magical eight ball ${userQuestion}`)
//the conversation starter

let randomNumber = Math.floor(Math.random() * 8);
//the response chooser


let eightBall = undefined
//eightBall which will display the reponse later.


//the set of response the 'response chooser' is gonna pick from.
if(randomNumber === 0){
  eightBall = 'well It is certain'
}
else if(randomNumber === 1){
  eightBall = 'well It is decidedly so' 
}
else if(randomNumber === 2){
  eightBall = 'Reply hazy try again'
}
else if(randomNumber === 3){
  eightBall = 'well Cannot predict now'
}
else if(randomNumber === 4){
  eightBall = 'well Do not count on it'
}
else if(randomNumber === 5){
  eightBall = 'well My sources say no'
}
else if(randomNumber === 6){
  eightBall = 'well Out look not so good'
}
else if(randomNumber === 7){
  eightBall = 'well Signs point to yes'
}
else{
  eightBall = 'No thank you sir!'
}


console.log(eightBall)
//the final response


/*bonus quest.
switch (randomNumber){
  case 0 :
    eigthBall = 'well It is certain'
    break;
  case 1:
    eightBall = 'well It is decidedly so' 
    break;
  case 2:
   eightBall = 'Reply hazy try again'
    break;
  case 3:
    eightBall = 'well Cannot predict now'
    break;
  case 4:
    eightBall = 'well Do not count on it'
    break
  case 5: 
    eightBall = 'well My sources say no'
    break;
  case 6: 
    eightBall = 'well Out look not so good'
    break;
  case 7: 
    eightBall = 'well Signs point to yes'
    break;
  default:
  eightBall = `very nice question but i Cannot answer sorry ${userName}`
  break;
}

*/
