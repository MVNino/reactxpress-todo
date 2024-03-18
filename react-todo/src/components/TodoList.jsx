import { useEffect, useState } from "react";
// import TodoShow from "./TodoShow";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

  return (
    <div className="cards">
      {tasks?.length ? (
        <>
          {tasks.map((task) => (
            <>
              <div className="card-item">
                <p className="card-heading">{task.name}</p>
                <p className="card-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt, molestias.
                </p>

                <div className="flex justify-center">
                  {/* <Link to={`/tasks/${task.id}`} /> */}
                  <a href="#" className="button-primary text-decoration-none">
                    View more
                  </a>
                </div>
              </div>

                {/* <Route exact path={`/tasks/${task.id}`} component={TodoShow} /> */}
            </>
          ))}
        </>
      ) : (
        <>No tasks</>
      )}
    </div>
  );
};

export default TodoList;
