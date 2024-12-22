/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import db from '../appwrite/databases';

function NoteForm({ setNotes }) {

const handleAdd = async (e) =>{
    e.preventDefault()
    const noteBody =e.target.body.value;

    if(noteBody == "") return 


    try{
        const payload = {body:noteBody}

        const response = await db.notes.create(payload)
        setNotes((prevState) => [response, ...prevState])

        e.target.reset()
     }
    catch (error) { 
        console.error(error);

     }
}

  return (
    <form>
        <input type="text" name="body" placeholder="🤔 Whats on the Agenda?"/>
    </form>
  )
}

export default NoteForm