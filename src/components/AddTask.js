import React from "react";

const AddTask = ({ task, setTask, tasklist, setTasklist }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting

    // e.preventDefault(); stops the default action that belongs to the event. For example, preventing a form from submitting, a link from following the URL, or a button from submitting a form.

    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
              // It formats the date and time according to the user's locale settings
            }
          : todo
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      // used in JavaScript to create a new Date object representing the current date and time.

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
