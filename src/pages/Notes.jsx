import { Query } from 'appwrite'; 
import { useEffect, useState} from 'react'
import db from '../appwrite/databases';
import NoteForm from '../components/NoteForm';
import Note from '../components/Note';

function Notes() {

  const [notes, setNotes] = useState([]); 

  useEffect(() => { 
    init();
  }, []);

  const init = async () => {
      const response = await db.notes.list(
        [Query.orderDesc('$createdAt')]
      );
    setNotes(response.documents);
  };



  return (
    <div>

      <NoteForm setNotes={setNotes}/>
       
      <div>
        {notes.map((note) => (
          <Note key={note.$id} noteData={note}/>
      
        ))}
      </div>
    </div>
  )
}

export default Notes