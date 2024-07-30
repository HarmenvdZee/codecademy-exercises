const express = require("express");
const db = require("../db.js");

const meetingsRoute = express.Router();

meetingsRoute.get("/", (req, res) => {
  res.send(db.getAllFromDatabase("meetings"));
});

meetingsRoute.post("/", (req, res) => {
  const createMeeting = db.createMeeting();
  res.send(db.addToDatabase("meetings", createMeeting));
});

meetingsRoute.delete("/", (req, res) => {
  if (db.deleteAllFromDatabase("meetings")) {
    res.status(204).send("Deleted successfully");
  } else {
    res.status(500).send("An error ocurred while deleting the meetings");
  }
});

module.exports = meetingsRoute;
