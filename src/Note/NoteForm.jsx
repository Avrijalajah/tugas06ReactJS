import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function NoteForm() {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  const dispatch = useContext(NotesDispatchContext);

  function handleClick() {
    if (!nama || !umur || !kelas) return;

    dispatch({
      type: "ADD_STUDENT",
      nama,
      umur,
      kelas,
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <>
      <input placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} />
      <input placeholder="Umur" type="number" value={umur} onChange={e => setUmur(e.target.value)} />
      <input placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} />
      <button onClick={handleClick}>Tambah Siswa</button>
    </>
  );
}
