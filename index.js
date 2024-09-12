const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const studentRoutes = require('./routes/studentRoutes');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', studentRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
