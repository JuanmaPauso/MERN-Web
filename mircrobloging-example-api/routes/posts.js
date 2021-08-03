var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// Modelos

var Post = require('../models/Post.js');
var User = require('../models/User');

var db = mongoose.connection;

// GET del listado de post ordenados por fecha de publicación

router.get('/', function(req, res, next) {
    Post.find().sort('-publicationdate').populate('user').exec(function(err,posts) {
        if (err) res.status(500).send(err);
        else res.status(200).json(post);
    });
});

// GET de todos los posts de un usuario dado (identificado por su Id)

router.get('/all/:id', function (req, res, next) {
    Post.find({'user':req.params.id}).sort('-publicationdate').populate('user').exec(function (err, posts) {
        if (err) res.status(500).send(err);
        else res.status(200).json(posts);
    });
});

// POST de un nuevo post o entrada

router.post('/', function (req, res, next) {
    User.findById(req.body.iduser, function (err, userinfo) {
        if (err) res.status(500).send(err);
        else{
            // crear la instancia Post
            var postInstance = new Post({
                user: req.body.iduser,
                title: req.body.title,
                description: req.body.description
            });
            // añadir postInstance al array de posts del usuario
            userinfo.post.push(postInstance);
            // salvar el post en las colecciones users y posts
            userinfo.save(function (err){
                if (err) res.status(500).send(err);
                res.sendStatus(200);
            });
        }
    });
});

// PUT de un post existente (identificado por su Id)

router.put('/:id', function (req, res, next) {
    Post.findByIdAndUpdate(req.params.id, req.body, function (err, postinfo) {
        if (err) res.status(500).send(err);
        else res.sendStatus(200);
    });
});

// DELETE de un post existente (identificado por su Id)

router.delete('/:id', function (req, res, next) {
    Post.findByIdAndDelete(req.params.id, function (err, postinfo) {
        if (err) res.status(500).send(err);
        else{
            User.findByIdAndUpdate(postinfo.user, {$pull: {posts : pistinfo._id}}, function (err, userinfo) {
                if (err) res.status(500).send(err);
                else {
                    res.sendStatus(200);
                }
            });
        }
    });
});


module.exports = router;