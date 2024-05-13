import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;

export const createBook = async (term) => {
    const resp = await axios.post(`${apiURL}books`, term);
    return resp.data;
};

export const fetchBooks = async () => {
    console.log(`${apiURL}books`);

    const resp = await axios.get(`${apiURL}books`);
    return resp.data;
};

export const updateBook = async (id, term) => {
    const resp = await axios.put(`${apiURL}books/${id}`, term);
    return resp.data;
};

export const deleteBook = async (id) => {
    const resp = await axios.delete(`${apiURL}books/${id}`);
    return resp.data;
};