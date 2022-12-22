const config = require("../DbConfig");
const sql = require("mssql");
class BranchController {
	async index(req, res) {}
	// [GET] /branch/getBranch/:slug
	getBranch(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select CN.TenChiNhanh,datepart(HOUR,CN.ThoiGianDongCua) as GioDongCua, datepart(MINUTE,CN.ThoiGianDongCua) as PhutDongCua,
						datepart(HOUR,CN.ThoiGianMoCua) as GioMoCua, datepart(MINUTE,CN.ThoiGianMoCua)as PhutMoCua, DT.LoaiAmThuc, TD.Rating from CHINHANH CN, DOITAC DT, THUCDON TD where MaChiNhanh='${req.params.slug}' and DT.MaDoiTac=CN.MaDoiTac and DT.MaDoiTac=TD.MaDoiTac`
						)
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
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
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`SELECT DT.TenDoiTac, DT.LoaiAmThuc, DT.Email, TD.MaThucDon, MA.MaMonAn, MA.TenMonAn, MA.Gia 
							FROM dbo.DOITAC DT, dbo.THUCDON TD, dbo.MONAN MA 
							where DT.MaDoiTac='${req.params.slug}' and DT.MaDoiTac=TD.MaDoiTac and TD.MaThucDon=MA.MaThucDon`
						)
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
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
				let result;
				var ma =
					"MA" +
					Math.floor(Math.random() * (9999999 - 1000000 + 1)) +
					1000000;
				ma = ma.slice(0, 10);
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.input("MaTD", sql.VarChar(10), req.params.slug)
						.input("MaMonAn", sql.VarChar(10), ma)
						.input("Ten", sql.NVarChar(80), req.body.TenMonAn)
						.input(
							"MieuTa",
							sql.NVarChar(100),
							req.body.MieuTa || " ncn"
						)
						.input("Gia", sql.Int, req.body.Gia)
						.input(
							"TinhTrang",
							sql.NVarChar(20),
							req.body.TinhTrang
						)
						.execute("dbo.Add_mon_an")
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res?.json(ress?.recordset);
		});
	}

	updateName(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.input("MaMonAn", sql.VarChar(10),req.params.slug)
						.input("MaThucDon", sql.VarChar(10),req.body.MaTD)
						.input("TenMoi", sql.NVarChar(80),req.body.Ten)
						.execute("dbo.SP_UPDATE_TEN")
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res?.json(ress?.recordset);
		});
	}

	updatePrice(req, res) {
		const func = async () => {
			try {
				let result;
				console.log(req.body.Gia)
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.input("MaMonAn", sql.VarChar(10),req.body.MaMonAn)
						.input("GiaMonAn", sql.Int,req.body.Gia)
						.execute("dbo.USP_ThayDoiThongTinMonAn")
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res?.json(ress?.recordset);
		});
	}

	saleoff(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.input("MaMonAn", sql.VarChar(10),req.params.slug)
						.input("PhanTramKhuyenMai", sql.Int,req.body.PhanTram)
						.execute("dbo.USP_ApDungKhuyenMai")
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res?.json(ress?.recordset);
		});
	}

	remove(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`DELETE FROM dbo.MONAN where MaMonAn='${req.params.slug}'`
						)
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
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
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select TenChiNhanh from CHINHANH where MaChiNhanh='${req.params.slug}'`
						)
						.then((v) => {
							result = v;
						})
						.then(() => conn.close())
				);
				return result;
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
