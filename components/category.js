import React from 'react';
import Link from 'next/link';

import {Btn} from './ui/general';

const Category = ({nota}) => {

    const {categoria} = nota;

    return (
        <> 
            <Link href="/categories/[categoria]" as={`/categories/${categoria}`}>
            <Btn>
                {categoria}
            </Btn>
        </Link>
        </>
     );
}
 
export default Category;