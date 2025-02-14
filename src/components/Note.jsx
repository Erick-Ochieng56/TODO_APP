 /* eslint-disable react/prop-types */
import { useState } from 'react'
import db from '../appwrite/databases';
import DeleteIcon from '../assets/DeleteIcon';
 

function Note({noteData}) {
    const [note, setNote] = useState(noteData);

    const handleUpdate = async () => {
        const completed =!note.completed
        db.notes.update(note.$id, { completed }); 
        setNote({...note, completed: completed});
    };

  return (
    <div>
        <span onClick={handleUpdate}>
            {note.completed ? <s>{note.body}</s> : <>{note.body}</>}
        </span>

        <div>
        <DeleteIcon/>
        </div>
        </div>
  )
}

export default Note