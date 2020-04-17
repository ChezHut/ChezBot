const express = require('express');
const fs = require("fs");
const app = express();

app.post("/", function(req, res, next) {
    let payload = req.body;
    res.sendStatus(200);

    if (payload.event.type == "message") {
        response_text = "No, I'm a bot user. I don't understand jokes.";
    }
});

app.get("/",(req,res) => {
    res.send("Slack Server");
});

app.listen(3000, () => {
  console.log('server started');
});
