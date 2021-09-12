import axios from "axios";


     // Deletes the book with the given id
   function deleteBook(id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  }
  // Saves a book to the database
   function saveBook (bookData) {
     console.log(bookData)
    return axios.post("/api/", bookData).then(result => result.data).catch(err => {
      console.log(err);
  });
  }
  // Get the saved a books from the database
   function savedBooks() {
    return axios.get("/api/books").then(result => result.data);

}

const API = {
  deleteBook,
  saveBook,
  savedBooks
}

export default API