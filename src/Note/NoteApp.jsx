import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;

const initialNotes = [];

function notesReducer(draft, action) {
  if (action.type === "ADD_STUDENT") {
    draft.push({
      id: id++,
      nama: action.nama,
      umur: action.umur,
      kelas: action.kelas,
    });
  } 
  else if (action.type === "UPDATE_STUDENT") {
    const index = draft.findIndex(s => s.id === action.id);
    draft[index].nama = action.nama;
    draft[index].umur = action.umur;
    draft[index].kelas = action.kelas;
  } 
  else if (action.type === "DELETE_STUDENT") {
    const index = draft.findIndex(s => s.id === action.id);
    draft.splice(index, 1);
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <div>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <h1>Data Siswa</h1>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </div>
  );
}
