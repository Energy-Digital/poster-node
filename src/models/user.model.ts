import sequelize from '@/connect/query'
import Sequelize from 'sequelize'
//id  username	registertime	token	tel	avatar	psw	enable

const User = sequelize.define('user', {
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
    token: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tel: {
        type: Sequelize.NUMBER
    },
    avatar: {
        type: Sequelize.STRING
    },
    enable: {
        type:Sequelize.NUMBER,
        allowNull: false,
        defaultValue: 1
    }
})

export default User