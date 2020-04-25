module.exports = function(sequelize, dataTypes) {

    let alias = 'application'

    let cols = {
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
        image_url: {
            type: dataTypes.STRING,
            alowNull: true
        },
        descripcion: {
            type: dataTypes.STRING,
            alowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            alowNull: true
        },
        category_id: {
            type: dataTypes.INTEGER,
            alowNull: true
        },
        price: {
            type: dataTypes.DECIMAL(8,2),
            alowNull: true
        }
        }

    let config = {
        tableName: 'application',
        timestamps: false,
    }

    let application = sequelize.define(alias, cols, config)

    application.associate = function(models){
        application.belongsTo(models.categorie, {
            as: 'category',
            foreingKey: 'category_id'
        })
        application.hasMany(models.order, {
            as: 'order',
            foreingKey: 'application_id'
        })
        application.hasMany(models.user, {
            as: 'user',
            foreingKey: 'user_id'
        })
    }


    return application
}