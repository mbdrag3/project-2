const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/signup', async (req,res) => {
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.sessionID.user_id = newUser.id
            req.session.logged_in = true;

            res.status(200).json(newUser);
        });
        res.render('home') //sends person back home

    } catch (err) {
        console.log(`ERROR: ${err}`)
        res.status(500).json(err);
    }
});

router.post('/login', async (req,res) => {
    try {
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        });

        if (!user) {
            res.status(400).json({ message: "Incorrect username or password" });
            return;
        }

        const validPassword = await user.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({ message: "Incorrect password" });
            return;
        }

        req.session.save(() => {
            req.session.user_id = user.id;
            req.session.logged_in = true;

            res.json({ message: "You are now logged in" });
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', withAuth, (req,res) => {
    if (req.sessionStore.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.get('/me', withAuth, async (req,res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
        });

        if(!userData) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!userData) {
            res.status(404).json({ message: "No user found with this id" });
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
  });

 module.exports = router;