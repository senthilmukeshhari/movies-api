import express from "express";
import movieRouter from "./routers/movies.router.js";

const app = express();
const PORT = 2005;

// Movies API Routers
app.use('/movies', movieRouter);

app.listen(PORT, () => {
    console.log(`Hii you are visit http://localhost:${PORT}`);
});