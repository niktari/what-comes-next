// Start with a number
// Increment
// Turn into string
// Split the string
// Inject
// Rejoin the number
// Increment
// Turn into string
// Split the string
// Inject
// (...)

let increment = 0.01133;
let rate = 0.01133;

const valueElems = document.querySelectorAll(".value");

window.onload = function() {

function updateAmount() {
    rate += increment;
    let numStrings = rate.toString().split('')

   for(let i = 0; i < valueElems.length; i++) {
    valueElems[i].innerHTML = numStrings[i];

    if(!numStrings[i]) {
        valueElems[i].innerHTML = "0";
    }
    }

    let actualNum = Number(numStrings.join(""));
    console.log(actualNum)
}

const updateInterval = setInterval(updateAmount, 1000);

function stopUpdate() {
    clearInterval(updateInterval);
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
}

setTimeout(stopUpdate, 180000);

}

