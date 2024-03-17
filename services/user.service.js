const UserRepo = require("../repositories/user.repo");
const { User } = require("../models");

class UserServices {
	static findAll = async () => {
		try {
			const users = await UserRepo.findAll();
			return users;
		} catch (error) {
			throw error;
		}
	};

	static findOne = async id => {
		try {
			const user = await UserRepo.findOne({ where: { id } });
			if (!user) throw { code: 404 };
			return user;
		} catch (error) {
			throw error;
		}
	};

	static create = async body => {
		try {
			const { email, password, gender, role } = body;
			const isEmailExist = await User.findAll({
				where: { email },
			});

			if (isEmailExist.length > 0) throw { code: 409 };
			if (!email || !password || !role) throw { code: 400 };

			const user = await UserRepo.create({
				email,
				password,
				gender,
				role,
			});

			return user;
		} catch (error) {
			throw error;
		}
	};

	static update = async params => {
		try {
			const { id, body } = params;
			const user = await UserRepo.findOne({ where: { id } });
			if (!user) throw { code: 404 };
			if (!body.email || !body.password || !body.role)
				throw { code: 400 };
			await UserRepo.update(id, body);
		} catch (error) {
			throw error;
		}
	};

	static destroy = async id => {
		try {
			const user = await UserRepo.findOne({ where: { id } });
			if (!user) throw { code: 404 };
			await UserRepo.destroy(id);
		} catch (error) {
			throw error;
		}
	};
}

module.exports = UserServices;
