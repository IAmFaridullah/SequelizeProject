const Sequelize = require('sequelize');

const sequelize = new Sequelize('my_shop', 'root', 'srwatson33', {
    host : 'localhost',
    dialect : 'mysql'
})

module.exports = sequelize;
