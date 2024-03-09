const express = require("express");
const db = require("./config/database")
const todoRoutes = require("./routes/todo.routes")
const cors = require("cors")

const app = express();

// Check database connection
db.connect((error) => {
    if (error) throw new Error('DB connect error!')

    console.log('Connection established!!')
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/api', todoRoutes)

app.listen(3000, () => "Up and running!");
