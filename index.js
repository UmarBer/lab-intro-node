class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  }

  avg() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
}

new SortedList();
module.exports = SortedList;
