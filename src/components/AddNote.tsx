import React from "react";

const AddNote = ({ clickHandler, noteTextIs, noteTextFunction }) => {
  return (
    <div className="add-notes-card">
      <textarea
        placeholder="write your notes here..."
        value={noteTextIs}
        onChange={(e) => noteTextFunction(e.target.value)}
      ></textarea>
      <div>
        <p></p>
        <button onClick={clickHandler}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
