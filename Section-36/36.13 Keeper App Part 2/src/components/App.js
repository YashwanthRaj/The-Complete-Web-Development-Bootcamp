import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function createNotes(noteObject) {
  return (
    <Note
      key={noteObject.key}
      title={noteObject.title}
      content={noteObject.content}
    />
  );
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
