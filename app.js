if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();
const router = require('./routes/index');

const PORT = process.env.PORT || 4000;

const cors = require('cors');
const errorhandler = require('./middlewares/errorhandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);
app.use(errorhandler);

app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
})