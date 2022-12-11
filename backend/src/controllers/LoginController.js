const config = require("../DbConfig");
const sql = require("mssql");
class BranchController {
	async index(req, res) {}
	// [POST] /
	index(req, res) {
		var name = { name: "" };
		const func = async () => {
			try {
				if (req.body.user === "user" && req.body.password === "123")
					name.name = "Được bạn ơi";
				return name;
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		};
		func().then((ress) => {
			res.json(ress);
		});
	}
}

module.exports = new BranchController();
