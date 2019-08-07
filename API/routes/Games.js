const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
      message: "Hnadling GET request to /Games"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
      message: "Hnadling POST request to /Games"
    });
});

router.get('/:gameID',(req, res, next) => {
  const id = req.params.gameID;
  if(id === 'special' ){
    res.status(200).json({
      message: 'You have found our special sauce',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passes an ID'
    });
  }
});
//updates the games
router.patch('/:gameID',(req, res, next) => {
  res.status(200).json ({
    message: 'Updated game'
  });
});
//deletes the games
router.delete('/:gameID',(req, res, next) => {
  res.status(200).json ({
    message: 'Deleted game'
  });
});

module.exports = router;
