/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

.todo-text {
  flex: 1;
}

.remove-btn {
  background-color: transparent;
  border: none;
  color: #f44336;
  cursor: pointer;
}

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

