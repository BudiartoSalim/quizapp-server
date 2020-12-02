'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Answer.belongsTo(models.Question)
    }
  };
  Answer.init({
    QuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Null Question ID in Answers table content.' },
        isInt: { args: true, msg: 'Foreign key QID must be of type Integer.' }
      }
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Answer cannot be empty." }
      }
    },
    isCorrect: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: "Must define whether the answer is correct or not (true/false)" }
      }
    }
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};