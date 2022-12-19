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
							`SELECT DT.TenDoiTac, DT.LoaiAmThuc, DT.Email, TD.MaThucDon
							FROM dbo.DOITAC DT, dbo.THUCDON TD
							where TD.MaDoiTac='${req.params.slug}' and DT.MaDoiTac=TD.MaDoiTac`
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
			res?.json(ress?.recordset);
		});
	}

	getMenu(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.input("MaTD", sql.VarChar(10), req.params.slug)
						.execute("dbo.Xem_Thuc_Don")
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
			res?.json(ress?.recordset);
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
