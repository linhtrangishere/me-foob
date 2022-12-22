const config = require('../DbConfig');
const sql = require('mssql');
class ManageCoopController {
    async index(req, res) {}
    // [GET] /manage-coop/get1
    get1(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select top 10 dt.TenDoiTac, count (cn.MaDoiTac) as slcn, sum(cn.DoanhThu) as doanhso, sum(cn.DoanhThu) * 0.1 as hoahong, hd.NgayHetHan
								from PHIEUDATHANG dh
								join CHINHANH cn on dh.MaChiNhanh=cn.MaChiNhanh
								join DOITAC dt on cn.MaDoiTac=dt.MaDoiTac
								join HOPDONG hd on hd.MaDoiTac=dt.MaDoiTac
								group by dt.TenDoiTac, dt.MaDoiTac, hd.NgayHetHan`)
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
	// [GET] /manage-coop/get2
    get2(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select top 10 dt.MaDoiTac, dt.TenDoiTac, count (dh.MaKhachHang) as slkh
								from PHIEUDATHANG dh
								join CHINHANH cn on dh.MaChiNhanh=cn.MaChiNhanh
								join DOITAC dt on cn.MaDoiTac=dt.MaDoiTac
								group by dt.TenDoiTac, dt.MaDoiTac`)
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
	// [GET] /manage-coop/get3
    get3(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select top 10 dt.MaDoiTac, dt.TenDoiTac, count (dh.MaPhieuDatHang) as sldh, sum(cn.DoanhThu) as doanhso
								from PHIEUDATHANG dh
								join CHINHANH cn on dh.MaChiNhanh=cn.MaChiNhanh
								join DOITAC dt on cn.MaDoiTac=dt.MaDoiTac
								group by dt.TenDoiTac, dt.MaDoiTac`)
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
	// [GET] /manage-coop/get4
    get4(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select top 10 dt.MaDoiTac, dt.TenDoiTac, count (dh.MaPhieuDatHang) as sldh, sum(cn.DoanhThu)/10 as doanhso
								from PHIEUDATHANG dh
								join CHINHANH cn on dh.MaChiNhanh=cn.MaChiNhanh
								join DOITAC dt on cn.MaDoiTac=dt.MaDoiTac
								group by dt.TenDoiTac, dt.MaDoiTac`)
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
	// [GET] /manage-coop/get5
    get5(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select top 10 dt.MaDoiTac, dt.TenDoiTac, sum(cn.DoanhThu) as doanhso
								from PHIEUDATHANG dh
								join CHINHANH cn on dh.MaChiNhanh=cn.MaChiNhanh
								join DOITAC dt on cn.MaDoiTac=dt.MaDoiTac
								group by dt.TenDoiTac, dt.MaDoiTac`)
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
	// [GET] /manage-coop/get6
    get6(req, res) {
		const func = async () => {
			try {
				let result;
				await sql.connect(config.config).then((conn) =>
					conn
						.request()
						.query(`select top 10 dt.MaDoiTac, dt.TenDoiTac, td.Rating
								from THUCDON td
								join DOITAC dt on td.MaDoiTac=dt.MaDoiTac
								group by dt.MaDoiTac, dt.TenDoiTac, td.Rating
								having td.Rating=1`)
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
}

module.exports = new ManageCoopController();
