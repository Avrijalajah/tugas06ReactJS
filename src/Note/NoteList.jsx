import Note from "./Note.jsx";
import { useContext } from "react";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
    const notes = useContext(NotesContext);
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note Note={note}/>
                </li>
            ))}
        </ul>
    )
}