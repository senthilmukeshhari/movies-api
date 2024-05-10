import express from "express";

const app = express();
const PORT = 2005;

app.get('/', (req, res) => {
    res.json({
        "message" : "Hii budy I'm here...."
    });
});

app.listen(PORT, () => {
    console.log(`Hii you are visit http://localhost:${PORT}`);
});