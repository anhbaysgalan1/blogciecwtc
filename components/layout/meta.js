import React,{useEffect} from 'react';
import Head from 'next/head'

  const data = {
        title:'Últimas Noticias - CIECWTC',
        description: 'Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'
    }

const Meta = ({data}) => {
    
    return ( 
        <Head>                
            <title>{data ? data.title : null}</title>
            <meta name="description" content="Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC"/>
            <meta name="keywords" content="CIECWTC, WTC, HIR Expo Internacional, Blog, Turismo de Reuniones"/>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
        </Head>
     );
}
 
export default Meta;