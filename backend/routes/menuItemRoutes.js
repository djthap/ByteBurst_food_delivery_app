const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');


router.get('/', menuItemController.getAllMenuItems);


router.post('/', menuItemController.createMenuItem);


router.put('/:id', menuItemController.updateMenuItem);


router.delete('/:id', menuItemController.deleteMenuItem);


router.get('/:id', menuItemController.getMenuItemById);

module.exports = router;
