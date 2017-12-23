const Sequelize = require('sequelize');

const dbname = process.env.DBNAME || 'otaspadb';

const user = process.env.DBUSER || 'root';
const passwd = process.env.DBPASSWD || '';
const host = process.env.DBHOST || '';

const sequelize = new Sequelize(dbname, user, passwd, {
    host: host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging:true
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


const CountryModel = sequelize.define('ota_countries', {
        id: {
            type: Sequelize.INTEGER.UNSIGNED,
            field: 'con_id',
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.CHAR,
            field: 'con_name'
        },
        code: {
            type: Sequelize.CHAR,
            field: 'con_code'
        }
    },
    {
        timestamps: false,
        freezeTableName: true
    }
);



module.exports = {
    CountryModel: CountryModel,

};




