import React from 'react';

import {CategoriesStyle, Btn} from './ui/general';
import useNotas from '../hooks/useNotas';
import Category from './category';

const Categories = () => {

    const {notas} = useNotas ('creado'); 

    return ( 
        <CategoriesStyle>
            {notas.map(nota => (
                <Category
                    key={nota.id}
                    nota={nota}
                />
            ))}
        </CategoriesStyle>
     );
}
 
export default Categories;