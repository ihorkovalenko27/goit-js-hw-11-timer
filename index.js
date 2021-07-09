

const daysValue = document.querySelector('span[data-value="days"]');

const hoursValue = document.querySelector('span[data-value="hours"]');

const minsValue = document.querySelector('span[data-value="mins"]');

const secsValue = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
    constructor({ targetDate }) {
        this.targetDate = targetDate;
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
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        this.updateClockface(days, hours, mins, secs);
    }


    pad(value) {
        return String(value).padStart(2, '0');
    }

    updateClockface(days, hours, mins, secs) {
        const time = `${days}${hours}${mins}${secs}`;
        daysValue.textContent = `${days}`;
        hoursValue.textContent = `${hours}`;
        minsValue.textContent = `${mins}`;
        secsValue.textContent = `${secs}`;
    }

}



const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2021, 11, 25),
});

