const express = require("express");
const cors= require("cors")
const app = express();

app.use(cors())

const people=[
  {
    id:1,
    name: "Tanvir Ahmmed",
    age: 23
  },
  {
    id:2,
    name: "Tanvir Ahmmed",
    age: 23
  },
  {
    id:3,
    name: "Tanvir Ahmmed",
    age: 23
  },
  {
    id:4,
    name: "Tanvir Ahmmed",
    age: 23
  },
]
const PORT = process.env.PORT || 5000;

app.get("/api/people", (req, res) => {
  res.json(people);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
