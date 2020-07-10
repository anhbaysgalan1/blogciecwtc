import React, {useState} from 'react';
import Router from 'next/router';
import firebase from '../firebase';

import {LoginStyle, FormInput, Error} from '../components/ui/general';
import useValidacion from '../hooks/useValidacion';
import validarIniciarSesion from '../validacion/validarIniciarSesion';

const STATE_INICIAL = {
    email: '',
    password: ''
  }

const Login = () => {

    const [ error, guardarError] = useState(false);
    const { valores, errores, handleSubmit, handleChange } = useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);
    const { email, password } = valores;
  
    async function iniciarSesion() {
        try {
            await firebase.login(email, password);
            Router.push('/note');
        } catch (error) {
            console.error('Hubo un error al autenticar el usuario ', error.message);
            guardarError(error.message);
        }
    }

    return ( 
        <LoginStyle>
            <div>
                <img src="https://ciecwtc.com/img/ciec/ciec.png" alt="CIECWTC"/>
                <form
                    onSubmit={handleSubmit}
                    noValidate   
                >
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"   
                        placeholder="Email"      
                        value={email}
                        onChange={handleChange}           
                    />
                    {errores.email && <Error>{errores.email}</Error> }
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"                    
                        placeholder="Password" 
                        value={password}
                        onChange={handleChange}                
                    />
                    {errores.password && <Error>{errores.password}</Error> }
                    {error && <Error>{error} </Error>}                    
                    <FormInput
                        type="submit"
                        value="INGRESAR"
                    />
                </form>
            </div>
        </LoginStyle>
     );
}
 
export default Login;