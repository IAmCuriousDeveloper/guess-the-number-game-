//Game values

let min =1,
    max=10,
    winningNum = getRandomNum(min,max);
    gussesLeft = 3;

    const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'), 
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


    //assigning ui min and max

    minNum.textContent = min;
    maxNum.textContent = max;


    //play again eventlistener
    game.addEventListener('mousedown',function(e){
            if(e.target.className ==='play-again'){
                window.location.reload();
            }
    })

//listen for guess

guessBtn.addEventListener('click',function(){
   let guess =  parseInt(guessInput.value);
   console.log(guess);//for developer purpose

    //vaidation for NaN

    if(isNaN(guess) || guess < min || guess > max){
        setmessage(`Please enter the valid no. between ${min} and ${max}`,'red');
    }else{//checking if its winning num 
        if(guess === winningNum){
            gameOver(true,`${winningNum} is correct !! woohoo`);
        } else {
            //subtracting guesses left 
            gussesLeft -= 1;
    
            //checking for guesses left 
    
            if(gussesLeft === 0 ){
              gameOver(false,`game over ,you lost ...you can play again, The correct no. was ${winningNum} `);
                //game over 
            } else {
                //continue - answer wrong 
                guessInput.style.borderColor = 'red';
                
                //clear number input 
                guessInput.value = '';
    
    
                //saying wrong number
                setmessage(`${guess} is not correct , ${gussesLeft} guesses left`,'red');
            }
    
        }}

    

});


//game over func

function gameOver(won,msg){

let color;
won === true ? color ='green' : color ="red";

    guessInput.disabled = true;
    //changing border color 
    guessInput.style.borderColor = 'green';

    setmessage(msg,color);

    //play again 
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//set message func

function setmessage(msg,color){
    message.style.color = color;
    message.textContent = msg;
}


//setting winning no
function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}