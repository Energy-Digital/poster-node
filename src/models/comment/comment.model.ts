import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 文章评论 Post Comment
// 暂时保留，不用
const Comment: any = sequelize.define('posts_comments', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
}, {freezeTableName: true, timestamps: false})

export default Comment