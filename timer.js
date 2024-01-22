export default class Timer {
  constructor(root) {
    // root.innerHTML = Timer.getHTML();

    this.el = {
      minutes: root.querySelector(".timer_part-minutes"),
      seconds: root.querySelector(".timer_part-seconds"),
      control: root.querySelector(".timer_btn-control"),
      timer: root.querySelector(".timer_btn-timer"),
      break: root.querySelector(".timer_btn-break"),
      meditate: root.querySelector(".timer_btn-meditate"),
      pomodoro: root.querySelector(".timer_btn-pomodoro"),
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.stop();
      }
    });

    this.el.timer.addEventListener("click", () => {
      const inputMinutes = prompt("Enter no of minutes:");
      if (inputMinutes < 60) {
        this.stop();
        this.remainingSeconds = inputMinutes * 60;
        this.updateInterfaceTime();
        this.start();
      }
    });

    if (this.el.pomodoro) {
      this.el.pomodoro.addEventListener("click", () => {
        this.remainingSeconds = 1500;
        this.updateInterfaceTime();
      });
    }

    this.el.break.addEventListener("click", () => {
      this.remainingSeconds = 300;
      this.updateInterfaceTime();
    });

    this.el.meditate.addEventListener("click", () => {
      this.remainingSeconds = 120;
      this.updateInterfaceTime();
    });
  }

  endsound() {
    let audio = new Audio("endbeep.mp3");
    audio.play();
  }

  updateInterfaceTime() {
    const minutes = Math.floor(this.remainingSeconds / 60);
    const seconds = this.remainingSeconds % 60;

    this.el.minutes.textContent = minutes.toString().padStart(2, "0");
    this.el.seconds.textContent = seconds.toString().padStart(2, "0");
  }

  updateInterfaceControls() {
    if (this.interval === null) {
      this.el.control.innerHTML = `<span class="material-icons"> play_arrow </span>`;
      this.el.control.classList.add("timer_btn-start");
      this.el.control.classList.remove("timer_btn-stop");
    } else {
      this.el.control.innerHTML = `<span class="material-icons"> pause </span>`;
      this.el.control.classList.remove("timer_btn-start");
      this.el.control.classList.add("timer_btn-stop");
    }
  }

  start() {
    if (this.remainingSeconds === 0) return;
    this.interval = setInterval(() => {
      this.remainingSeconds--;
      this.updateInterfaceTime();

      if (this.remainingSeconds === 0) {
        this.stop();
        this.endsound();
      }
    }, 1000); //for every 1000 milli second code will run

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;
    this.updateInterfaceControls();
  }

  // static getHTML() {
  //   return `
  //   <span class="timer_part timer_part-minutes">00</span>
  //   <span class="timer_part">:</span>
  //   <span class="timer_part timer_part-seconds">00</span>
  //   <button type="button" class="timer_btn timer_btn-control timer_btn-start">
  //     <span class="material-icons"> play_arrow </span>
  //   </button>
  //   <button type="button" class="timer_btn timer_btn-timer">
  //     <span class="material-icons"> restart_alt</span>
  //   </button>
  //   `;
  // }
}
