class MyTime {
    constructor(min, hr, period) {
        this.minutes = min;
        this.hours = hr;
        this.period = period;
        this.time = this.hours + ":" + this.minutes + " " + this.period;
    }

    getTime = () => {
        let time = this.hours + ":" + this.minutes + " " + this.period;
        return time;
    }
}
export default MyTime;