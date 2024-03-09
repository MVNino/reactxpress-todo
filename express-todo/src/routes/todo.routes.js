const express = require("express");
const database = require("../config/database");

const router = express.Router();

const connection = database;

router.get("/tasks", (request, response) => {
  connection.query("SELECT * FROM tasks", (error, results) => {
    if (error) return response.status(500).send('Error in getting records.')
    
    return response.json({ data: results })
  })
});

router.post(
  "/tasks",
  (request, response, next) => {
    const { name } = request.body;

    if (!name) response.status(400).json({ message: "Name is required!" });

    next();
  },
  async (request, response) => {
    const { name } = request.body;

    // Create task record
    connection.query(
      "INSERT INTO tasks (name) values (?)",
      [name],
      (error, results) => {
        if (error) {
          return response.status(500).send("Error creating post: " + error);
        }

        response.status(201).json({ data: results });
      }
    );
  }
);

router.put(
  "/tasks/:id",
  // Validation
  (request, response, next) => {
    const { name } = request.body;

    if (!name) response.status(400).send("Name must not be empty!");

    next();
  },
  (request, response) => {
    const { name } = request.body;
    const { id } = request.params;

    var task;

    // Find task record by ID
    connection.query(
      "SELECT * FROM tasks WHERE id=?",
      [id],
      (error, results) => {
        if (error) response.status(500).send("Error in MySQL transaction.");

        if (!results.length)
          return response.status(404).send("Task not found!");
      }
    );

    connection.query(
      "UPDATE tasks SET name=? WHERE id=?",
      [name, id],
      (error, results) => {
        if (error) return response.status(500).send(`MySQL error: ${error}`);

        return response.send("Updated!");
      }
    );
  }
);

router.get("/tasks/:id", async (request, response) => {
  const { id } = request.params;

  connection.query("SELECT * FROM tasks WHERE id=?", [id], (error, results) => {
    if (error) {
      return response.status(500).send("Database transaction error: " + error);
    }

    if (!results[0]) return response.status(404).send("Task not found!");

    response.json({ data: results[0] });
  });
});

router.delete("/tasks/:id", (request, response) => {
  const { id } = request.params;

  connection.query("DELETE FROM tasks WHERE id=?", [id], (error, results) => {
    if (error) {
      return response.status(500).send("Database transaction error: " + error);
    }

    response.send("Deleted.");
  });
});

module.exports = router;
