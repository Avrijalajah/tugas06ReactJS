
// import { useContext, useState } from "react";
// import { NotesDispatchContext } from "./NoteContext.jsx";

// export default function NoteForm() {
//     const [title, setText] = useState("");
//     const dispatch = useContext(NotesDispatchContext);

//     function handleChange(e) {
//         setText(e.target.value);

//     }

//     function handleClick() {
//         dispatch({ type: "ADD_NOTE", text: text });
//         setText("");
//     }

//     return (
//         <>
//             <input placeholder="Add Note" value={text} onChange={handleChange} />
//             <button onClick={handleClick}>Add</button>
//         </>
//     )
// }


// import { useState } from "react";

// export default function NoteForm({ onAddNote }) {
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [HARD, setHARD] = useState("");

//   function handleClick() {
//     if (!title && !text && !HARD) return;

//     onAddNote(title, text, HARD); //  KIRIM INPUT KE-3
//     setTitle("");
//     setText("");
//     setHARD("");
//   }

//   return (
//     <>
//       <input
//         placeholder="Title"
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <input
//         placeholder="Add Note"
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <input
//         placeholder="HARD"
//         value={HARD}
//         onChange={e => setHARD(e.target.value)}
//       />
//       <button onClick={handleClick}>Add</button>
//     </>
//   );
// }

import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [HARD, setHARD] = useState("");

  const dispatch = useContext(NotesDispatchContext);

  function handleClick() {
    if (!title && !text && !HARD) return;

    dispatch({ type: "ADD_NOTE", text: text });

    if (onAddNote) {
      onAddNote(title, text, HARD);
    }

    setTitle("");
    setText("");
    setHARD("");
  }

  return (
    <>
      <input
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <input
        placeholder="Add Note"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <input
        placeholder="HARD"
        value={HARD}
        onChange={e => setHARD(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>
    </>
  );
}
