class Shopcart {
  constructor(items) {
    this.item = [];
  }
  additem(itemName,price) {
    this.item.push({itemName,price});
    console.log(Added $)
  }
}
