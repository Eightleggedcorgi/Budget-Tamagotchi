//look back at oop in lessons or hw6 landscaper for tips
//const dedButton = document.querySelector(".button.ded");
//const fedButton = document.querySelector(".button.fed");

document.querySelector(".js-fed-button").onclick = function () {
    alert("Yum yum");
}

document.querySelector(".js-rest-button").onclick = function () {
    alert("Zzzzzz");
}

document.querySelector(".js-play-button").onclick = function () {
    alert("Yippee!"); //should make play transform the image left to right
}

document.querySelector(".js-ded-button").onclick = function () {
    alert("PERISH");
}
    /* if (scissors === true) {
        dollars += 5;
        updateDisplay()
    } */

class Game {
    constructor(name, birthday, color, eyecolor, attitude, favfood, altfavfood) {
    this.name = name //can be string or integer
    this.birthday = birthday //better be an integer
    this.color = color
    this.eyecolor = eyecolor
    this.attitude = attitude
    this.favfood = favfood
    this.altfavfood = altfavfood
    }

    /* eat() {
        console.log('chomp chomp')
    }

    move() {
        console.log('shuffle shuffle')
    } */

    /* class Tabby extends Cat {
        constructor(name, color, eyecolor, attitude, food) {
            super(name, color, eyecolor, attitude, food)
            this.color = 'Tabby'
        }
    } */

};

let gatoHunger = 1;
let gatoSleep = 1;
let gatoBored = 1;
let gatoAge = 1; //should be the inputted age, 1 is temporary
let doomTimer = 0;

/* for (i = 0; i < 15; i++) {
    setTimeout (12000)
    doomTimer += 1;
    alert("You feel older")
} fires all the messages at once */
/* setTimeout(() => {
    doomTimer += 1;
    alert("You feel older")
}, 8000) works but only fires once*/
/* const timer = () => {
    setTimeout(8000);
    doomTimer += 1;
    alert("Your pet is older")
} */
/* for (i = 0; i <15; i++) {
 timer()
} */

let counted = 0;
let target = 15;
let i = setInterval(function () {
    if (counted <= target) {
        counted++;
        doomTimer += 1;
        alert("Your pet is older")
    } else {
        clearInterval(i);
    }
}, 5000); //IT WORKS HOORAAAAAAAAAAAAAAAAAAAA interval 5000 = 5 seconds

if (doomTimer >= 15) {
    alert("ANNIHILATION APPROACHES") //get this to work
}

const bungo = new Game('Bungo', 1977, 'Shrimp Colors', 'Shrimpier Colors', 'Inhuman', 'Human Hearts', 'Pig Snouts');
//console.log(bungo)