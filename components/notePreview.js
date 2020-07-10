import React from 'react';
import {NotePreviewStyle} from './ui/general';

const NotePreview = () => {
    return ( 
        <NotePreviewStyle>
            <img 
                src="/img/leed.png"
                alt=""
            />
            <section>
                <h3>Certificación LEED: el mejor reconocimiento para proyectos sustentables.</h3>
                <h4>Turismo de Reuniones</h4>
                <p>En la actualidad el círculo empresarial es uno de los más competitivos del mundo, constantemente se generan proyectos que buscan un crecimiento exponencial constante...</p>
            </section>
            <div>
                <p>CIECWTC</p>
                <p>Lectura 2 min</p>
            </div>
        </NotePreviewStyle>
     );
}
 
export default NotePreview;