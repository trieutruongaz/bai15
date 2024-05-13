import { createContext, useEffect } from "react";

import { fetchBooks, createBook,updateBook,deleteBook } from "../api";
import { useState } from "react";

const BookContext = createContext();


const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(4); // Số lượng sách trên mỗi trang

    const handleCreate = async(term) => {
        const book = await createBook(term);
        if (book) setBooks([...books, book]);
    };
    
    
    const handleUpdate = async (id, term) => {
        console.log({ id, term });
        const book = await updateBook(id, term);
        setBooks(
            books.map((item) => item.id === book.id? book: item)
        );
    };


    const handleDelete = async (id) => {
        const book = await deleteBook(id);
        console.log(book);
        setBooks(books.filter((item) => item.id !== book.id));
    }
    
    useEffect(() => { 
        const fetchData = async () => {
            const tams = await fetchBooks();
            console.log(tams);
            setBooks(tams);
        };
    
        fetchData();
    }, []);
    
      // Logic phân trang
      const indexOfLastBook = currentPage * booksPerPage;
      const indexOfFirstBook = indexOfLastBook - booksPerPage;
      const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  
      const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const valueShare = {
        onCreate: handleCreate,
        onEdit: handleUpdate,
        onDelete: handleDelete,
        books: currentBooks,
        currentPage,
        booksPerPage,
        totalBooks: books.length,
        paginate,
    };

    return <BookContext.Provider value={valueShare}>{children}</BookContext.Provider>;
};
export { BookContext, Provider };