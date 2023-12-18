import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

const showBackground = true;

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

const displayFacts = (e) => {
  const animal = animals[e.target.alt];
  const randomIndex = Math.floor(Math.random() * animal.facts.length);
  const funFact = animal.facts[randomIndex];
  document.getElementById("fact").innerHTML = funFact;
};

const images = [];
for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFacts}
    />
  );
}

const title = "";
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);
