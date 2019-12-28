import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 文章分类 Post Category
const Cate: any = sequelize.define('posts_category', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    cname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cname_sublang: {
        type: Sequelize.STRING,
        allowNull: false
    },
    des: {
        type: Sequelize.STRING,
        allowNull: false
    },
    des_sublang: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hide: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default Cate