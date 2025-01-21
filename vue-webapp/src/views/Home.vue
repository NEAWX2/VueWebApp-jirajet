<template>
  <div>
    <h1>Vue.js To-Do List</h1>
    <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask"/>
    <button @click="addTask">Add Task</button>
    <ul>
        <li v-for="(task, index) in tasks" :key="index">
            <input type="checkbox" v-model="task.completed" />
            <span :class="{ 'completed-task': task.completed }">{{ task.text }}</span>
            <button @click="removeTask(index)">Delete</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            newTask: '',
            tasks: JSON.parse(localStorage.getItem('tasks')) || []  // โหลดจาก localStorage ถ้ามีข้อมูล
        };
    },
    methods: {
        addTask() {
            if (this.newTask.trim() !== '') {
                this.tasks.push({ text: this.newTask, completed: false });
                this.newTask = '';
                this.saveTasks();  // บันทึกข้อมูลหลังจากเพิ่ม task
            }
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
            this.saveTasks();  // บันทึกข้อมูลหลังจากลบ task
        },
        saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));  // บันทึก tasks ใน localStorage
        }
    }
};
</script>

<style scoped>
.completed-task {
  text-decoration: line-through;
  color: gray;
}
body {
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

/* Input & Button styling */
input[type="text"] {
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  outline: none;
}

input[type="text"]:focus {
  border-color: #4CAF50;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

button:active {
  background-color: #388e3c;
}

/* Task List styling */
ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
  width: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1rem;
  padding: 5px;
}

input[type="checkbox"] {
  margin-right: 15px;
  cursor: pointer;
}

/* Strikethrough completed tasks */
.completed-task {
  text-decoration: line-through;
  color: gray;
}

/* Delete button styling */
button {
  background-color: #0d0e11;
  color: white;
  font-size: 0.9rem;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0d0e11;
}

button:active {
  background-color: #0d0e11;
}

/* Make sure the delete button is not too large */
button.delete {
  font-size: 0.8rem;
  padding: 3px 8px;
}

</style>
