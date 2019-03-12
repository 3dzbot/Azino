    let timeFrom = 1585979; //starting point

    const msInMin = 60;
    const msInHour = msInMin * 60;
    const msInDay = msInHour * 24;

    const dayElement = document.getElementById('day');
    const hourElement = document.getElementById('hour');
    const minElement = document.getElementById('min');
    const secElement = document.getElementById('sec');

    const bigBen = document.getElementsByClassName('big-ben')[0];
    const bridge = document.getElementsByClassName('bridge')[0];

    function addClass(){
        bigBen.classList.add('big-ben-new');
        bridge.classList.add('bridge-new');
    }

    setTimeout(addClass, 2000);

    console.log(bigBen.classList);
    timer();

    function timer() {

        const interval = setInterval(() => {
            if (timeFrom > 0) {
                getTime(timeFrom);
                timeFrom--;
            } else {
                clearInterval(interval);
            }

        }, 1000);
    }


    function getTime(time) {
        const dayCounts = Math.floor(time / msInDay);
        const hourCount = Math.floor(time % msInDay / msInHour);
        const minCount = Math.floor(time % msInHour / msInMin);
        const secCount = Math.floor(time % msInMin);

        if (String(dayCounts).length > 1){
            dayElement.innerText = dayCounts;
        } else {
            dayElement.innerHTML = '<b>0</b>' + dayCounts;
        }
        if (String(hourCount).length > 1){
            hourElement.innerText = hourCount;
        } else {
            hourElement.innerHTML = '<b>0</b>' + hourCount;
        }
        if (String(minElement).length > 1) {
            minElement.innerText = minCount;
        } else {
            minElement.innerHTML = '<b>0</b>' + minCount;
        }
        if (String(secCount).length > 1){
            secElement.innerText = secCount
        } else {
            secElement.innerHTML = '<b>0</b>' + secCount;
        }
    };