import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout/layout';
import Hero from '../components/hero';
import Categories from '../components/categories';
import Notes from '../components/notes';

const Home = () => {
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
            title="Últimas Noticias"
        />
        <Categories/>
        <Notes/>
    </Layout>
   );
}
 
export default Home;