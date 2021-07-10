

class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.refs = {
            fieldDays: document.querySelector(`${this.selector} span[data-value="days"]`),
            fieldHours: document.querySelector(`${this.selector} span[data-value="hours"]`),
            fieldMins: document.querySelector(`${this.selector} span[data-value="mins"]`),
            fieldSec: document.querySelector(`${this.selector} span[data-value="secs"]`),
        }

        this.init();
    }

    init() {
        this.getDeltaTime();
        setInterval(() => {
            this.getDeltaTime();
        }, 1000);
    }


    getDeltaTime() {
        const currentTime = Date.now();
        const deltaTime = this.targetDate - currentTime;
        this.getTimeComponents(deltaTime);
    }


    getTimeComponents(time) {
        this.days = Math.floor(time / (1000 * 60 * 60 * 24));
        this.hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        this.refs.fieldDays.textContent = this.days;
        this.refs.fieldHours.textContent = this.hours;
        this.refs.fieldMins.textContent = this.mins;
        this.refs.fieldSec.textContent = this.secs;
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }


}



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2021, 11, 25),
});

