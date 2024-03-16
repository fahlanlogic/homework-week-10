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
}

module.exports = UserRepo;
