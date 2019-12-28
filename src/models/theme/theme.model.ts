import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 前端主题 Theme
const Theme: any = sequelize.define('layout_themes', {
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
    preview: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_struct: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    market_id: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    market_key: {
        type: Sequelize.STRING,
        allowNull: false
    },
    version: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // 上传、添加主题时打的时间戳
    ts: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default Theme