import React from 'react';
import {LoginStyle, FormInput} from '../components/ui/general';

const Login = () => {
    return ( 
        <LoginStyle>
            <div>
                <img src="https://ciecwtc.com/img/ciec/ciec.png" alt="CIECWTC"/>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"   
                        placeholder="Email"                 
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"                    
                        placeholder="Password"                 
                    />
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