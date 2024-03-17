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

	static update = async (req, res, next) => {
		try {
			const params = {
				id: req.params.id,
				body: req.body,
			};
			await UserServices.update(params);
			res.json({ message: "User updated", data: params.body });
		} catch (error) {
			next(error);
		}
	};

	static destroy = async (req, res, next) => {
		try {
			await UserServices.destroy(req.params.id);
			res.json({ message: "User deleted" });
		} catch (error) {
			next(error);
		}
	};
}

module.exports = UserControllers;
