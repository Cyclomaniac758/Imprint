class Timer {
  // Class used for timing user interaction, how long is spent completing the calculator and number of back clicks are recorded

  constructor(usernum) {
    this.start = new Date();
    this.last = null;
    this.now = null;
    this.data = {};
    this.data.backcount = 0;
    console.log("new timer");
    this.usernum = usernum;
  }

  incrementback() {
    this.data.backcount++;
    console.log(this.data.backcount);
  }

  pagetime(page) {
    let time = (new Date() - this.start) / 1000;
    this.data[page] = time;
    console.log(time + " seconds spent on the " + page);
    this.download(page + ".txt");
  }

  takeduration(page) {
    this.last = this.now !== null ? this.now : this.start;
    this.now = new Date();
    let lastdifference = (this.now - this.last) / 1000;
    console.log(lastdifference + " seconds spent on " + page);
    this.data[page] = lastdifference;
  }

  calculatetotal() {
    let startdifference = (this.now - this.start) / 1000;
    this.data["total"] = startdifference;
    console.log(startdifference + " seconds since start");
  }

  download(filename) {
    console.log(this.data);
    var pom = document.createElement("a");
    pom.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(JSON.stringify(this.data))
    );
    pom.setAttribute(
      "download",
      "user" + this.usernum.toString() + "_" + filename
    );

    if (document.createEvent) {
      var event = document.createEvent("MouseEvents");
      event.initEvent("click", true, true);
      pom.dispatchEvent(event);
    } else {
      pom.click();
    }
  }
}

export default Timer;
