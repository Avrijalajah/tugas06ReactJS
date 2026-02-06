import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function Note({Note}) {
    const dispatch = useContext(NotesDispatchContext);
    const [isEditing, setIsEditing] = useState(false);
    function handleChangeText(e) {
        dispatch({
            ...Note,
            type: "CHANGE_NOTE",
            text: e.target.value
        })
    }
     function handleChangeDone(e) {
        dispatch({
            ...Note,
            type: "CHANGE_NOTE",
            text: e.target.checked
        })
    }
     function handleDelete(e) {
        dispatch({
            type: "DELETE_NOTE",
            id: Note.id
        })
    }

let component;

if (isEditing) {
    component = (<>
    <input value={Note.text} onChange={handleChangeText} />
    <button onClick={() => setIsEditing(false)}>Save</button>
    </>)
} else {
    component = (<>
    {Note.text}
    <button onClick={() => setIsEditing(true)}>Edit</button>
    </>)
}

function handleChangeDone(e) {
    const mewNote = {...Note, done: e.target.checked};
    onChange(mewNote);
}

return (
    <label>
        <input type="checkbox" checked={Note.done} onChange={handleChangeDone} />
        {component}
        <button onClick={handleDelete}>Delete</button>
    </label>
    );
}