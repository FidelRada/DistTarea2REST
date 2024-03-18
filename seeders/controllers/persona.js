var { Persona } = require('../models');

module.exports = {
    async getAll() {

        // Realizar la consulta para obtener todas las personas
        try {
            const personas = await Persona.findAll();
            console.log(personas);

            // Devolver las personas como respuesta en formato JSON
            return { data: personas, error: null };
        } catch (error) {
            // Manejar errores si la consulta falla
            console.error('Error al obtener todas las personas:', error);
            return { data: null, error: 'Ocurrió un error al obtener todas las personas' };
            //res.status(500).json({ error: 'Ocurrió un error al obtener todas las personas' });
        }
    },

    async add(datosPersona) {
        try {
            const nuevaPersona = await Persona.create(datosPersona);
            return {data: nuevaPersona, error:null }
        } catch (error) {
            console.error('Error al agregar a la persona:', error);
            return {data: null, error : error}
        }

    }

}