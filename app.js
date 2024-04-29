//look back at oop in lessons or hw6 landscaper for tips
let gatoHunger = 0;
let gatoSleep = 0;
let gatoBored = 0;
let gatoAge = 1; //should be the inputted age, 1 is temporary
//let doomTimer = 0;

//button functions
document.querySelector(".js-fed-button").onclick = function () {
    alert("Yum yum");
    gatoHunger -= 2;
    if (gatoHunger < 0) {
        gatoHunger = 0;
    }
    updateHungDisplay();
}

document.querySelector(".js-rest-button").onclick = function () {
    alert("Zzzzzz");
    gatoSleep -= 2;
    if (gatoSleep < 0) {
        gatoSleep = 0;
    }
    updateTiredDisplay();
}

document.querySelector(".js-play-button").onclick = function () {
    alert("Yippee!"); //should make play transform the image left to right
    gatoBored -= 1;
    if (gatoBored < 0) {
        gatoBored = 0;
    }
    updateBoredDisplay();
}

document.querySelector(".js-ded-button").onclick = function () {
    alert("PERISH");
}

//SUPER button functions
document.querySelector(".js-superfed-button").onclick = function () {
    alert("MMMMMM YYYYYYYYYYUM YUUUUUUUUMMMMMM");
    gatoHunger -= 4;
    if (gatoHunger < 0) {
        gatoHunger = 0;
    }
    updateHungDisplay();
}
document.querySelector(".js-superrest-button").onclick = function () {
    alert("zzzzzZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ");
    gatoSleep -= 3;
    if (gatoSleep < 0) {
        gatoSleep = 0;
    }
    updateTiredDisplay();
}
document.querySelector(".js-superplay-button").onclick = function () {
    alert("WOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"); //perfect length
    gatoBored -= 3;
    if (gatoBored < 0) {
        gatoBored = 0;
    }
    updateBoredDisplay();
}

//visual counter operating code
    let counterHungDisplay = document.querySelector('.output1')
    function updateHungDisplay(){
        counterHungDisplay.innerHTML = gatoHunger;
    };

    let counterTiredDisplay = document.querySelector('.output2')
    function updateTiredDisplay(){
        counterTiredDisplay.innerHTML = gatoSleep;
    };

    let counterBoredDisplay = document.querySelector('.output3')
    function updateBoredDisplay(){
        counterBoredDisplay.innerHTML = gatoBored;
    };

    let counterAgeDisplay = document.querySelector('.output4')
    function updateAgeDisplay(){
        counterAgeDisplay.innerHTML = gatoAge;
    };

//Evil insidious timers of entropy
let counted = 0;
let target = 15;
let i = setInterval(function () {
    if (counted <= target) {
            counted++;
            gatoAge += 1;
            updateAgeDisplay()
            alert("Habby Borfday! Your pet is older") //might make age meter take inputted name. depends on headache required.
            if (gatoAge >= 15) {
                alert("ANNIHILATION APPROACHES")
            }
        } else {
            clearInterval(i);
        }
    }, 60000); //IT WORKS HOORAAAAAAAAAAAAAAAAAAAA interval 5000 = 5 seconds    

let counted2 = 0;
let target2 = 600;
let i2 = setInterval(function () {
    if (counted2 <= target2) {
            counted2++;
            gatoHunger += 1;
            updateHungDisplay()
        } else {
            clearInterval(i);
        }
    }, 25000);

let counted3 = 0;
let target3 = 600;
let i3 = setInterval(function () {
    if (counted3 <= target3) {
            counted3++;
            gatoSleep += 1;
            updateTiredDisplay()
        } else {
            clearInterval(i);
        }
    }, 18000);

let counted4 = 0;
let target4 = 600;
let i4 = setInterval(function () {
    if (counted4 <= target4) {
            counted4++;
            gatoBored += 1;
            updateBoredDisplay()
        } else {
            clearInterval(i);
        }
    }, 12000);



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

const bungo = new Game('Bungo', 1977, 'Shrimp Colors', 'Shrimpier Colors', 'From Beyond Space & Time', 'Human Hearts', 'Pig Snouts');
//console.log(bungo)
