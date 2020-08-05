import React from 'react';
import Link from 'next/link'

import Meta from './meta';
import Header from './header'
import Footer from './footer'

const Layout = props => {
    return (
        <div>
            <Meta/>
            <Header/>
            <main>
                {props.children}
            </main>   
            <Footer/>
            <style jsx global>{`
            html,
            body { 
                padding: 0;
                margin: 0;
                font-family: 'Poppins', sans-serif;
                color:#3f3f3f;
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