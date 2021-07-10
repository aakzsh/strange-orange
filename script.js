const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
var lastHole;



var timeUp = false;
var score = 0;

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes){
    const index  = Math.floor(Math.random() * holes.length);
    const hole = holes[index];

    //prevent same hole from getting the same number
    if (hole === lastHole){
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep() {
    const time = randomTime(1000, 1500); //get a random time to determine how long mole should peep
    const hole = randomHole(holes); //get the random hole from the randomHole function
    hole.classList.add('up'); //add the CSS class so selected mole can "pop up"
    setTimeout(() => {
        hole.classList.remove('up'); //make the selected mole "pop down" after a random time
        if(!timeUp) {
            peep();
        }
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 15000) //show random moles for 15 seconds
}

function wack(e){
    if(!e.isTrusted) return; //** new thing I learned */
    score++;
    this.parentNode.classList.remove('up'); //this refers to item clicked
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', wack))


////

function play() {
startGame();
       var countDownDate = new Date();
                countDownDate.setSeconds( countDownDate.getSeconds() + 17);




       // Update the count down every 1 second
       var x = setInterval(function() {

         // Get today's date and time
         var now = new Date().getTime();

        // Find the distance between now and the count down date
         var distance = countDownDate - now;


         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

         // Output the result in an element with id="demo"
         document.getElementById("demo").innerHTML =  seconds + "s ";

         // If the count down is over, write some text
         if (distance < 0) {
           clearInterval(x);
           document.getElementById("demo").innerHTML = "OVER";

           window.alert("Your score is 🍊🍊 "+score+" 🍊🍊");

         }
       }, 1000);
     }
