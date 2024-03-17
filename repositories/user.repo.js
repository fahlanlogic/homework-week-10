const { User } = require("../models");

class UserRepo {
	static findAll = async () => {
		try {
			const users = await User.findAll();
			return users;
		} catch (error) {
			throw error;
		}
	};

	static findOne = async id => {
		try {
			const user = await User.findOne(id);
			return user;
		} catch (error) {
			throw error;
		}
	};

	static create = async body => {
		try {
			const user = await User.create(body);
			return user;
		} catch (error) {
			throw error;
		}
	};

	static update = async (id, body) => {
		try {
			const user = await User.findOne({ where: { id } });
			await user.update(body);
		} catch (error) {
			throw error;
		}
	};

	static destroy = async id => {
		try {
			const user = await User.findOne({ where: { id } });
			await user.destroy();
		} catch (error) {}
	};
}

module.exports = UserRepo;
