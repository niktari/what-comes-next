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
let prevRate = 0.01133;
let prevRateStrings = prevRate.toString().split('');

const hiddenVals = document.querySelectorAll(".hidden-set .value");

function initAmount() {
for(let i = 0; i < hiddenVals.length; i++) {
    const span = document.createElement("span");
    let prevRateStrings = prevRate.toString().split('');
    span.innerHTML = prevRateStrings[i];
    span.classList.add("test")

    hiddenVals[i].appendChild(span);

}
}

function updateAmount() {
    

    let newRate = (prevRate += increment).toFixed(5);
    let newRateStrings = newRate.toString().split('')

    let spans = document.querySelectorAll("span");
    spans.forEach(span => {
        span.classList.add("prev-span")
    })

    let prevSpans = document.querySelectorAll(".prev-span")

   for(let i = 0; i < hiddenVals.length; i++) {

    if(newRateStrings[i] !== prevRateStrings[i]) {
        const span = document.createElement("span");
        span.innerHTML = newRateStrings[i];
        span.classList.add("test");
        span.style.animationDuration = `${i * 0.1}s`
        hiddenVals[i].appendChild(span);

        prevSpans.forEach(span => {
            if(hiddenVals[i].contains(span)) {
                span.classList.remove("test");
                span.classList.add("previous");

                if(i == 0 || i == 2) {
                    span.style.animationDuration = `0.5s`
                } else {
                    span.style.animationDuration = `${i * 0.1}s`
                }
                

            setTimeout(() => {
                if(hiddenVals[i].contains(span)) {
                    hiddenVals[i].removeChild(span);
                }
            }, 1500)
                
                
            }
        })
        

    }

}

prevRateStrings = newRateStrings;
}

initAmount();
const updateInterval = setInterval(updateAmount, 1000);

function stopUpdate() {
    clearInterval(updateInterval);
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
}

setTimeout(stopUpdate, 179000);

