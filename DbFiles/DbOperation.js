const config = require('./DbConfig');
const sql = require('mssql');

const getProducts = async () => {
    try {
        let pool = await sql.connect(config);
        let products = pool.request().query('select tenmonan from dbo.MONAN');
        return products;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const createProducts = async () => {
    try {
        let pool = await sql.connect(config);
        let products = pool.request().query('select tenmonan from dbo.MONAN');
        return products;
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

module.exports = {
    getProducts,
    createProducts,
};
