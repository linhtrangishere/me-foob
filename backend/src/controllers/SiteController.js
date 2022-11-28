const config = require('../DbConfig');
const sql = require('mssql');
class SiteControler {
    async index(req, res) {}
    // [GET] /home/getBranch1
    async getBranch1(req, res) {
        const func = async () => {
            try {
                let pool = await sql.connect(config);
                let products = pool.request().query('select count(*) from dbo.MONAN');
                return products;
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };
        func().then((ress) => {
            res.json(ress.recordset)
        });
    }
    // [GET] /home/getBranch2
    async getBranch2(req, res) {
        const func = async () => {
            try {
                let pool = await sql.connect(config);
                let products = pool.request().query('select count(*) from dbo.MONAN');
                return products;
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        };
        func().then((ress) => {
            res.json(ress.recordset)
        });
    }
}

module.exports = new SiteControler();
