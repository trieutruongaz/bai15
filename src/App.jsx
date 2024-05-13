import BookCreate from "./compoments/BookCreate";
import BookList from "./compoments/BookList";
import { useState, useEffect, useContext } from "react";
import { BookContext } from "./context/book";
import { fetchBooks } from "./api";
import "./App.css";

const App = () => {
  const { books, currentPage, totalBooks, booksPerPage, paginate } =
    useContext(BookContext);
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const { onCreate, onEdit, onDelete } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [fetchedBooks, setFetchedBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedBooksData = await fetchBooks();
      setFetchedBooks(fetchedBooksData);
    };
    fetchData();
  }, []);

  const filteredBooks = fetchedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wrapper">
      <div className="container-app">
        <h1 className="text">READING BOOK  <span>
          </span></h1>
        <div className="window">
          <BookList books={filteredBooks} onDelete={onDelete} onEdit={onEdit} />
        </div>
        <div className="pagination-info">
  <button
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
  >
    &lt;
  </button>
  <span className="page-number">{currentPage}</span>
  <button
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    &gt;
  </button>
</div>

      </div>
      <BookCreate onCreate={onCreate} />
    </div>
    
  );
  
};
export default App;
