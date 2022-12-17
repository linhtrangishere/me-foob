const config = require('../DbConfig');
const sql = require('mssql');
class RestaurantController {
	async index(req, res) { }
	// [GET] /restaurant/getName/:slug
	getName(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`SELECT DT.TenDoiTac, DT.LoaiAmThuc, DT.Email, MA.TenMonAn, MA.Gia FROM dbo.DOITAC DT, dbo.THUCDON TD, dbo.MONAN MA where DT.MaDoiTac='${req.params.slug}' and DT.MaDoiTac=TD.MaDoiTac and TD.MaThucDon=MA.MaThucDon`
						)
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

module.exports = new RestaurantController();
