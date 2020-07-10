import React from 'react';

import {NotesStyle} from './ui/general';
import NotePreview from './notePreview';

const Notes = () => {
    return ( 
        <NotesStyle>
            <NotePreview/>         
            <NotePreview/>         
            <NotePreview/>         
        </NotesStyle>
      );
}
 
export default Notes;