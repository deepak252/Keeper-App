import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

// function Card()

function App() {
  return (
    <div>
      <Header />
      { notes.map( note =>( <Note key={note.key}  title={note.title} content={note.content}></Note> ))
      }
      <Footer />
    </div>
  );
}

export default App;
