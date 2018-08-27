import express from "express";

let app = express();

app.get("/*", (req, res) => {
  res.send("Hi Nick");
});

app.listen(3000, () => console.log("Running on localhost:3000"));
