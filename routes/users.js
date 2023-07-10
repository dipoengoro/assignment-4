const express = require('express');
const router = express.Router();
const addUserData = require('./add-user');

router.get('/', (req, res) => {
    res.render('users', {
        title: 'Users',
        whichActive: 'users',
        needProductCss: true,
        needFormsCss: false,
        users: addUserData.users,
        hasUsers: addUserData.users.length > 0
    });
});

module.exports = router;