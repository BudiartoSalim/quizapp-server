if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => { res.send('hola') });

app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
})