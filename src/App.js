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

  // useState is a React Hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.
  // JSON.parse(...) converts the string to a JavaScript object.

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);
  // useEffect is a React Hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the first render and after every update.

  // JSON.stringify(tasklist) converts the tasklist array into a JSON string because localStorage can only store strings.

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

// React Hooks enable functional components to manage state, perform side effects, access context, and handle other React functionalities that were previously only possible in class components.
