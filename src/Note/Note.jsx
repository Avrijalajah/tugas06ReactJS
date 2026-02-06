import { useContext } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function Note({ Note: siswa }) {
  const dispatch = useContext(NotesDispatchContext);

  function handleDelete() {
    dispatch({ type: "DELETE_STUDENT"});
  }

  function handleEdit() {
    const nama = prompt("Edit nama:", siswa.nama);
    const umur = prompt("Edit umur:", siswa.umur);
    const kelas = prompt("Edit kelas:", siswa.kelas);

    if (nama && umur && kelas) {
      dispatch({
        type: "UPDATE_STUDENT",
        nama,
        umur,
        kelas,
      });
    }
  }

  return (
    <tr>
      <td>{siswa.nama}</td>
      <td>{siswa.umur}</td>
      <td>{siswa.kelas}</td>
      <td>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Hapus</button>
      </td>
    </tr>
  );
}
