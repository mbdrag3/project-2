const router = require('express').Router();
const { Card } = require('../../models');


router.get('/', async (req, res) => {
    try {
      const cardData = await Card.findAll();
      res.status(200).json(cardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req,res) => {
    try {
        const cardData = await Card.findByPk(req.params.id, {
            where: {
                id: req.params.id,
            },
        });
        if (!cardData) {
            res.status(404).json({ message: "No card found with this id" });
            return;
        }
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const userId = req.session.user_id;

      const userCollection = { ...req.body, user_id : userId }

      const cardData = await Card.create(userCollection);
      res.status(200).json(cardData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.delete('/:id', async (req,res) => {
    try {
        const cardData = await Card.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!cardData) {
            res.status(404).json({ message: "No card found with this id" });
            return;
        }

        res.status(200).json(cardData);
    } catch (err) {
        res.status(500).json(err);
    }
  });
  
module.exports = router;