import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 访客记录 Visitor Log
const Visitor: any = sequelize.define('visitor', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ip: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ipCountryCode: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ipCountry: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userAgent: {
        type: Sequelize.STRING,
        allowNull: true
    },
    appName: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userLanguage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    platform: {
        type: Sequelize.STRING,
        allowNull: true
    },
    geoLocation: {
        type: Sequelize.STRING,
        allowNull: true
    },
    flagIcon: {
        type: Sequelize.STRING,
        allowNull: true
    },
    isAdmin: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    ts: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
}, {freezeTableName: true, timestamps: false})

export default Visitor