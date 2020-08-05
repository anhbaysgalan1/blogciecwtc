import React from 'react';
import Link from 'next/link';

import {NotePreviewStyle} from './ui/general';

const NotePreview = ({nota}) => {

    const {id, categoria, titulo, preview, urlimagen, lectura} = nota;
    
    return ( 
        <NotePreviewStyle>
            <Link href="/notes/[id]" as={`/notes/${id}`}>
                <a>
                    <img 
                        src={urlimagen}
                        alt={titulo}
                    />
                </a>
            </Link>
            <section>
                <Link href="/notes/[id]" as={`/notes/${id}`}>
                    <a>
                        <h3>{titulo}</h3>
                    </a>
                </Link>                
                <h4>{categoria}</h4>    
                <Link href="/notes/[id]" as={`/notes/${id}`}>            
                    <a>
                        <p>{preview}</p>
                    </a>
                </Link>
            </section>
            <div>
                <p>CIECWTC</p>
                <p>Lectura en {lectura}</p>
            </div>
            
        </NotePreviewStyle>
     );
}
 
export default NotePreview;