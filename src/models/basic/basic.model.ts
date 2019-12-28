import sequelize from '@/connect/query'
import Sequelize from 'sequelize'

// 全站基本信息和SEO设置 Site Basic Info and SEO Settings
const Basic: any = sequelize.define('site_basic', {
    id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    subtitle: {
        type: Sequelize.TIME,
        allowNull: false
    },
    siteLogo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    desText: {
        type: Sequelize.STRING,
        allowNull: false
    },
    baseUrl: {
        type: Sequelize.TIME,
        allowNull: false
    },
    seoTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    keywords: {
        type: Sequelize.STRING,
        allowNull: false
    },
    // 正在使用的主题
    activeTheme: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    // 是否开启Cookie提示，GDPR欧盟法律合规性设置，现网数据库里是string（原因不记得了
    isCookieNotice: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
}, {freezeTableName: true, timestamps: false})

export default Basic