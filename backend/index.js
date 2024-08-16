const express = require('express');
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();


const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use("/", rootRouter);

app.listen(PORT, () => {
    console.log(`Server is using port ${PORT}`)
})