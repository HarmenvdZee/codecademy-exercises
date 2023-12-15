const Calculate = {
  factorial(num) {
    return num === 0 ? 1 : this.factorial(num - 1) * num;
  },
};

module.exports = Calculate;
