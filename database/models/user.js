module.exports = function(sequelize, dataTypes) {
    let alias = 'user'

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
        email: {
            type: dataTypes.STRING,
            alowNull: false
        },
        password: {
            type: dataTypes.STRING,
            alowNull: false
        },
}

let config = {
    tableName: 'user',
    timestamps: false,
    underscored: true
}

let user = sequelize.define(alias, cols, config)

user.associate = function(models){
    user.hasMany(models.order, {
        as: order,
        foreingKey: user_id
    })
    
    user.hasMany(models.application,{
        as: application,
        foreingKey: user_id
    })
}

    return user
}