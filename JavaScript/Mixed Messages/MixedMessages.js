const message = {
  _person: [
    "A priest",
    "A teacher",
    "A doctor",
    "A lawyer",
    "A police officer",
  ],
  _action: [
    "ate",
    "killed",
    "stole",
    "destroyed",
    "burned",
    "broke",
    "sold",
    "bought",
  ],
  _thing: [
    "a book",
    "a car",
    "a house",
    "a computer",
    "a phone",
    "a dog",
    "your mom",
  ],
  _place: [
    "at school",
    "in a park",
    "at a party",
    "at a concert",
    "at a bar",
    "on a mountain",
  ],
  _time: [
    "in the morning",
    "on his birthday",
    "on a rainy day",
    "on election day",
    "on christmas",
  ],

  makeMessage() {
    const personIndex = Math.floor(Math.random() * this._person.length);
    const actionIndex = Math.floor(Math.random() * this._action.length);
    const thingIndex = Math.floor(Math.random() * this._thing.length);
    const placeIndex = Math.floor(Math.random() * this._place.length);
    const timeIndex = Math.floor(Math.random() * this._time.length);

    return `${this._person[personIndex]} ${this._action[actionIndex]} ${this._thing[thingIndex]} ${this._place[placeIndex]} ${this._time[timeIndex]}.`;
  },
};

console.log(message.makeMessage());