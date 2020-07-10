export default function validarIniciarSesion(valores) {

    let errores = {};

    // validar email
    if(!valores.email) {
        errores.email = "Email Obligatorio";
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        errores.email = "Email no válido"
    }

    // validar password
    if(!valores.password) {
        errores.password = "Password Obligatorio";
    } else if( valores.password.length < 6 ) {
        errores.password = 'El password debe ser de al menos 6 caracteres'
    }

    return errores;
}