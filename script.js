function startSurprise() {

    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("corridorScreen").style.display = "flex";

}


function showNextScreen() {

    document.getElementById("corridorScreen").style.display = "none";

    document.getElementById("fourYearsScreen").style.display = "flex";

}


function showMemories() {

    document.getElementById("threeYearsScreen").style.display = "none";

    document.getElementById("littleThingsScreen").style.display = "flex";

}


function showBirthday() {

    document.getElementById("littleThingsScreen").style.display = "none";

    document.getElementById("secondYearScreen").style.display = "none";

    document.getElementById("birthdayScreen").style.display = "flex";

}
function openNote() {

    const note = document.getElementById("secretNote");

    note.classList.toggle("show");

}
function showLetter() {

    document.getElementById("birthdayScreen").style.display = "none";

    document.getElementById("letterScreen").style.display = "flex";

}
function showSecondYear() {

    document.getElementById("littleThingsScreen").style.display = "none";

    document.getElementById("secondYearScreen").style.display = "flex";

}
function showFinal() {

    document.getElementById("letterScreen").style.display = "none";

    document.getElementById("finalScreen").style.display = "flex";

}
