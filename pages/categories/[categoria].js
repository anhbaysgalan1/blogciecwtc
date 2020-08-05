import React, { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
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
            <Head>                
                <title>Últimas Noticias</title>
                <meta
                    key="description"
                    name="description"
                    content='Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'
                />         
                <meta
                    key="og:type"
                    name="og:type"
                    content='website'
                />
                <meta
                    key="og:title"
                    name="og:title"
                    content='Últimas Noticias'
                />
                <meta
                    key="og:description"
                    name="og:description"
                    content='Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'
                />
                <meta
                    key="og:url"
                    name="og:url"
                    content='https://blog.ciecwtc.com/'
                />
                <meta
                    key="og:image"
                    name="og:image"
                    content='https://ciecwtc.com/img/ciec/ciec.png'
                />               
                <meta name="keywords" content="CIECWTC, WTC, HIR Expo Internacional, Blog, Turismo de Reuniones"/>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
            </Head> 
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