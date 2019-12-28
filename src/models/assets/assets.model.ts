import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 多媒体资产库 Media Assets Library
const Assets: any = sequelize.define('media_lib', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    path: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    // 暂时没用上，保留字段
    des: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type_des: {
        type: Sequelize.STRING,
        allowNull: false
    },
    md5: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    // 不记得是什么了，好像是个保留字段
    usec: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    // 在用户重复上传同一文件时，标记指向的源文件。此处做指针作用，源文件则是-1
    seed: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    // 上传时间戳，可使用网盘用户少的时候也可做唯一标识
    ts: {
        type: Sequelize.NUMBER,
        allowNull: false
    }
}, {freezeTableName: true, timestamps: false})

export default Assets