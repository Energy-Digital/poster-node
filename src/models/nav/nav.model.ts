import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 网页全局导航 Navigation Bar
const Nav: any = sequelize.define('layout_nav', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name_sublang: {
        type: Sequelize.TIME,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default Nav