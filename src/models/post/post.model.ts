import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

const Post: any = sequelize.define('posts', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    // CateID 应关联给类别表
    cateId: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    title_sublang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    title_img: {
        type: Sequelize.STRING,
        allowNull: true
    },
    brief: {
        type: Sequelize.STRING,
        allowNull: true
    },
    brief_sublang: {
        type: Sequelize.STRING,
    },
    content:{
        type: Sequelize.STRING,
        allowNull: false
    },
    content_sublang: {
        type: Sequelize.STRING,
        allowNull: true
    },
    // AuthorID 应关联到用户表
    authorId: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    date_pub: {
        type:Sequelize.DATE,
        allowNull: false
    },
    date_modi: {
        type: Sequelize.DATE,
        allowNull: false
    },
    ux_visit: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    ux_likes: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    status: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default Post