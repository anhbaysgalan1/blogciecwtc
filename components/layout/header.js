import React, {useState, useEffect ,useContext} from 'react';
import Link from 'next/link'
import {FirebaseContext} from '../../firebase';

import {Nav, HeaderStyle} from '../ui/general';

const Header = () => {

    const {usuario , firebase} = useContext(FirebaseContext);
    return ( 
        <>
            {usuario ? (
                <Nav>
                    <Link href="/">
                        <a>Notas</a>
                    </Link>
                    <Link href="/note">
                        <a>+ Nota</a>
                    </Link>
                    <a
                        onClick={() => firebase.cerrarSesion()}
                    >Salir</a>            
                </Nav>
            ): null}
            <HeaderStyle>
                <Link href="/">
                    <a>
                        <img src="https://ciecwtc.com/img/ciec/ciec.png" alt="CIECWTC"/>
                    </a>
                </Link>
            </HeaderStyle>        
        </>
     );
}
 
export default Header;