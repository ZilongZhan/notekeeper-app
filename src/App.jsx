import { NotesList, CreateNoteForm } from "./components";
import { useNotes } from "./hooks";

function App() {
  const { notes, handleSetNotes } = useNotes();

  return (
    <>
      <h1>Notekeeper App</h1>
      <CreateNoteForm notes={notes} handleSetNotes={handleSetNotes} />
      <NotesList notes={notes} handleSetNotes={handleSetNotes} />
    </>
  );
}

export default App;
