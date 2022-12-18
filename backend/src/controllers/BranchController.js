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
							`SELECT DT.TenDoiTac, DT.LoaiAmThuc, DT.Email, TD.MaThucDon, MA.TenMonAn, MA.Gia 
							FROM dbo.DOITAC DT, dbo.THUCDON TD, dbo.MONAN MA 
							where DT.MaDoiTac='${req.params.slug}' and DT.MaDoiTac=TD.MaDoiTac and TD.MaThucDon=MA.MaThucDon`
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

	add(req, res) {
		const func = async () => {
			try {
				let products;
				var ma =
					"MA" +
					Math.floor(Math.random() * (9999999 - 1000000 + 1)) +
					1000000;
				ma = ma.slice(0, 10);
				console.log(ma);
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						// .query(
						// 	`INSERT INTO dbo.MONAN(MaMonAn,MaThucDon,TenMonAn,Gia,TinhTrangMon)
						// 	values('MA30002','${req.params.slug}','${req.body.TenMonAn}','${req.body.Gia}','NULL')`
						// )
						.input("MaTD", sql.VarChar(10),req.params.slug)
						.input("MaMonAn", sql.VarChar(10),ma)
						.input("Ten", sql.NVarChar(80),req.body.TenMonAn)
						.input("Gia", sql.Int,req.body.Gia)
						.input("TinhTrang", sql.NVarChar(20),req.body.MieuTa)
						.execute("dbo.Add_mon_an")
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
			res?.json(ress?.recordset);
		});
	}
}

module.exports = new BranchController();
