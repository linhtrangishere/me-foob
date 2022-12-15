const config = require('../DbConfig');
const sql = require('mssql');
class RestaurantsController {
    async index(req, res) {}
    // [GET] /contact/getBranch/:slug
	getName(req, res) {
		const func = async () => {
			try {
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						`SELECT DT.TenDoiTac, DT.LoaiAmThuc, DT.Email FROM dbo.DOITAC DT where DT.MaDoiTac='${req.params.slug}'`
					);
				return products;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress.recordset);
		});
	}
    // [GET] /home/getBranch1
    getBranch1(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select count(*) from dbo.MONAN`)
						.then((v) => {
							products = v;
						})
						.then(() => conn.close())
				);
				return products;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress.recordset);
		});
	}
	// [GET] /home/getBranch2
	getBranch2(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select count(*) from dbo.MONAN`)
						.then((v) => {
							products = v;
						})
						.then(() => conn.close())
				);
				return products;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress.recordset);
		});
	}
}

module.exports = new RestaurantsController();
