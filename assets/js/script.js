window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = true;

    init();

    function init() {
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run;
            document.querySelector('.button').classList.toggle('pause');
        });

        setInterval(function() {
            if (is_run) {
                let oDate = new Date();
                let hours = adjustTimer(oDate.getHours());
                let minutes = adjustTimer(oDate.getMinutes());
                let seconds = adjustTimer(oDate.getSeconds());

                document.querySelector('#hours').innerHTML   = hours;
                document.querySelector('#minutes').innerHTML = minutes;
                document.querySelector('#seconds').innerHTML = seconds;

                document.querySelector('body').style.background = randomHexColor(hours, minutes, seconds);
            }
        }, 1000);
    }

    function adjustTimer(timer) {
        return (timer < 10 ? '0' + timer : timer);
    }

    function randomHexColor(x, y, z) {
        return "rgb(" + Math.floor(x / 23 * 255) + "," + Math.floor(y / 59 * 255) + "," + Math.floor(z / 59 * 255) + ")";
    }
});