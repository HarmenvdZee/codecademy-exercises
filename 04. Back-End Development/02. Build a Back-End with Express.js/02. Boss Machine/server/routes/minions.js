const express = require("express");
const minionRouter = express.Router();
const db = require("../db.js");

minionRouter.param("minionId", (req, res, next, minionId) => {
  if (typeof minionId !== "number") {
    res.status(404).send(`ID ${minionId} is not a number`);
  }
  const minion = db.getFromDatabaseById("minions", minionId);
  if (minion === null) {
    res.status(404).send(`No minion found with ID ${minionId}`);
    return;
  } else {
    req.minion = minion;
    next();
  }
});

minionRouter.get("/", (req, res) => {
  const minions = db.getAllFromDatabase("minions");
  res.status(200).send(minions);
});

minionRouter.post("/", (req, res) => {
  const { name, title, salary } = req.body;
  const newMinion = db.addToDatabase("minions", { name, title, salary });
  res.status(201).send(newMinion);
});

minionRouter.get("/:minionId", (req, res) => {
  res.status(200).send(req.minion);
});

minionRouter.put("/:minionId", (req, res) => {
  const { name, title, salary } = req.body;
  const newMinionData = {
    id: req.minion.id,
    name,
    title,
    salary: Number(salary),
  };
  const alteredMinion = db.updateInstanceInDatabase("minions", newMinionData);
  if (alteredMinion === null) {
    res.status(400).send("An error ocurred while updating the minion");
  } else {
    res.status(200).send(alteredMinion);
  }
});

minionRouter.delete(":minionId", (req, res) => {
  if (db.deleteFromDatabasebyId("minions", req.minion.id)) {
    res.status(204).send("Minion deleted successfully");
  } else {
    res.status(500).send("An error ocurred while deleting the minion");
  }
});

module.exports = minionRouter;
