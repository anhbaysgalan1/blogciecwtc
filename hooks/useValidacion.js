import React, {useState, useEffect} from 'react';

const useValidacion = (stateInicial, validar, fn) => {

    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitform, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if(submitform){
            const noErrores = Object.keys(errores).length === 0; 
            if(noErrores){
                fn(); //Fn = Función
            }
            guardarSubmitForm(false);
        }
     }, [errores]);

    //Función que se ejecuta conforme el usuario escribe
    const handleChange = e =>{
        guardarValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    //Función que se ejecuta al envío el form
    const handleSubmit = e =>{
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    }    

    return {
        valores,
        errores,
        handleChange,
        handleSubmit
    };
}
 
export default useValidacion;