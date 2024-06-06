import React from "react";

const ShowTask = ({ task, setTask, tasklist, setTasklist }) => {
  //   const tasks = [
  //     {
  //       id: 10001,
  //       name: "TASK A",
  //       time: "2:09:01 AM 9/14/2024",
  //     },
  //     {
  //       id: 10211,
  //       name: "TASK B",
  //       time: "2:09:01 AM 9/14/2024",
  //     },
  //     {
  //       id: 10341,
  //       name: "TASK C",
  //       time: "2:09:01 AM 9/14/2024",
  //     },
  //     {
  //       id: 10331,
  //       name: "TASK D",
  //       time: "2:09:01 AM 9/14/2024",
  //     },
  //   ];

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    console.log(selectedTask);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTasklist);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>

      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
