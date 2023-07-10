const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const dirPath = require('./util/path');
const addUserData = require('./routes/add-user');
const usersRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(dirPath, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', addUserData.routes);
app.use('/users', usersRoutes);

app.use((req, res) => {
   res.render('404', {
      title: '404 | Page Not Found',
      whichActive: '',
      needProductCss: false,
      needFormsCss: false
   });
});

app.listen(3000);