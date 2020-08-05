import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';

import {NotesStyle} from '../../components/ui/general';
import Hero from '../../components/hero';
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
        const busqueda = categoria.toLowerCase();
        const filtro =  notas.filter(nota => {
          return (
            nota.categoria.toLowerCase().includes(busqueda) 
          )
        });
        guardarResultado(filtro);
    }, [categoria, notas]);

    //console.log(resultado);
    return (
        <Layout>
            <Hero
            title={categoria}
            />
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