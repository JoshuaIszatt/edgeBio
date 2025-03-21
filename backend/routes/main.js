// Import router from express 
const { Router } = require('express')
const router = Router();

/*
Import controllers
*/

const home_controller = require('../controllers/home');
const upload_controller = require('../controllers/upload');
const filesMetadata_controller = require('../controllers/filesMetadata');

/*
HOME
*/

router.get('/', home_controller.home);

/*
UPLOADS
*/

router.post('/upload', upload_controller.uploadFile);
router.post('/upload-pair', upload_controller.uploadFilePair);

/*
FILESYSTEM
*/

router.get('/files', filesMetadata_controller.getFiles);
router.delete('/files/:id', filesMetadata_controller.deleteFile);


// Export router
module.exports = router;
