const config = require("../DbConfig");
const sql = require("mssql");
class RestaurantController {
	async index(req, res) {}
	// [GET] /restaurant/getName/:slug
	getName(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`SELECT DT.TenDoiTac
							FROM dbo.DOITAC DT
							where DT.MaDoiTac='${req.params.slug}'`
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
	// [GET] /restaurant/getMenu/:slug
	getMenu(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select MA.TenMonAn, MA.Gia, MA.MieuTaMon,DT.LoaiAmThuc, TD.Rating
						from DOITAC DT, THUCDON TD, MONAN MA
						where DT.MaDoiTac='${req.params.slug}' and DT.MaDoiTac=TD.MaDoiTac and MA.MaThucDon=TD.MaThucDon`)
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
