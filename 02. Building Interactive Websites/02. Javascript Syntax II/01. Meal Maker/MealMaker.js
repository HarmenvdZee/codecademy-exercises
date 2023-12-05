const menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
    this._meal = typeof mealToCheck === "string" ? mealToCheck : this._meal;
  },

  set price(priceToCheck) {
    this._price = typeof priceToCheck === "number" ? priceToCheck : this._price;
  },

  get todaysSpecial() {
    return this._meal && this._price
      ? `Today’s Special is ${this._meal} for $${this._price}!`
      : "Meal or price was not set correctly!";
  },
};

menu.meal = "pasta";
menu.price = 4;
console.log(menu);
console.log(menu.todaysSpecial);
