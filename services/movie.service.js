const MovieRepo = require("../repositories/movies.repo");
const { Movie } = require("../models");

class MovieService {
	static findAll = async () => {
		try {
			const movies = await MovieRepo.findAll();
			return movies;
		} catch (error) {
			throw error;
		}
	};

	static findOne = async id => {
		try {
			const movies = await MovieRepo.findOne({ where: { id } });
			if (!movies) throw { code: 404 };
			return movies;
		} catch (error) {
			throw error;
		}
	};

	static create = async body => {
		try {
			const { title, genres, year, photo } = body;
			const isTitleExist = await Movie.findAll({
				where: { title },
			});

			if (isTitleExist.length > 0) throw { code: 409 };

			const movie = await MovieRepo.create({
				title,
				genres,
				year,
				photo,
			});

			if (!title || !genres || !year) throw { code: 400 };

			return movie;
		} catch (error) {
			throw error;
		}
	};

	static upload = async file => {
		try {
			if (file) {
				const url = `${process.env.BASE_URL}/api/uploads/${file.filename}`;
				return url;
			} else {
				throw { code: 400 };
			}
		} catch (error) {
			throw error;
		}
	};

	static update = async params => {
		try {
			const { id, body } = params;
			const movie = await MovieRepo.findOne({ where: { id } });
			if (!movie) throw { code: 404 };
			if (!body.title || !body.genres || !body.year)
				throw { code: 400 };
			await MovieRepo.update(id, body);
		} catch (error) {
			throw error;
		}
	};

	static destroy = async id => {
		try {
			const movie = await MovieRepo.findOne({ where: { id } });
			if (!movie) throw { code: 404 };
			await MovieRepo.destroy(id);
		} catch (error) {
			throw error;
		}
	};
}

module.exports = MovieService;
