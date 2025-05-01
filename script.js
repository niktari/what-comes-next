const container = document.getElementById("container");
const updateInterval = setInterval(updateAmount, 1000);

let rate = 0.01133;

function updateAmount() {
    container.innerHTML = "$" + rate.toFixed(5);

    rate += 0.01133;
}

function stopUpdate() {
    clearInterval(updateInterval);
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
}

setTimeout(stopUpdate, 180000);

// updateAmount();
