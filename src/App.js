import { useState } from "react";
import "./App.css";
import { TaskList } from "./components/TaskList";

function App() {
  const [taskNameImput, setTaskNameImput] = useState("");
  const [taskList, setTaskList] = useState([]);

  const attTaskList = (newTask) => {
    setTaskList([...taskList, newTask]);
    setTaskNameImput("");
  };

  const removeItem = (task) => {
    const newTasks = taskList.filter((item) => item !== task);
    setTaskList(newTasks);
  };

  return (
    <div className="App">
      <main className="App-header ">
        <div className="inputTarefa">
          <input
            placeholder="Nova Tarefa"
            type="text"
            value={taskNameImput}
            onChange={(event) => setTaskNameImput(event.target.value)}
          />
          <button onClick={() => attTaskList(taskNameImput)}>Enviar</button>
        </div>
        <TaskList taskList={taskList} removeItem={removeItem} />
      </main>
    </div>
  );
}

export default App;
