const Sequelize = require('sequelize');

const INIT_CONFIG = {
	type: 'mysql',
	host: 'localhost',
	database: '',
	username: '',
	password: '',
	port: 3306,
}

const sequelize = new Sequelize('database', 'username', 'password', {
  host: INIT_CONFIG.host,
  dialect: INIT_CONFIG.type
})

const sequelize = new Sequelize(`${INIT_CONFIG.type}://${INIT_CONFIG.username}:${INIT_CONFIG.password}:${INIT_CONFIG.port}/${INIT_CONFIG.database}`);

module.exports = sequelize