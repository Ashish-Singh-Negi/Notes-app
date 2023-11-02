import { useEffect, useState } from "react";

import Note from "./Note";
import AddNote from "./AddNote";

type NotesType = {
  id: string;
  note: string;
  date: string;
};

const Home = () => {
  const [notes, setNotes] = useState<NotesType[]>([]);

  const [noteText, setNoteTest] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

  const [isTrue, setIsTrue] = useState<boolean>(false);

  const addNoteHandler = () => {
    const date = new Date();
    noteText.trim().length >= 1
      ? setNotes((prevNotes) => {
          return [
            ...prevNotes,
            {
              id: crypto.randomUUID(),
              note: noteText,
              date: `${date.toLocaleDateString()}`,
            },
          ];
        })
      : "";
    setNoteTest("");
  };

  const deleteHandler = (idIs: string) => {
    const newNotes = notes.filter((val) => val.id !== idIs);
    setNotes(newNotes);
  };

  useEffect(() => {
    const allSavedNotes = JSON.parse(
      String(localStorage.getItem("AllSavedNotes"))
    );
    allSavedNotes ? setNotes(allSavedNotes) : "";
  }, []);

  useEffect(() => {
    isTrue ? localStorage.setItem("AllSavedNotes", JSON.stringify(notes)) : "";
    setIsTrue(true);
  }, [notes]);

  return (
    <section>
      <div className="container">
        <div className="search">
          <button>🔍</button>
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="main-container">
          {notes
            .filter((item) => item.note.toLowerCase().includes(searchText))
            .map((val) => {
              return (
                <Note
                  noteIs={val.note}
                  dateIs={val.date}
                  id={val.id}
                  deleteHandler={deleteHandler}
                  key={val.id}
                />
              );
            })}
          <AddNote
            clickHandler={addNoteHandler}
            noteTextIs={noteText}
            noteTextFunction={setNoteTest}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
