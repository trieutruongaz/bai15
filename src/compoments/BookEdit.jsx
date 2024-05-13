import React, { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);
  const [des, setDes] = useState(book.des);
  const [originalTitle] = useState(book.title);
  const [originalDes] = useState(book.des);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onEdit(book.id, {
      title: title,
      des: des,
    });
  };

  const handleCancel = () => {
    setTitle(originalTitle);
    setDes(originalDes);
  };

  return (
    <div className="edit">
      <h3>Edit Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          onChange={handleChangeTitle}
          type="text"
          id="title"
          name="title"
          value={title}
        />
        <label htmlFor="des">Description:</label>
        <input
          onChange={handleChangeDes}
          type="text"
          id="des"
          name="des"
          value={des}
        />
        <input type="submit" value="Save" />
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default BookEdit;
