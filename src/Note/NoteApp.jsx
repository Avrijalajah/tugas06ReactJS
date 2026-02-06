
import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;

const initialNotes = [
  { id: id++, text: "Belajar React Dasar", done: false },
  { id: id++, text: "Belajar React Lanjutan", done: false },
  { id: id++, text: "Belajar React dengan useImmer", done: false },
  { id: id++, text: "Belajar React dengan Redux", done: false },
];

function notesReducer(draft, action) {
  if (action.type === "ADD_NOTE") {
    draft.push({
      id: id++,
      text: action.text,
      nama: action.nama,
      done: false,
    });
  } else if (action.type === "CHANGE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.id);
    draft[index].text = action.text;
    draft[index].nama = action.nama;
    draft[index].done = action.done;
  } else if (action.type === "DELETE_NOTE") {
    const index = draft.findIndex((note) => note.id === action.id);
    draft.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);
  // parameter pertama dari useImmerReducer itu fungsinya sebagai logika, aturan
  // parameter ke2 itu adalah starting data / data yang nantinya kita tambah, ubah, atau hapus

  return (
    <div>
      {/* ciri ciri parameter event hendler itu ada "on" */}
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Note App</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}

// alur create data
// 1. pembuatan logika pada parents (contoh : handleAddNote)
// 2. mengirimkan logika tersebut ke children melalui props (contoh : <NoteForm onAddNote={handleAddNote} />)
// 3. memanggil props tersebut pada children (contoh : onAddNote(text);)
// 4. membuat event handler pada children untuk menangkap event (contoh : handleClick)