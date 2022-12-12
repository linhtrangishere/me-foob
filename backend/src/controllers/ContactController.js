const config = require("../DbConfig");
const sql = require("mssql");
class ContactController {
	async index(req, res) {}
	// [GET] /contact/getBranch/:slug
	getBranch(req, res) {
		const func = async () => {
			try {
				let pool = await sql.connect(config);
				let products = pool
					.request()
					.query(
						`SELECT HP.MaHopDong, HP.NgayKichHoat, HP.NgayHetHan, DT.MaSoThue, DT.NguoiDaiDien, DT.SoLuongChiNhanh, DT.Diachikinhdoanh, DT.STKNganHang, DT.NganHang FROM dbo.DOITAC DT, dbo.HOPDONG HP where DT.MaDoiTac=HP.MaDoiTac and DT.MaDoiTac='${req.params.slug}'`
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
	// [POST] /contact/updateDateline/:slug
	updateDateline(req, res) {
		const func = async () => {
			try {
				let pool = await sql.connect(config);
				let result = pool
					.request()
					.input("MAHD", sql.VarChar(10), req.params.slug)
					.input("NGAYHETHAN", sql.Date, req.body.date)
					.execute("dbo.SP_UPDATE_HOPDONG");
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress);
		});
	}
	// [GET] /contact/getDateline/:slug
	getDateline(req, res) {
		const func = async () => {
			try {
				var date = new Date();
				let pool = await sql.connect(config);
				let result = pool
					.request()
					.input("MAHD", sql.VarChar(10), req.params.slug)
					.output("NGAYHETHAN", sql.Date)
					.execute("dbo.SP_SELECT_HOPDONG");
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress);
		});
	}
	// [GET] /contact/getDatelineFix/:slug
	getDatelineFix(req, res) {
		const func = async () => {
			try {
				var date = new Date();
				let pool = await sql.connect(config);
				let result = pool
					.request()
					.input("MAHD", sql.VarChar(10), req.params.slug)
					.output("NGAYHETHAN", sql.Date)
					.execute("dbo.SP_SELECT_HOPDONG_FIX");
				return result;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress);
		});
	}
}

module.exports = new ContactController();
