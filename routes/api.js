const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// GET all items
router.get('/getallitems', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST a new item
router.post('/createitem', async (req, res) => {
  const item = new Item(req.body);
  try {
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PUT/update an item
router.put('/updateitem/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
