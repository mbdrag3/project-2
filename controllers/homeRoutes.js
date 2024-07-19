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

router.get('/search/:searchedPokemon', (req,res)=> {
    try {
        const url = `https://api.pokemontcg.io/v2/cards?q=name:${req.params.searchedPokemon}&pageSize=24`;
        const key = 'd2443ada-80ff-4382-b87e-5b56e378b92c';
    
    
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${key}`
            }
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.data);
            res.render('search', {
                pokemonCards: data.data
            });

        }).catch(error => {
            console.log(error)
        })

    } catch (err) {
        console.log(err)
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

  router.get('/search', (req,res) => {
    try {
        res.render('search')
    } catch (err) {
        res.status(500).json(err);
    }
  })

module.exports = router;
