const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
  res.status(200).json({
    message: 'tournament was fetched'
  });
});

router.post('/',(req, res, next) => {
  res.status(201).json({
    message: 'Tournament was created'
  });
});

router.get('/:tournamentId',(req, res, next) => {
  res.status(200).json({
    message: 'Tournament details'
    tournamentId: req.params.tournamentId
  });
});

router.delete('/:tournamentId',(req, res, next) => {
  res.status(200).json({
    message: 'Tournament deleted'
    tournamentId: req.params.tournamentId
  });
});

module.exports = router;
