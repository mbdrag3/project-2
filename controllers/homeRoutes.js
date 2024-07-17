const router = require('express').Router();

router.get('/', async (req, res) => {

    try {
        res.render('home')
    } catch (err) {
        res.status(500).json(err);
    }

});

router.get('/collection', (req,res)=> {
    try {
        res.render('collection')
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    /* if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    } */
  
    res.render('login');
  });

module.exports = router;