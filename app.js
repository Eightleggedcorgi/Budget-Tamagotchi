//look back at oop in lessons or hw6 landscaper for tips
const dedButton = document.querySelector(".button.ded");
const fedButton = document.querySelector(".button.fed");

document.querySelector(".js-fed-button").onclick = function () {
    alert("Yum yum");
}

document.querySelector(".js-rest-button").onclick = function () {
    alert("Zzzzzz");
}

document.querySelector(".js-play-button").onclick = function () {
    alert("Yippee!");
}

document.querySelector(".js-ded-button").onclick = function () {
    alert("PERISH");
}
    /* if (scissors === true) {
        dollars += 5;
        updateDisplay()
    } */

class Tama {
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

const bungo = new Tama('Bungo', 1977, 'Shrimp Colors', 'Shrimpier Colors', 'Inhuman', 'Human Hearts', 'Pig Snouts');