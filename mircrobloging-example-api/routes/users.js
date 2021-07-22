var express = require('express');
var router = express.Router();

// GET del listado de usuarios

router.get('/', function(req, res, next) {
  res.json({
    "users": [
      {"id": 123,
      "name": "Eladio Guardiola",
      "phones": {
        "home": "800-123-4567",
        "mobile": "877-123-1234"
      },
      "email": [
        "jd@example.com",
        "jd@example.org"],
      "dateOfBirth": "1980-01-02T00:00:00.000Z",
      "registered": true
      },
      {"id": 456,
      "name": "Nemesio Tornero",
      "phones": {
        "home": "800-123-3498",
        "mobile": "877-432-1278"
      },
      "email": [
        "pt@example.com",
        "pt@example.org"],
      "dateOfBirth": "1983-01-09T00:00:00.000Z",
      "registered": false
      },

    ]
  });
});

// GET de un usuario por su id

router.get('/:id', function(req, res, next) {
  if (req.params.id == '123'){
    res.json({
      "id": 123,
      "name": "Eladio Guardiola",
      "phones": {
        "home": "800-123-4567",
        "mobile": "877-123-1234"
      },
      "email": [
        "jd@example.com",
        "jd@example.org"],
      "dateOfBirth": "1980-01-02T00:00:00.000Z",
      "registered": true
    });
  } else {
    res.status(404).send('¡Lo siento, el ítem no se ha encontrado!')
  }
});

// POST de un nuevo usuario

router.post('/', function(req, res) {
  var new_user = req.body;
  //ToDo (hacer algo con el nuevo usuario)
  res.status(200).send('Usuario ' + req.body.name + ' ha sido añadido satisfactoriamente');
});

// PUT de un usuario por su Id

router.put('/:id', function(req, res) {
  var update_user = req.body;
  //ToDo (hacer algo con el usuario)
  res.status(200).send('Usuario ' + req.body.name + ' ha sido actualizado satisfactoriamente');
});

// DELETE de un usuario por su Id

router.delete('/:id', function(req, res) {
  // ToDo (hacer algo con el usuario)
  res.status(200).send('Usario con id ' + req.params.id + ' ha sido borrado satisfactoriamente')
});


module.exports = router;
