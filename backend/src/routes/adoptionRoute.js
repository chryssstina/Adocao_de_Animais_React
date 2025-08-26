const express = require('express');
const router = express.Router();

const {
    getAllAdoptionssHandler,
    getAdoptionByIdHandler,
    getAllAdoptionsByUserHandler,
    createAdoptionHandler,
    updateAdoptionHandler,
    deleteAdoptionHandler
} = require('../controllers/adoptionController');


router.get('/adoptions', getAllAdoptionssHandler);
router.get('/adoption/:adoption_id', getAdoptionByIdHandler);
router.get('/user/:fk_adopting_user_id/adoptions', getAllAdoptionsByUserHandler);
router.post('/adoption', createAdoptionHandler);
router.put('/adoption/:adoption_id', updateAdoptionHandler);
router.delete('/adoptions/:adoption_id', deleteAdoptionHandler);


module.exports = router;