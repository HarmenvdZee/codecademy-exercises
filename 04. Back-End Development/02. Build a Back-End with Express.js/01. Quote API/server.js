const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));
app.listen(PORT, (error) => {
  if (error) console.error(error);
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/api/quotes/random", (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send(randomQuote);
});

app.get("/api/quotes", (req, res) => {
  const person = req.query.person;
  if (person) {
    const filteredQuotes = quotes.filter((quote) => quote.person === person);
    res.send(filteredQuotes);
  } else {
    res.send(quotes);
  }
});

app.post("/api/quotes", (req, res) => {
  const newQuote = req.query.quote;
  const newPerson = req.query.person;
  if (newQuote && newPerson) {
    quotes.push({ quote: newQuote, person: newPerson });
    res.send({ quote: { quote: newQuote, person: newPerson } });
  } else {
    res.status(400).send();
  }
});
