import React from "react";

const AddTask = ({ task, setTask, tasklist, setTasklist }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      console.log(e.target.task.value);
      console.log(date.getTime());
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="task"
          placeholder="add your task here... "
          maxLength="25"
          value={task.name || ""}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
