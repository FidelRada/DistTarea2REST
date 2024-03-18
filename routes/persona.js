var express = require('express');
var router = express.Router();
var { body, validationResult } = require('express-validator');
var personaController = require('../controllers/persona');

/* GET users listing. */
router.get('/getAll', async (req, res, next) => {
	personaController.getAll()
	.then((data)=>{
		console.log(data);
		res.json(data);
	})
	.catch((error)=>{
		console.log(error);
		res.status(500).json({error: error.error})
	});
});

router.post('/add', 
  [
    // Validación del cuerpo de la solicitud usando express-validator
    body('nombre').isString().notEmpty(),
    body('apellido').isString().notEmpty(),
    body('ci').isString().notEmpty().isNumeric().isLength({ min: 8, max: 8 }),
    body('telefono').isString().notEmpty().isNumeric().isLength({ min: 8, max: 8 })
  ],
  async (req, res) => {
    // Verificar si hay errores de validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Si la validación pasa, proceder con la lógica para agregar una nueva persona
    try {
      const nuevaPersona = await personaController.add(req.body);
      res.status(201).json(nuevaPersona);
    } catch (error) {
      console.error('Error al agregar persona:', error);
      res.status(500).json({ error: 'Ocurrió un error al agregar persona' });
    }
  }
);

module.exports = router;
