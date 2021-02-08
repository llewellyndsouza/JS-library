let myLibrary = [];

function Book(name, pages) {
  this.name = name;
  this.pages = pages;
}

function addBookToLibrary(name, pages) {
  myLibrary.push(new Book(name, pages));
}

function printAllBooks() {
  myLibrary.forEach((currentItem) => {
    console.log(currentItem.name + " " + currentItem.pages);
  });
}

let newBookButton = document.getElementById("newBook");
newBookButton.addEventListener("click", () => {
  displayNewbookForm();
});

function displayNewbookForm() {
    let overlay = document.getElementById('form-overlay');
    overlay.style.display = 'grid';
}

function addBookButton() {
  console.log("hits here");
  let bookName = document.getElementById("bookname");
  let pages = document.getElementById("pages");

  addBookToLibrary(bookName.value, pages.value);

  bookName.value = '';
  pages.value = '';

  // Hides the overlay/book add form
  let overlay = document.getElementById('form-overlay');
    overlay.style.display = 'none';
}
