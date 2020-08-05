import React, { useEffect, useContext, useState } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { FirebaseContext } from '../../firebase';

import Meta from '../../components/layout/meta';
import Layout from '../../components/layout/layout';
import Categories from '../../components/categories';
import {NoteStyle, Btn, Share} from '../../components/ui/general';

const Note = () => {

    const [nota, guardarNota] = useState({});
    const [error, guardarError] = useState(false);
    const [consultarDB, guardarConsultarDB ] = useState(true);

    //Routing para obtener Slug
    const router = useRouter();
    const {query : {id}} = router;

    // context de firebase
    const { firebase, usuario } = useContext(FirebaseContext);        

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
    }, [id, nota]);

      // elimina un producto de la bd
      const eliminarProducto = async () => {

        if(!usuario) {
            return router.push('/login')
        }

        try {
            await firebase.db.collection('notas').doc(id).delete();
            router.push('/')
        } catch (error) {
            console.log(error);
        }
      }    

    //Obtener todos los datos de las historias
    const {titulo, categoria, urlimagen, preview, parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, parrafo6, parrafo7, parrafo8, parrafo9, parrafo10, youtube} = nota;

    var URL = 'https://blog-ciecwtc.vercel.app//notes/' + id;
    var URLFacebook = 'https://www.facebook.com/sharer/sharer.php?u=' + URL;
    var URLTwitter = 'https://twitter.com/intent/tweet?text=&url=' + URL;
    var URLLinkedin = 'https://www.linkedin.com/sharing/share-offsite/?url=' + URL;
    var URLYoutube = 'https://www.youtube.com/embed/' + youtube;    
    
    const SEO = {
      title: titulo,
      description: preview,
      openGraph: {
          type: 'website',
          url: URL,
          title: titulo,
          description: preview,
          image: urlimagen,
      }    
    };

    return (
      <Layout>
        <Head>                
            <title>{titulo ? titulo : 'Últimas Noticias'}</title>
            <meta
                key="description"
                name="description"
                content={ preview ? preview : 'Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'}
            />         
            <meta
                key="og:type"
                name="og:type"
                content='website'
            />
            <meta
                key="og:title"
                name="og:title"
                content={titulo ? titulo : 'Últimas Noticias'}
            />
            <meta
                key="og:description"
                name="og:description"
                content={ preview ? preview : 'Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'}
            />
            <meta
                key="og:url"
                name="og:url"
                content={URL}
            />
            <meta
                key="og:image"
                name="og:image"
                content={urlimagen ? urlimagen : 'https://ciecwtc.com/img/ciec/ciec.png'}
            />               
            <meta name="keywords" content="CIECWTC, WTC, HIR Expo Internacional, Blog, Turismo de Reuniones"/>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
        </Head>
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
          { youtube ? <iframe  width="100%" height="400" src={URLYoutube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : null}          
          <Share>
            <h3>Compartir</h3>
            <a href={URLFacebook} target="blank"><img src="/icon/facebook.svg" alt="Facebook"/></a>
            <a href={URLTwitter} target="blank"><img src="/icon/twitter.svg" alt="Twitter"/></a>
            <a href={URLLinkedin} target="blank"><img src="/icon/linkedin.svg" alt="Instagram"/></a>
          </Share>
          {usuario ? <Btn onClick={eliminarProducto}>Eliminar Nota</Btn> : null}
        </NoteStyle>        
      </Layout>
    );
}
 
export default Note;