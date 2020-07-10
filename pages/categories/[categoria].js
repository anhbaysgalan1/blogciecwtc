import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';

import {NotesStyle} from '../../components/ui/general';
import Layout from '../../components/layout/layout';
import Categories from '../../components/categories';
import useNotas from '../../hooks/useNotas'; 
import NotePreview from '../../components/notePreview';

const Categoria = () => {

    //Routing para obtener Slug
    const router = useRouter();
    const {query : {categoria}} = router;

    console.log(categoria);
    // Todos los productos
    const {notas} = useNotas ('creado'); 
    const [resultado, guardarResultado ] = useState([]);

    useEffect(() => {
        const busqueda = categoria;
        const filtro =  notas.filter(nota => {
          return (
            nota.categoria.toLowerCase().includes(busqueda) 
          )
        });
        guardarResultado(filtro);
    }, [notas]);

    console.log(resultado);
    return (
        <Layout>
            <Categories/>
            <NotesStyle>
                {resultado.map(nota => (
                      <NotePreview
                          key={nota.id}
                          nota={nota}
                      />
                ))}
            </NotesStyle>
        </Layout>    
     );
}
 
export default Categoria;