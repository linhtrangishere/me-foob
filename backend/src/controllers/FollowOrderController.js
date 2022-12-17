const config = require("../DbConfig");
const sql = require("mssql");
class FollowOrderController {
	// [GET] /follow-order/getDonHang/:slug
	getDonHang(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select DH.MaPhieuDatHang, DH.TongHoaDon, DH.TinhTrangDonHang
							from PHIEUDATHANG DH join CHINHANH CN on CN.MaChiNhanh=DH.MaChiNhanh
											join KHACHHANG KH on KH.MaKhachHang=DH.MaKhachHang
							where KH.MaKhachHang='${req.params.slug}'`
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

	// [POST] /follow-order/getTenKH
	getTenKH(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select distinct(KH.TenKhachHang), CN.TenChiNhanh,
								DC1.Xa + ', '+ DC1.Huyen + ', ' + DC1.ThanhPho as dcgh,
								DC2.Xa + ', '+ DC2.Huyen + ', ' + DC2.ThanhPho as dccn
							from CHITIETPHIEUDATHANG CTDH
								join PHIEUDATHANG DH on DH.MaPhieuDatHang=CTDH.MaPhieuDatHang
								join KHACHHANG KH on KH.MaKhachHang=DH.MaKhachHang
								join CHINHANH CN on CN.MaChiNhanh=DH.MaChiNhanh
								join DIACHI DC1 on DH.DiaChiGH=DC1.MaDiaChi --Địa chỉ giao hàng
								join DIACHI DC2 on CN.MaDiaChi=DC2.MaDiaChi --Địa chỉ chi nhánh
							where CTDH.MaPhieuDatHang='${req.body.pdh}'`
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

	// [POST] /follow-order/getDetail
	getDetail(req, res) {
		const func = async () => {
			try {
				let products;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(
							`select MA.TenMonAn, CTDH.SoLuongMonAn, MA.Gia, CTDH.Ghichu
							from CHITIETPHIEUDATHANG CTDH
								join MONAN MA on CTDH.MaMonAn=MA.MaMonAn
								join PHIEUDATHANG DH on DH.MaPhieuDatHang=CTDH.MaPhieuDatHang
							where CTDH.MaPhieuDatHang='${req.body.pdh}'`
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

module.exports = new FollowOrderController();
