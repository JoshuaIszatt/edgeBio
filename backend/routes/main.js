// Import router from express 
const { Router } = require('express')
const router = Router();

/*
Import main controllers
*/

const home_controller = require('../controllers/home');
const upload_controller = require('../controllers/upload');

/*
Use main controllers
*/

router.get('/', home_controller.home);
router.post('/upload', upload_controller.uploadFile);
router.post('/upload-pair', upload_controller.uploadFilePair);

// Export router
module.exports = router;
