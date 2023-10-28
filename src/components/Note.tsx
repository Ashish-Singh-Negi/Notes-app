import React, { RefCallback, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

interface NoteProps {
  noteIs: string;
  dateIs: string;
  id: string;
  deleteHandler: (idIs: string) => void;
}

const Note = ({ noteIs, dateIs, id, deleteHandler }: NoteProps) => {
  return (
    <div className="notes-card">
      <textarea
        placeholder="write your notes here..."
        defaultValue={noteIs}
        readOnly
      ></textarea>
      <div>
        <p>{dateIs}</p>
        <button onClick={() => deleteHandler(id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Note;
