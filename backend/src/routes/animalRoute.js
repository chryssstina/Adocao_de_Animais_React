const express = require('express');
const router = express.Router();

const {
    getAllAnimalsHandler,
    getAnimalByIdHandler,
    createAnimalHandler,
    updateAnimalHandler,
    deleteAnimalHandler
} = require('../controllers/animalController');


router.get('/', getAllAnimalsHandler);
router.get('/:animal_id', getAnimalByIdHandler);
router.post('/', createAnimalHandler);
router.put('/:animal_id', updateAnimalHandler);
router.delete('/:animal_id', deleteAnimalHandler);


module.exports = router;