import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 社交媒体 Social Media
const SocialMedia: any = sequelize.define('social_media', {
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
    url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    icon: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default SocialMedia