import BookEdit from "./BookEdit";
import { useState } from "react";
import "../App.css"


const BookShow = ({ book, onDelete, onEdit }) => {
  console.log(book);
  const image = `http://picsum.photos/seed/${book.id}/200/300`;
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (id, term) => {
    onEdit(id, term);
    setIsEdit(false);
  };
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2 className="text">{book.title}</h2>
          <p className="text">{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
      {!isEdit && (
        <>
          <button className="delete" onClick={() => onDelete(book.id)}>
            delete
          </button>
          <button className="delete" onClick={() => setIsEdit(!isEdit)}>
            edit
          </button>
        </>
      )}
    </div>
  );
};

export default BookShow;
