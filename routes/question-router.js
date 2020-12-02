const express = require('express');
const router = express.Router();
const QuestionController = require('../controllers/question-controller');

router.get('/', QuestionController.fetchQuestionsGetHandler);
router.post('/check', QuestionController.checkQuestionPostHandler);
router.get('/qty/:quantity', QuestionController.fetchByQuantityGetHandler);

module.exports = router;