
function tellTime() {
    let now = new Date();
    let time = now.toLocaleTimeString([], { hour12: false }); 
    let hour = now.getHours();
    let message = `The time is ${time}.`;
    if (hour < 12) {
        message = `Good morning! The time is ${time}.`;
    } else if (hour < 18 && hour >= 12) {
        message = `Good afternoon! The time is ${time}.`;
    } else {
        message = `Good evening! The time is ${time}.`;
    }
    let timeSpan = document.getElementById('time');
    if (!timeSpan) {
        timeSpan = document.createElement('span');
        timeSpan.id = 'time';   
        document.body.appendChild(timeSpan);
    }
    timeSpan.innerHTML = `${message}`;
}

