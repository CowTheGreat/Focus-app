// Timer
class Timer {
  constructor(root) {
    this.el = {
      minutes: root.querySelector(".timer_part-minutes"),
      seconds: root.querySelector(".timer_part-seconds"),
      control: root.querySelector(".timer_btn-control"),
      timer: root.querySelector(".timer_btn-timer"),
      break: root.querySelector(".timer_btn-break"),
      meditate: root.querySelector(".timer_btn-meditate"),
      pomodoro: root.querySelector(".timer_btn-pomodoro"),
      currentMode: 0, // 0 = base, 1 = pomo, 2 = break, 3 = medi
    };

    this.interval = null;
    this.remainingSeconds = 0;

    this.el.control.addEventListener("click", () => {
      if (this.interval === null) {
        this.start();
      } else {
        this.currentMode = 0;
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

    this.el.pomodoro.addEventListener("click", () => {
      this.pomodoro();
    });

    this.el.break.addEventListener("click", () => {
      this.breakTime();
    });

    this.el.meditate.addEventListener("click", () => {
      this.meditate();
    });
  }

  pomodoro() {
    mode.classList.remove("breakMode");
    mode.classList.remove("mediMode");
    mode.classList.add("pomoMode");
    mode.classList.add("mode-transition"); // Adding transition for mode change
    this.remainingSeconds = 1500;
    this.updateInterfaceTime();
    this.currentMode = 1;
  }

  breakTime() {
    mode.classList.remove("mediMode");
    mode.classList.remove("pomoMode");
    mode.classList.add("breakMode");
    mode.classList.add("mode-transition"); // Adding transition for mode change
    this.remainingSeconds = 300;
    this.updateInterfaceTime();
    this.currentMode = 2;
  }

  meditate() {
    mode.classList.remove("pomoMode");
    mode.classList.remove("breakMode");
    mode.classList.add("mediMode");
    mode.classList.add("mode-transition"); // Adding transition for mode change
    this.remainingSeconds = 120;
    this.updateInterfaceTime();
    this.currentMode = 3;
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
      // Add a transition effect to the button when stopped
      this.el.control.style.transform = "scale(1)";
    } else {
      this.el.control.innerHTML = `<span class="material-icons"> pause </span>`;
      this.el.control.classList.remove("timer_btn-start");
      this.el.control.classList.add("timer_btn-stop");
      // Add a transition effect to the button when active
      this.el.control.style.transform = "scale(1.1)";
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
    }, 1000);

    this.updateInterfaceControls();
  }

  stop() {
    clearInterval(this.interval);

    this.interval = null;
    this.updateInterfaceControls();

    // You could add a delay before switching to the next mode
    setTimeout(() => {
      if (this.currentMode === 1) {
        this.breakTime();
        this.start();
      } else if (this.currentMode === 2) {
        this.pomodoro();
        this.start();
      }
    }, 500); // Adding a small delay for smoother transition
  }
}

new Timer(document.querySelector(".timer"));

