let Library = (function () {
  //cacheDOM
  let books = [
    {
      name: "bookName1",
      author: "authorName1",
      progress: "pageProgress1",
    },
    {
      name: "bookName2",
      author: "authorName2",
      progress: "pageProgress2",
    },
  ];
  let addBookButton = document.querySelector(".addBookButton");
  let container = document.querySelector(".container");

  function init() {
    console.log(`Initializing`);
    bindEvents();
    render();
  }

  //Bind Events
  function bindEvents() {
    console.log("Binding add book event");
    addBookButton.addEventListener("click", addBookFormParse);
  }

  function bindContainerEvents() {
    console.log("Adding events for delete buttons");
    let delBtns = document.querySelectorAll(".deleteBook");
    delBtns.forEach((btn) => {
      btn.addEventListener("click", deleteBook);
    });
  }

  //Helper functions

  function addBook(bookName, authorName, pageProgress) {
    books.push({
      name: bookName,
      author: authorName,
      progress: pageProgress,
    });
    render();
  }

  function renderBookContainer(book,i) {
    let elemBook = document.createElement("div");
    elemBook.className = "book";
    elemBook.setAttribute("key",`${i}`)
    let elem_BookName = document.createElement("p");
    elem_BookName.className = "bookName";
    elem_BookName.innerText = book.name;
    let elem_AuthorName = document.createElement("p");
    elem_AuthorName.className = "authorName";
    elem_AuthorName.innerText = book.author;
    let elem_PageProg = document.createElement("p");
    elem_PageProg.className = "pageProgress";
    elem_PageProg.innerText = book.progress;
    elemBook.appendChild(elem_BookName);
    elemBook.appendChild(elem_AuthorName);
    elemBook.appendChild(elem_PageProg);
    let edit = document.createElement("button");
    edit.className = "editBook";
    edit.innerText = "Edit";
    elemBook.appendChild(edit);
    let del = document.createElement("button");
    del.className = "deleteBook";
    del.innerText = "Delete";
    elemBook.appendChild(del);
    container.appendChild(elemBook);
  }

  function addBookFormParse() {
    console.log(`Parsing form data`);
    addBook("book Name 3", "author Name3", "56/154");
  }

  function deleteBook(e) {
    console.log("Deleting book");
    let delIndex = parseInt(e.target.parentElement.attributes.key.value);
    books.splice(delIndex,1);
    render();
  }

  //Render
  function render() {
    console.log("Rendering books");
    container.innerText = "";
    books.forEach((book,i) => renderBookContainer(book,i));
    console.log(books);
    bindContainerEvents();
  }

  init();

  return {
    addBook,
    render,
  };
})();
