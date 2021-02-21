let Library = (function () {
    //cacheDOM
    //Bind Events
    //Render
  let books = [];
  let addBookButton = document.querySelector('.addBookButton');
  let container = document.querySelector('.container');

  function init () {
      console.log(`Initializing`);
      bindEvents();
  };

  function bindEvents() {
      addBookButton.addEventListener('click',addBookFormParse);
  }
function addBookFormParse() {
    console.log(`Parsing form`);
    addBook('another Book');
}
  function bindContainerEvents() {
    let delBtns = document.querySelectorAll(".deleteBook");
    delBtns.forEach((btn) => {
      btn.addEventListener("click", deleteBook);
    });
  }

  function addBook(newBook) {
      books.push({newBook});
  }

  function showBooks() {
      console.log(books);
  }

  function deleteBook(e) {
    console.log(e.target.parentNode.attributes.key.value);
  }

  init();

  return {
      addBook,
      showBooks,
  }
})();
