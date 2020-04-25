module.exports = function(sequelize, dataTypes) {
    let alias = 'order'

    let cols ={
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false
        },
        user_id: {
            type: dataTypes.INTEGER,
            alowNull: false
        },
        application_id: {
            type: dataTypes.INTEGER,
            alowNull: false
        },
        price: {
            type: dataTypes.DECIMAL(8,2),
            alowNull: true
        }
    }

let config = {
    tableName: 'order',
    timestamps: false,
    underscored: true
}

let order = sequelize.define(alias, cols, config)

order.associate = function(models){
    order.belongsTo(models.user, {
        as: 'user',
        foreingKey: 'user_id'
    })

    order.hasMany(models.application, {
        as: 'application',
        foreingKey: 'application_id'
    })

    order.hasMany(models.comment,{
        as: 'comment',
        foreingKey: 'order_id'
    })
}

    return order
}