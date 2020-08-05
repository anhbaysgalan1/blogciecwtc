import React from 'react';

import {CategoriesStyle} from './ui/general';
import useNotas from '../hooks/useNotas';
import Category from './category';

const Categories = () => {

    const {notas} = useNotas ('creado'); 
    function eliminarObjetosDuplicados(arr, prop) {
        var nuevoArray = [];
        var lookup  = {};    
        for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
        }    
        for (i in lookup) {
            nuevoArray.push(lookup[i]);
        }    
        return nuevoArray;
   }

   var notasFinales = eliminarObjetosDuplicados(notas, 'categoria');

    return ( 
        <CategoriesStyle>
            {notasFinales.map(nota => (
                <Category
                    key={nota.id}
                    nota={nota}
                />
            ))}
        </CategoriesStyle>
     );
}
 
export default Categories;