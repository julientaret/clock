import style from "./less/style.less";

function TimeNow(){
    const date = new Date();
    const pointerSecond = document.querySelector('.seconds');
    const pointerMinute = document.querySelector('.minutes');
    const pointerHour = document.querySelector('.hours');

    //  Movement and position of second pointer
    const seconds = date.getSeconds();
    const secondDeg = ((seconds/60)*360 + 90);
    const circleDeg = ((seconds/60)*1000 - (secondDeg - 90));
    pointerSecond.style.transform = ('rotate(' + secondDeg + 'deg)');

    //  Movement and position of blue circle
    const circle = document.querySelector('.effect');
    circle.style.strokeDashoffset = circleDeg;

    //  Movement and position of minutes pointer
    const minute = date.getMinutes();
    const minuteDeg = (((minute/60)*360) + ((seconds/60)*6) + 90);
    pointerMinute.style.transform = ('rotate(' + minuteDeg + 'deg)');

    //  Movement and position of Hours pointer
    const hour = date.getHours();
    const hoursDeg = (((hour/12) * 360) + ((minute/60)*30) + 90);
    pointerHour.style.transform = ('rotate(' + hoursDeg + 'deg)');

    // Remove and adding 'transition' class for smooth transition each minutes
    if (seconds === 0 ){
        pointerSecond.classList.remove('anim');
        circle.classList.remove('anim-circle');
        console.log('coucou');
    }
    else {
        pointerSecond.classList.add('anim');
        circle.classList.add('anim-circle');
        console.log('non');
    }
}

// Let's go
setInterval(TimeNow,1000);

