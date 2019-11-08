const Sequelize = require('sequelize');

let INIT_CONFIG = {}

if (process.env.NODE_ENV === 'production') { // 生产环境
	INIT_CONFIG = {
		type: 'mysql',
		host: 'localhost',
		database: 'food_db',
		username: 'root',
		password: 'du6653145',
		port: 3306,
	}
} else { // dev环境配置
	INIT_CONFIG = {
		type: 'mysql',
		host: 'localhost',
		database: 'food_db',
		username: 'root',
		password: 'du6653145',
		port: 3306,
	}
}

const sequelize = new Sequelize(INIT_CONFIG.database, 
	INIT_CONFIG.username, 
	INIT_CONFIG.password, 
{
  host: INIT_CONFIG.host,
  port: INIT_CONFIG.port,
  dialect: INIT_CONFIG.type
})



module.exports = sequelize