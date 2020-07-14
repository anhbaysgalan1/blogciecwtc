export default function validarCrearNota(valores) {

    let errores = {};

    // validar el nombre del usuario
    if(!valores.categoria) {
        errores.categoria = "Categoría Obligatoria";
    }

    if(!valores.titulo) {
        errores.titulo = "Título Obligatorio";
    }

    if(!valores.preview) {
        errores.preview = "Preview es Obligatorio";
    } 

    if(!valores.parrafo1) {
        errores.parrafo1 = "Párrafo es Obligatorio";
    }   

    if(!valores.parrafo2) {
        errores.parrafo2 = "Párrafo es Obligatorio";
    }   
    
    if(!valores.parrafo3) {
        errores.parrafo3 = "Párrafo es Obligatorio";
    }   

    if(!valores.lectura) {
        errores.lectura = "Tiempo de Lectura Obligatorio";
    }   

    return errores;
}