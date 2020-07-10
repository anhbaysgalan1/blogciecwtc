import React from 'react';

import {NotesStyle} from './ui/general';
import useNotas from '../hooks/useNotas';
import NotePreview from './notePreview';

const Notes = () => {

    const {notas} = useNotas ('creado'); 

    return ( 
        <NotesStyle>
            {notas.map(nota => (
                <NotePreview
                    key={nota.id}
                    nota={nota}
                />
            ))}
        </NotesStyle>
      );
}
 
export default Notes;