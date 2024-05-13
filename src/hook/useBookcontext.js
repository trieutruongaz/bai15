import { useEffect,useState } from "react";
import { FetchBooks } from "../api";

const useBookContext = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
                const data = await FetchBooks();
                setBooks(data);
        };
        fetchData();
    }, []);

    return books;
};

export default useBookContext;