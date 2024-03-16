const { Movie } = require("../models");

class MovieRepo {
	static findAll = async () => {
		try {
			const movies = await Movie.findAll();
			return movies;
		} catch (error) {
			throw error;
		}
	};

	static findOne = async id => {
		try {
			const movies = await Movie.findOne(id);
			return movies;
		} catch (error) {
			throw error;
		}
	};

	static create = async data => {
		try {
			const create = await Movie.create(data);
			return create;
		} catch (error) {
			throw error;
		}
	};

	static update = async (id, body) => {
		try {
			const movie = await Movie.findOne({ where: { id } });
			await movie.update(body);
		} catch (error) {
			throw error;
		}
	};

	static destroy = async id => {
		try {
			const movie = await Movie.findOne({ where: { id } });
			await movie.destroy();
		} catch (error) {}
	};
}

module.exports = MovieRepo;
