const MovieService = require("../services/movie.service")

class MovieController {
	static findAll = async (req, res, next) => {
		try {
			const movies = await MovieService.findAll();
			res.json(movies);
		} catch (error) {
			next(error);
		}
	};

	static findOne = async (req, res, next) => {
		try {
			const movies = await MovieService.findOne(req.params.id);
			res.json(movies);
		} catch (error) {
			next(error);
		}
	};

	static create = async (req, res, next) => {
		try {
			const movies = await MovieService.create(req.body);
			res.json({ message: "Movie created", movies });
		} catch (error) {
			next(error);
		}
	};

	static upload = async (req, res, next) => {
		try {
			const file = await MovieService.upload(req.file);
			res.json({ message: "File uploaded", imageUrl: file });
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
			const movie = await MovieService.update(params);
			res.json({ message: "Movie updated", data: params.body });
		} catch (error) {
			next(error);
		}
	};

	static destroy = async (req, res, next) => {
		try {
			const movie = await MovieService.destroy(req.params.id);
			res.json({ message: "Movie deleted" });
		} catch (error) {
			next(error);
		}
	};
}

module.exports = MovieController;