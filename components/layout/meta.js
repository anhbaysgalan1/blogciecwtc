import React,{useEffect} from 'react';
import Head from 'next/head'

const Meta = ({data}) => {
    
    return ( 
        <Head>                
            <title>{data ? data.title : 'Últimas Noticias - CIECWTC'}</title>
            <meta
                key="description"
                name="description"
                content={data ? data.description : 'Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'}
            />
            <meta
                key="og:type"
                name="og:type"
                content={data ? data.openGraph.type : 'website'}
            />
            <meta
                key="og:title"
                name="og:title"
                content={data ? data.openGraph.title : 'Últimas Noticias - CIECWTC'}
            />
            <meta
                key="og:description"
                name="og:description"
                content={data ? data.openGraph.description : 'Últimas Noticias del Centro Internacional de Exposiciones y Convenciones WTC'}
            />
            <meta
                key="og:url"
                name="og:url"
                content={data ? data.openGraph.url : 'http://blog.ciecwtc.com/'}
            />
            <meta
                key="og:image"
                name="og:image"
                content={data ? data.openGraph.image : 'https://ciecwtc.com/img/ciec/ciec.png'}
            />            
            <meta name="keywords" content="CIECWTC, WTC, HIR Expo Internacional, Blog, Turismo de Reuniones"/>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
        </Head>
     );
}
 
export default Meta;