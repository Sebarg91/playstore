module.exports = function(sequelize, dataTypes) {
    let alias = 'categorie'

    let cols ={
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false
        },
        name: {
            type: dataTypes.STRING,
            alowNull: false
        },
    }

let config = {
    tableName: 'categorie',
    timestamps: false,
    underscored: true
}

let categorie = sequelize.define(alias, cols, config)

categorie.associate = function(models){
    categorie.hasMany(models.application, {
        as: 'application',
        foreingKey: category_id
    })
}

    return categorie
}