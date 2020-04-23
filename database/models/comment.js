module.exports = function(sequelize, dataTypes) {
    let alias = 'comment'

    let cols ={
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            alowNull: false
        },
        order_id: {
            type: dataTypes.INTEGER,
            alowNull: false
        },
        rating: {
            type: dataTypes.INTEGER,
            alowNull: false
        },
        content: {
            type: dataTypes.STRING,
            alowNull: true
        }
}

let config = {
    tableName: 'comment',
    timestamps: false,
    underscored: true
}

let comment = sequelize.define(alias, cols, config)

comment.associate = function(models){
    comment.belongsTo(models.order, {
        as: order,
        foreingKey: order_id
    })
}

    return comment
}