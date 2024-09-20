const express = require('express');
const router = express.Router();
const AkingController = require('../controller/AkingController');

router.get('/', AkingController.getItems);           
router.get('/:id', AkingController.getItemId);      
router.post('/', AkingController.createItem);        
router.put('/:id', AkingController.updateItem);     
router.patch('/:id', AkingController.patchItems);     
router.delete('/:id', AkingController.deleteItem);  

module.exports = router;