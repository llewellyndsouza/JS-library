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

let newBookButton = document.getElementById('newBook');
    newBookButton.addEventListener('click',()=>{
        displayNewbookForm();
    });

function displayNewbookForm() {
    document.window
    addBookToLibrary("testbook",69);
}