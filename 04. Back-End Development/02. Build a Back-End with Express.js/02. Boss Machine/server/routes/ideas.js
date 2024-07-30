const express = require("express");
const db = require("../db.js");

const ideasRouter = express.Router();

ideasRouter.param("ideaId", (req, res, next, ideaId) => {
  if (typeof ideaId !== "number") {
    res.status(404).send(`ID ${ideaId} is not a number`);
  }
  const idea = db.getFromDatabaseById("ideas", ideaId);
  if (idea === null) {
    res.status(404).send("Idea not found");
    return;
  } else {
    req.idea = idea;
    next();
  }
});

ideasRouter.get("/", (req, res) => {
  res.send(db.getAllFromDatabase("ideas"));
});

ideasRouter.post("/", (req, res) => {
  const { name, description, numWeeks, weeklyRevenue } = req.body;
  const newIdea = db.addToDatabase("ideas", {
    name,
    description,
    numWeeks: Number(numWeeks),
    weeklyRevenue: Number(weeklyRevenue),
  });
  if (newIdea === null) {
    res.status(404).send("An error ocurred while creating the new idea");
    return;
  }
  res.status(201).send(newIdea);
});

ideasRouter.get("/:ideaId", (req, res) => {
  res.send(req.idea);
});

ideasRouter.put("/:ideaId", (req, res) => {
  const { name, description, numWeeks, weeklyRevenue } = req.body;
  const alteredIdea = db.updateInstanceInDatabase("ideas", {
    id: req.idea.id,
    name,
    description,
    numWeeks: Number(numWeeks),
    weeklyRevenue: Number(weeklyRevenue),
  });
  if (alteredIdea === null) {
    res.status(401).send("An error ocurred while updating the idea");
    return;
  }
  res.send(alteredIdea);
});

ideasRouter.delete("/:ideaId", (req, res) => {
  if (db.deleteFromDatabasebyId("ideas", req.idea.id)) {
    res.status(204).send("Deleted Successfully");
  } else {
    res.status(500).send("An error ocurred while deleting the idea");
  }
});

module.exports = ideasRouter;
