const config = require('../DbConfig');
const sql = require('mssql');
class BranchController {
    async index(req, res) {}
    // [GET] /home/getBranch1
    getBranch1(req, res) {
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
    getBranch2(req, res) {
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

module.exports = new BranchController();
