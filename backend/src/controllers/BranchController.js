const config = require("../DbConfig");
const sql = require("mssql");
class BranchController {
	async index(req, res) {}
	// [GET] /branch/getBranch/:slug
	getBranch(req, res) {
		const func = async () => {
			try {
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						`select CN.TenChiNhanh,CN.ThoiGianMoCua,CN.ThoiGianDongCua, DT.LoaiAmThuc, TD.Rating from CHINHANH CN, DOITAC DT, THUCDON TD where MaChiNhanh='${req.params.slug}' and DT.MaDoiTac=CN.MaDoiTac and DT.MaDoiTac=TD.MaDoiTac`
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
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						`select MA.TenMonAn, MA.Gia, MA.MieuTaMon from CHINHANH CN, DOITAC DT, THUCDON TD, MONAN MA where MaChiNhanh='${req.params.slug}' and DT.MaDoiTac=CN.MaDoiTac and DT.MaDoiTac=TD.MaDoiTac and MA.MaThucDon=TD.MaThucDon`
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
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						`select TenChiNhanh from CHINHANH where MaChiNhanh='${req.params.slug}'`
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
