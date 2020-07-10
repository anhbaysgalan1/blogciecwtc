import React from 'react';

import {HeroStyle} from './ui/general'; 

const Hero = ({title}) => {
    return ( 
        <HeroStyle>
            <div>
                <h1>{title}</h1>
            </div>
        </HeroStyle>
     );
}
 
export default Hero;