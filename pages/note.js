import React from 'react';

import {Form, FormInput} from '../components/ui/general';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';

const Note = () => {
    return ( 
        <Layout>
        <Hero
            title="Nueva Nota"
        />
        <Form>
            <form>
                <div>
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        type="text"
                        id="fecha"
                        name="fecha"   
                        placeholder="Fecha"                 
                    />         
                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"                    
                        placeholder="Categoría"                 
                    />                                   
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"   
                        placeholder="Título"                 
                    />
                    <label htmlFor="categoria">Imagen:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"                    
                        placeholder="Imagen"                 
                    />
                </div>
                <label htmlFor="parrafo1">Parrafo 1:</label>
                <textarea                    
                    id="parrafo1"
                    name="parrafo1"                    
                    placeholder="Párrafo"                 
                />   
                <label htmlFor="parrafo2">Parrafo 2:</label>
                <textarea
                    id="parrafo2"
                    name="parrafo2"                    
                    placeholder="Párrafo"                 
                />   
                <label htmlFor="parrafo3">Parrafo 3:</label>
                <textarea
                    id="parrafo3"
                    name="parrafo3"                    
                    placeholder="Párrafo"                 
                />                                          
                <label htmlFor="parrafo4">Parrafo 4:</label>
                <textarea
                    id="parrafo4"
                    name="parrafo4"                    
                    placeholder="Párrafo"                 
                />  
                <label htmlFor="parrafo5">Parrafo 5:</label>
                <textarea
                    id="parrafo5"
                    name="parrafo5"                    
                    placeholder="Párrafo"                 
                />  
                <label htmlFor="parrafo6">Parrafo 6:</label>
                <textarea
                    id="parrafo6"
                    name="parrafo6"                    
                    placeholder="Párrafo"                 
                /> 
                <label htmlFor="parrafo7">Parrafo 7:</label>
                <textarea
                    id="parrafo7"
                    name="parrafo7"                    
                    placeholder="Párrafo"                 
                /> 
                <label htmlFor="parrafo8">Parrafo 8:</label>
                <textarea
                    id="parrafo8"
                    name="parrafo8"                    
                    placeholder="Párrafo"                 
                /> 
                <label htmlFor="parrafo9">Parrafo 9:</label>
                <textarea
                    id="parrafo9"
                    name="parrafo9"                    
                    placeholder="Párrafo"                 
                />     
                <label htmlFor="parrafo10">Parrafo 10:</label>
                <textarea
                    type="text"
                    id="parrafo10"
                    name="parrafo10"                    
                    placeholder="Párrafo"                 
                />                                                                                                                                                                                                                    
                <FormInput
                    type="submit"
                    value="CREAR NOTA"
                />
            </form>
        </Form>
        </Layout>
     );
}
 
export default Note;