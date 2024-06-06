import "./App.css";
import { useEffect, useState } from "react";
import ShowTask from "./components/ShowTask";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
function App() {
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="parent">
      {" "}
      <div className="App">
        <Header />
        <AddTask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
        <ShowTask
          task={task}
          setTask={setTask}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
