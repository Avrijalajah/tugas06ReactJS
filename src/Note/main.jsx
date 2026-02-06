import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./NoteApp.jsx";
// creatroot digunakan untuk membuat react pada elemen
// dom tujuan (biasanya <div id="root"></div>) guna merender react

createRoot(document.getElementById("root")).render(
    // strict mode digunakan untuk memperbaiki bug react
    <StrictMode>
        <NoteApp />
    </StrictMode>
);