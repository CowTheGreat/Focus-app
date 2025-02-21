/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
}

#todo-app {
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

#todo-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

#todo-input {
  flex: 1;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
=======
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

#add-task-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

#add-task-btn:hover {
  background-color: #45a049;
}

#todo-list {
  list-style: none;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fafafa;
  border-radius: 6px;
  transition: background-color 0.3s ease;
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

.todo-text {
  flex: 1;
}

.remove-btn {
  background-color: transparent;
  border: none;
  color: #f44336;
  cursor: pointer;
}
      if (this.remainingSeconds === 0) {
        this.stop();
        this.endsound();
      }
    }, 1000);

.remove-btn:hover {
  text-decoration: underline;
}

/* Task completion and deletion interaction */
.todo-item.completed {
  text-decoration: line-through;
  color: #999;
}

.todo-item:hover {
  background-color: #f1f1f1;
}

#todo-list li:last-child {
  margin-bottom: 0;
}

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

