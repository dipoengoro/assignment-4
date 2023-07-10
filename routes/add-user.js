const express = require('express');
const router = express.Router();

const users = [];
router.get('/', (req, res) => {
    res.render('add-user', {
        title: 'Add User',
        needProductCss: true,
        needFormsCss: true,
        whichActive: 'admin'
    });
});

router.post('/', (req, res) => {
    users.push(req.body.username);
    res.redirect('/');
});

module.exports = {
    routes: router,
    users: users
};