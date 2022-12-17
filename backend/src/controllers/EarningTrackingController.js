const config = require("../DbConfig");
const sql = require("mssql");
class EarningTrackingController {
	async index(req, res) {}
	// [GET] /earning-tracking/getThuNhap
	getThuNhap(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select DH.MaPhieuDatHang, DH.TongHoaDon,DH.PhiVanChuyen,
								DC1.Xa + ', '+ DC1.Huyen + ', ' + DC1.ThanhPho as dcgh,
								DC2.Xa + ', '+ DC2.Huyen + ', ' + DC2.ThanhPho as dccn
								from PHIEUDATHANG DH join DIACHI DC1 on DH.DiaChiGH=DC1.MaDiaChi --Địa chỉ giao hàng
													join CHINHANH CN on CN.MaChiNhanh=DH.MaChiNhanh
													join DIACHI DC2 on CN.MaDiaChi=DC2.MaDiaChi --Địa chỉ chi nhánh
													join KHACHHANG KH on KH.MaKhachHang=DH.MaKhachHang
								where MaTaiXe ='TX4ALV5QOR'`
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
	// [GET] /earning-tracking/getThongKe
	getThongKe(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select month(NgayGiaoHang) as thang, count(*) as sldh, sum(PhiVanChuyen) as phi
							from PHIEUDATHANG
							where year(NgayGiaoHang) = '2007' and MaTaiXe is null
							group by month(NgayGiaoHang)
							ORDER BY month(NgayGiaoHang) ASC`
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

module.exports = new EarningTrackingController();
