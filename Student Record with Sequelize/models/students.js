const Sequelize = require('sequelize');

const sequelize = require('../database');

const student = sequelize.define('student', {
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    'Student Name' : {
        type : Sequelize.STRING,
        allowNull : false
    },
    'Father Name' : {
        type : Sequelize.STRING,
        allowNull : false
    },
    'Email Address' : {
        type : Sequelize.STRING,
        allowNull : false
    },
    Department : {
        type : Sequelize.STRING,
        allowNull : false
    }
});

module.exports = student;

