let db = require('../database/models');

let applicationsController = {
    crear: function(req, res){
        db.categorie.findAll()
        .then(function(categorie){
           return res.render('listadoApp', {categorie: categorie})
        })
    }
}

module.exports = applicationsController