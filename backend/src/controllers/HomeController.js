const config = require("../DbConfig");
const sql = require("mssql");
class HomeControler {
	async index(req, res) {}
	// [GET] /home/getBranch1
	getBranch1(req, res) {
		const func = async () => {
			try {
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						"SELECT TOP 8 CN.TenChiNhanh, DT.LoaiAmThuc,TD.Rating FROM dbo.CHINHANH CN,dbo.DOITAC DT, dbo.THUCDON TD where CN.MaDoiTac = DT.MaDoiTac and TD.MaDoiTac=CN.MaDoiTac ORDER BY NEWID()"
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
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						"SELECT TOP 8 CN.TenChiNhanh FROM dbo.CHINHANH CN ORDER BY NEWID()"
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

module.exports = new HomeControler();
