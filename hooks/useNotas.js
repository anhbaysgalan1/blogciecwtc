import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../firebase';

const useNotas = orden => {

    const [notas, guardarNotas] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    useEffect(() => {
        const obtenerProductos = () => {
            firebase.db.collection('notas').orderBy(orden, 'desc').onSnapshot(manejarSnapshot)
        }
        obtenerProductos();
    }, []);

    function manejarSnapshot(snapshot) {
        const notas = snapshot.docs.map(doc => {
            return {
            id: doc.id,
            ...doc.data()
            }
        });

        guardarNotas(notas);
    }

    return {
        notas
    }
}

export default useNotas;