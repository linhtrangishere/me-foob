const config = require("../DbConfig");
const sql = require("mssql");
class BranchController {
	async index(req, res) {}
	// [GET] /branch/getBranch/:slug
	getBranch(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select CN.TenChiNhanh,datepart(HOUR,CN.ThoiGianDongCua) as GioDongCua, datepart(MINUTE,CN.ThoiGianDongCua) as PhutDongCua,
						datepart(HOUR,CN.ThoiGianMoCua) as GioMoCua, datepart(MINUTE,CN.ThoiGianMoCua)as PhutMoCua, DT.LoaiAmThuc, TD.Rating from CHINHANH CN, DOITAC DT, THUCDON TD where MaChiNhanh='${req.params.slug}' and DT.MaDoiTac=CN.MaDoiTac and DT.MaDoiTac=TD.MaDoiTac`
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
	// [GET] /branch/getBranch/:slug
	getMenu(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select MA.TenMonAn, MA.Gia, MA.MieuTaMon from CHINHANH CN, DOITAC DT, THUCDON TD, MONAN MA where MaChiNhanh='${req.params.slug}' and DT.MaDoiTac=CN.MaDoiTac and DT.MaDoiTac=TD.MaDoiTac and MA.MaThucDon=TD.MaThucDon`
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
	getName(req, res) {
		const func = async () => {
			try {
				// await pool.connect();
				// const result = await pool.request()
				// 	.input('MaDT', req.query.name)
				// 	.execute(`DanhSachMonAn`)
				// const meomeo = result.recordset

				// let pool = await sql.connect(config);
				// const result = await pool
				// 	.request()
				// 	.input("MaDT", req.params.slug)
				// 	.execute(`DanhSachMonAn`);
				// let products = result.recordset;
				// let products = pool
				// 	.request()
				// 	.query(
				// 		`select TenChiNhanh from CHINHANH where MaChiNhanh='${req.params.slug}'`
				// 	);
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select TenChiNhanh from CHINHANH where MaChiNhanh='${req.params.slug}'`
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
}

module.exports = new BranchController();
