import express from "express";
const app = express();
const PORT = 5000;

let users = [
  {
    id: 1,
    name: "Esli",
    surname: "Nesirova",
  },
  {
    id: 2,
    name: "Ilkin",
    surname: "Ahmedov",
  },
  {
    id: 3,
    name: "Nura",
    surname: "Suri",
  },
];

app.post("/", (req, res) => {
  res.send("Post");
});
app.delete("/", (req, res) => {
  res.send("Delete");
});
app.put("/", (req, res) => {
  res.send("put");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const item = users.find((x) => x.id === +id);
  res.send(item);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const item = users.find((x) => x.id == id);
  const filteredUsers = users.filter((x) => x.id != id);

  if (item) {
    res.send(filteredUsers);
  }

 
});



app.listen(PORT, () => {
  console.log("website 5000 portunda isleyir");
});
