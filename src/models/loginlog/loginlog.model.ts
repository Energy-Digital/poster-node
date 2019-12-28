import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 登录记录 Login Log
const LoginLog: any = sequelize.define('login_act', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    ip: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    // 不记得了
    tim: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    // 不记得了
    state: {
        type: Sequelize.NUMBER,
        allowNull: false
    },

    // 不记得了
    ex: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ts: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default LoginLog