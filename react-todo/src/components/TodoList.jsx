import { useEffect, useState } from "react";
import Modal from "./Modal";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await fetch(`http://localhost:3000/api/tasks`);

    const { data } = await response.json();

    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  console.log("tasks : ", tasks);

  return (
    <>
      <h1>TASKS</h1>

      {tasks.length ? (
        <>
          <div className="container flex ml-10 mt-10 justify-start">
            <Modal buttonLabel="Add Task" />
          </div>

          <div className="flex flex-wrap sm:justify-around md:justify-start md:px-3 md:mx-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="mx-2 my-4 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <div className="px-6 py-4">
                  <h2
                    className="text-xl font-semibold text-gray-800"
                    onClick={() => {
                      console.log("double clicked!");
                    }}
                  >
                    {task.name}
                  </h2>
                </div>
                <div className="px-6 py-4">
                  <Modal buttonLabel="Update Task" task={task} />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>No tasks.</div>
      )}
    </>
  );
};

export default TodoList;
