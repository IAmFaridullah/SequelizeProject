const express = require('express');

const controllers = require('../controllers/controllers');

const router = express.Router();

router.get('/', controllers.getRecords);
router.get('/newStudent', controllers.newStudent);
router.get('/editStudent/:id', controllers.editStudent);
router.post('/postNewStudent', controllers.postNewStudent);
router.post('/postUpdatedStudent', controllers.postUpdatedStudent);
router.get('/deleteStudent/:id', controllers.deleteStudent);

module.exports = router;