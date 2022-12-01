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
						`SELECT HP.MaHopDong, datepart(Day,HP.NgayKichHoat) as NgayKichHoat,datepart(MONTH,HP.NgayKichHoat) as ThangKichHoat,datepart(YEAR,HP.NgayKichHoat) as NamKichHoat, datepart(Day,HP.NgayHetHan) as NgayHetHan,datepart(MONTH,HP.NgayKichHoat) as ThangHetHan,datepart(YEAR,HP.NgayKichHoat) as NamHetHan, DT.MaSoThue, DT.NguoiDaiDien, DT.SoLuongChiNhanh, DT.Diachikinhdoanh, DT.STKNganHang, DT.NganHang FROM dbo.DOITAC DT, dbo.HOPDONG HP where DT.MaDoiTac=HP.MaDoiTac and DT.MaDoiTac='${req.params.slug}'`
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

module.exports = new ContactController();
