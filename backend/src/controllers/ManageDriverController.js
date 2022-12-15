const config = require("../DbConfig");
const sql = require("mssql");
class ManageDriverController {
	// [GET] /manage-driver/
	index(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select DH.MaPhieuDatHang, DH.TongHoaDon,
									DC1.ThanhPho as tinh1, DC1.Huyen as huyen1, DC1.Xa as xa1,
									DC2.ThanhPho as tinh2, DC2.Huyen as huyen2, DC2.Xa as xa2
						from PHIEUDATHANG DH join DIACHI DC1 on DH.DiaChiGH=DC1.MaDiaChi --Địa chỉ giao hàng
											 join CHINHANH CN on CN.MaChiNhanh=DH.MaChiNhanh
											 join DIACHI DC2 on CN.MaDiaChi=DC2.MaDiaChi --Địa chỉ chi nhánh
											 join KHACHHANG KH on KH.MaKhachHang=DH.MaKhachHang
						where MaTaiXe='TXAI7PM1X3'`
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
	// [GET] /manage-driver/getDetail
	getDetail(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select count(*) from dbo.MONAN`)
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

module.exports = new ManageDriverController();
