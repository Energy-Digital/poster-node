import sequelize from '@/connect/query'
import Sequelize from 'sequelize'
//id  username registertime token tel avatar psw enable

const User: any = sequelize.define('user', {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registertime: {
        type: Sequelize.TIME
    },
    psw: {
        type: Sequelize.STRING
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel: {
        type: Sequelize.NUMBER,
        defaultValue: 0
    },
    avatar: {
        type: Sequelize.STRING,
    },
    enable: {
        type:Sequelize.NUMBER,
        allowNull: true,
        defaultValue: 1
    },
}, {freezeTableName: true, timestamps: false})

export default User