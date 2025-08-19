const express = require('express');
const router = express.Router();
const { generatePoem } = require('../services/geminiService');

router.post('/', async (req, res) => {
  const { title } = req.body;
  try {
    const poem = await generatePoem(title);
    res.json({ poem });
  } catch (error) {
    res.status(500).json({ error: 'Error generando poema' });
  }
});

module.exports = router;
