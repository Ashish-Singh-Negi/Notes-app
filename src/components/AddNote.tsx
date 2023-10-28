import React from "react";

interface PropsType {
  clickHandler : ()=> void,
  noteTextIs: string,
  noteTextFunction : (para:string)=>void
}

const AddNote = ({ clickHandler, noteTextIs, noteTextFunction }:PropsType) => {
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
