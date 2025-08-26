const express = require('express');
const router = express.Router();

const {
    getAllFavoritesByUserHandler,
    getAllFavoritesHandler,
    getFavoriteByIdHandler,
    addFavoriteHandler,
    updateFavoriteHandler,
    removeFavoriteHandler
} = require('../controllers/favoriteController');


router.get('/api/user/:fk_user_id/favorites', getAllFavoritesByUserHandler);
router.get('/api/favorites', getAllFavoritesHandler);
router.get('/api/favorite/:favorite_id', getFavoriteByIdHandler);
router.post('/api/favorite', addFavoriteHandler);
router.put('/api/favorite/:favorite_id', updateFavoriteHandler);
router.delete('/api/favorite/:favorite_id', removeFavoriteHandler);


module.exports = router;