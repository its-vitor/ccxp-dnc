function countDown() {
    const day = document.getElementById('days');
    const hour = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const totalSeconds = (new Date('19 dec 2023') - new Date()) / 1000;

    day.innerHTML = timeFormat(Math.floor(totalSeconds / 60 / 60 / 24)) + "D";
    hour.innerHTML = timeFormat(Math.floor(totalSeconds / 60 / 60) % 24)  + "H";
    minutes.innerHTML = timeFormat(Math.floor(totalSeconds / 60) % 60) + "M";
    seconds.innerHTML = timeFormat(Math.floor(totalSeconds) % 60) + "S";
}

function timeFormat( time ) {
    return time < 10 ? `0${time}` : time
}

countDown();
setInterval(countDown, 1000);