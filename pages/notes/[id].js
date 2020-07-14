import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';

import Layout from '../../components/layout/layout';
import Categories from '../../components/categories';
import {NoteStyle} from '../../components/ui/general';

const Note = () => {

    const [nota, guardarNota] = useState({});
    const [error, guardarError] = useState(false);
    const [consultarDB, guardarConsultarDB ] = useState(true);

    //Routing para obtener Slug
    const router = useRouter();
    const {query : {id}} = router;

    // context de firebase
    const { firebase } = useContext(FirebaseContext);        

    useEffect(() => {
      if(id && consultarDB) {
          const obtenerNota = async () => {
              const notaQuery = await firebase.db.collection('notas').doc(id);
              const nota = await notaQuery.get();
              //console.log(nota.data());
              if(nota.exists) {
                  guardarNota( nota.data() );
                 guardarConsultarDB(false);
              } else {
                  guardarError(true);
                  guardarConsultarDB(false);
              }
          }
          obtenerNota();
      }
    }, [id]);

    //Obtener todos los datos de las historias
    const { titulo, categoria, urlimagen, parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, parrafo6, parrafo7, parrafo8, parrafo9, parrafo10, lectura} = nota;

    return (
      <Layout>
        <Categories/>
        <NoteStyle>
          <img 
            src={urlimagen}
            alt={titulo}
          />
          <h2>{titulo}</h2>
          <h3>{categoria}</h3>
          <p>{parrafo1}</p>
          <p>{parrafo2}</p>
          <p>{parrafo3}</p>
          <p>{parrafo4}</p>
          <p>{parrafo5}</p>
          <p>{parrafo6}</p>
          <p>{parrafo7}</p>
          <p>{parrafo8}</p>
          <p>{parrafo9}</p>
          <p>{parrafo10}</p>
        </NoteStyle>
      </Layout>
    );
}
 
export default Note;