import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Header from './header'

const Layout = props => {
    return (
        <div>
            <Head>
                <title>Blog - Centro Internacional de Exposiciones y Convenciones WTC</title>
                <meta name="description" content="Blog del Centro Internacional de Exposiciones y Convenciones WTC"/>
                <meta name="keywords" content="CIECWTC, WTC, HIR Expo Internacional, Blog, Turismo de Reuniones"/>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,600;1,400&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"/>
            </Head>
            <Header/>
            <main>
                {props.children}
            </main>    
            <style jsx global>{`
            html,
            body { 
                padding: 0;
                margin: 0;
                font-family: 'Poppins', sans-serif;
                color:#3f3f3f;s
                background-color:#ffffff;
            }
            * {
                box-sizing: border-box;
            }
            h1, h2, h3 {
                font-family: 'Poppins', sans-serif;
                text-transform: uppercase;
            }
            h1{
                font-size: 3rem;
                line-height: 3rem;
                color:#004b84;
                margin: .5em 0;
              }
              h2{
                font-size: 2.4rem;                                    
                line-height: 3rem;
                color:#004b84;
                margin: .5em 0;
              }
              h3{
                font-size: 1.2rem;
                color:#004b84;
                margin: .2em 0;
              }
              h4{
                font-size: 1.2rem;
                color:#b2ab8a;
                margin: .2em 0;
              }
              img{
                max-width: 100%;
              }
              input{
                font-family: 'Cabin', sans-serif;
              }     
              a{
                font-family: 'Poppins', sans-serif;
                text-decoration: none;
                color:#3f3f3f;
                font-size: 1.2em;  
                font-weight:600; 
              }
              p{
                font-size: 16px;
                color:#3f3f3f;
                font-weight:300; 
              }
            `}</style>
        </div>
      );
}
 
export default Layout;