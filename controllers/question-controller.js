const { Question, Answer } = require('../models/index');

class QuestionController {
  //GET /questions
  async static fetchQuestionsGetHandler(req, res, next) {

  }

  //GET /questions/qty/:quantity
  async static fetchByQuantityGetHandler(req, res, next) {

  }

  //POST /questions/check
  async static checkQuestionPostHandler(req, res, next) {

  }

  // question and answers will be seeded
  // plan for later: add POST /Question to add more questions without seeding/directly injecting to db
  // requirements for it will be to have user system with admin auth, so admin account is the one injected
  // will be in a nice-to-have after core function is done

}

module.exports = QuestionController;