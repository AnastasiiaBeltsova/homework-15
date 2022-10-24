// function Clock() {
//     this.timer;
// }
// Clock.prototype.start = function () {
//     function render() {
//         let content = document.querySelector('.js--content');
//         let date = new Date();
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         if (hours < 10) { hours = `0${hours}`};
//         if (minutes < 10) { minutes = `0${minutes}`};
//         if (seconds < 10) { seconds = `0${seconds}`};
//         content.innerHTML = `${hours}:${minutes}:${seconds}`;
//     }
//     this.timer = setInterval(render, 1000);
// }
// Clock.prototype.stop = function () {
//     clearInterval(this.timer);
// }


class Clock {
    timer = undefined;
    constructor(content) {
        this.content = document.querySelector(content);
    }
    start() {
        const render = () => {
            let content = document.querySelector('.js--content');
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            if (hours < 10) { hours = `0${hours}`};
            if (minutes < 10) { minutes = `0${minutes}`};
            if (seconds < 10) { seconds = `0${seconds}`};
            this.content.innerHTML = `${hours}:${minutes}:${seconds}`;
        }
        this.timer = setInterval(render, 1000);
    }

    stop() {
        clearInterval(this.timer);
    }
}

const timer1 = {
    __proto__: new Clock('.js--content', '.js--stop'),
}
document.querySelector('.js--start').addEventListener('click', function () {
    timer1.start()
})
document.querySelector('.js--stop').addEventListener('click', function () {
    timer1.stop()
})