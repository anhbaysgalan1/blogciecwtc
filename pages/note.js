import React,{useState, useContext} from 'react';
import {css} from '@emotion/core';
import Router, {useRouter} from 'next/router';
import firebase from '../firebase';
import FileUploader from 'react-firebase-file-uploader';
import {FirebaseContext} from '../firebase';

import {Form, FormInput, Error} from '../components/ui/general';
import Layout from '../components/layout/layout';
import Hero from '../components/hero';

import useValidacion from '../hooks/useValidacion';
import validarCrearNota from '../validacion/validarCrearNota';

const STATE_INICIAL = {
    categoria: '',
    titulo: '',
    preview:'',
    parrafo1: '',
    parrafo2: '',
    parrafo3: '',
    parrafo4:'',
    parrafo5:'',
    parrafo5:'',
    parrafo6:'',
    parrafo7:'',
    parrafo8:'',
    parrafo9:'',
    parrafo10:'',
    lectura:''
  }

const Note = () => {

    // state img
    const [nombreimagen, guardarNombre] = useState('');
    const [subiendo, guardarSubiendo] = useState(false);
    const [ progreso, guardarProgreso ] = useState(0);
    const [urlimagen, guardarUrlImagen] = useState('');

    const [error, guardarError] = useState(false);
    const {valores, errores, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarCrearNota, crearNota);

    const { categoria, titulo, preview, parrafo1, parrafo2, parrafo3, parrafo4, parrafo5, parrafo6, parrafo7, parrafo8, parrafo9, parrafo10, lectura} = valores;    
    
    const router = useRouter();
    const { usuario, firebase } = useContext(FirebaseContext);

    async function crearNota() {
        console.log('Creando Nota');
        const nota = {
            categoria, 
            titulo,
            urlimagen,
            preview,
            parrafo1, 
            parrafo2,
            parrafo3,
            parrafo4,
            parrafo5,
            parrafo6,
            parrafo7,
            parrafo8,
            parrafo9,
            parrafo10,
            lectura,
            creado: Date.now(), 
            creador: {
              id: usuario.uid,
              email: usuario.email,
            }
          }
          
        // insertarlo en bdd
        firebase.db.collection('notas').add(nota);
        return router.push('/');
    }

    const handleUploadStart = () => {
        guardarProgreso(0);
        guardarSubiendo(true);
    }

    const handleProgress = progreso => guardarProgreso({ progreso });

    const handleUploadError = error => {
        guardarSubiendo(error);
        console.error(error);
    };

    const handleUploadSuccess = nombre => {
        guardarProgreso(100);
        guardarSubiendo(false);
        guardarNombre(nombre)
        firebase
            .storage
            .ref("notas")
            .child(nombre)
            .getDownloadURL()
            .then(url => {
                console.log(url);
                guardarUrlImagen(url);
            } );
    };  

    return ( 
        <Layout>
        <Hero
            title="Nueva Nota"
        />
        <Form>
            <form
                onSubmit={handleSubmit}
                noValidate
            >
                <div> 
                    <label htmlFor="categoria">Categoría:</label>
                    <input
                        type="text"
                        id="categoria"
                        name="categoria"                    
                        placeholder="Categoría*"   
                        value={categoria}
                        onChange={handleChange}                
                    />          
                    {errores.categoria && <Error>{errores.categoria}</Error> }                         
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"   
                        placeholder="Título*" 
                        value={titulo}
                        onChange={handleChange}                                          
                    />
                    {errores.titulo && <Error>{errores.titulo}</Error> }                         
                    <label htmlFor="imagen">Imagen</label>
                    <FileUploader
                        css={css`
                        width: 100%;
                        
                        `}
                        accept="image/*"
                        id="imagen"
                        name="imagen"
                        randomizeFilename
                        storageRef={firebase.storage.ref("notas")}
                        onUploadStart={handleUploadStart}
                        onUploadError={handleUploadError}
                        onUploadSuccess={handleUploadSuccess}
                        onProgress={handleProgress}
                    />
                </div>
                <label htmlFor="Preview*">Preview:</label>
                <textarea                    
                    id="preview"
                    name="preview"                    
                    placeholder="Preview (Breve Introducción)*"  
                    value={preview}
                    onChange={handleChange}                                                         
                />                
                {errores.preview && <Error>{errores.preview}</Error> }   
                <label htmlFor="preview*">Párrafo 1:</label>
                <textarea                    
                    id="parrafo1"
                    name="parrafo1"                    
                    placeholder="Párrafo*"  
                    value={parrafo1}
                    onChange={handleChange}                                                         
                />   
                {errores.parrafo1 && <Error>{errores.parrafo1}</Error> }   
                <label htmlFor="parrafo2*">Párrafo 2:</label>
                <textarea
                    id="parrafo2"
                    name="parrafo2"                    
                    placeholder="Párrafo*" 
                    value={parrafo2}
                    onChange={handleChange}                                                                         
                />   
                {errores.parrafo2 && <Error>{errores.parrafo2}</Error> }   
                <label htmlFor="parrafo3*">Párrafo 3:</label>
                <textarea
                    id="parrafo3"
                    name="parrafo3"                    
                    placeholder="Párrafo*"  
                    value={parrafo3}
                    onChange={handleChange}                                                                        
                />      
                {errores.parrafo3 && <Error>{errores.parrafo3}</Error> }                                       
                <label htmlFor="parrafo4">Párrafo 4:</label>
                <textarea
                    id="parrafo4"
                    name="parrafo4"                    
                    placeholder="Párrafo" 
                    value={parrafo4}
                    onChange={handleChange}                  
                />  
                <label htmlFor="parrafo5">Párrafo 5:</label>
                <textarea
                    id="parrafo5"
                    name="parrafo5"                    
                    placeholder="Párrafo"
                    value={parrafo5}
                    onChange={handleChange}                                                       
                />  
                <label htmlFor="parrafo6">Párrafo 6:</label>
                <textarea
                    id="parrafo6"
                    name="parrafo6"                    
                    placeholder="Párrafo"  
                    value={parrafo6}
                    onChange={handleChange}                                                                                          
                /> 
                <label htmlFor="parrafo7">Párrafo 7:</label>
                <textarea
                    id="parrafo7"
                    name="parrafo7"                    
                    placeholder="Párrafo"   
                    value={parrafo7}
                    onChange={handleChange}                                                                                                        
                /> 
                <label htmlFor="parrafo8">Párrafo 8:</label>
                <textarea
                    id="parrafo8"
                    name="parrafo8"                    
                    placeholder="Párrafo"  
                    value={parrafo8}
                    onChange={handleChange}                                   
                /> 
                <label htmlFor="parrafo9">Párrafo 9:</label>
                <textarea
                    id="parrafo9"
                    name="parrafo9"                    
                    placeholder="Párrafo"
                    value={parrafo9}
                    onChange={handleChange}                 
                />     
                <label htmlFor="parrafo10">Párrafo 10:</label>
                <textarea
                    type="text"
                    id="parrafo10"
                    name="parrafo10"                    
                    placeholder="Párrafo" 
                    value={parrafo10}
                    onChange={handleChange}                
                />
                <div>
                    <label htmlFor="lectura">Tiempo de Lectura:</label>
                    <input
                        type="text"
                        id="lectura"
                        name="lectura"   
                        placeholder="Tiempo de Lectura (Ej: 2 min)*" 
                        value={lectura}
                        onChange={handleChange}                                          
                    />
                    {errores.lectura && <Error>{errores.lectura}</Error> }  
                </div>
                {error && <Error>{error}</Error>}                                                                                                                                                                                                                    
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