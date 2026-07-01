class library {
  constructor(title, author) {
    this.title = title;
    this.isAvialable = true;
    this.author = author;
  }

  borrowedBook() {
    if (this.isAvialable) {
      this.isAvialable == false;
      console.log(``);
    }
  }
}
