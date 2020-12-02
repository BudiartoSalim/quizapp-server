if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "quizapp_dev_db",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "database_test",
    "host": "localhost",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL"
  }
}