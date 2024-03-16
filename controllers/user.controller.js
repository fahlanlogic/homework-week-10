const UserServices = require("../services/user.service");

class UserControllers {
	static findAll = async (req, res, next) => {
		try {
			const users = await UserServices.findAll();
			res.json(users);
		} catch (error) {
			next(error);
		}
	};

	static findOne = async (req, res, next) => {
		try {
			const user = await UserServices.findOne(req.params.id);
			res.json(user);
		} catch (error) {
			next(error);
		}
	};

	static create = async (req, res, next) => {
		try {
			const user = await UserServices.create(req.body);
			res.json({ message: "User created", user });
		} catch (error) {
			next(error);
		}
	};
}

module.exports = UserControllers;
