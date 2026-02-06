// import Note from "./Note.jsx";
// import { useContext } from "react";
// import { NotesContext } from "./NoteContext.jsx";

// export default function NoteList() {
//     const notes = useContext(NotesContext);
//     return (
//         <ul>
//             {notes.map(note => (
//                 <li key={note.id}>
//                     <Note Note={note}/>
//                 </li>
//             ))}
//         </ul>
//     )
// }


import Note from "./Note.jsx";
import { useContext } from "react";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Umur</th>
          <th>Kelas</th>
        </tr>
      </thead>
      <tbody>
        {notes.map(note => (
          <Note key={note.id} Note={note} />
        ))}
      </tbody>
    </table>
  );
}
