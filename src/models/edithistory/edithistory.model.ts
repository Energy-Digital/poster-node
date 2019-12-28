import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 文章修改历史 Post Editing History
// 暂时保留，不用
const EditHistory: any = sequelize.define('posts_history', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {freezeTableName: true, timestamps: false})

export default EditHistory