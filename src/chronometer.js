class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }


  start(printTimeCallback) {
  this.intervalId = setInterval(() => {
    if (typeof printTimeCallback === "function") {
      printTimeCallback();
    }
     this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {

   if (String(value).length === 1){
    return `0${value}`
   } else {
    return String(value);
   }
  }

  stop() {
   clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutes}:${seconds}`;
  }
}