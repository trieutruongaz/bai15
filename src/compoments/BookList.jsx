import BookShow from "./BookShow";
import { BookContext } from "../context/book";
import { useContext } from "react";
import { useState, useEffect } from "react";

const BookList = () => {
  const {
    books,
    onDelete,
    onEdit,
    currentPage,
    totalBooks,
    booksPerPage,
    paginate,
  } = useContext(BookContext);
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  const [searchTerm, setSearchTerm] = useState(""); // State để lưu từ khóa tìm kiếm
  const [searchResults, setSearchResults] = useState([]); // State để lưu kết quả tìm kiếm

  // Hàm xử lý tìm kiếm
  const handleSearch = () => {
    const results = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  // Sử dụng useEffect để lọc danh sách sách mỗi khi searchTerm thay đổi
  useEffect(() => {
    handleSearch();
  }, [searchTerm, books]);

  return (
    <div className="book-list">
      <input
        className="search"
        type="text"
        placeholder="Tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm
        ? searchResults.map((book) => (
            <BookShow
              key={book.id}
              book={book}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        : books.map((book) => (
            <BookShow
              key={book.id}
              book={book}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
    </div>
  );
};
export default BookList;
