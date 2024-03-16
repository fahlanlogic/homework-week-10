const MovieService = require("../services/movie.service")

class MovieController {
  static findAll = async (req, res, next) => {
    try {
      const movies = await MovieService.findAll();
      res.json(movies);
    } catch (error) {
      console.log(error);
    }
  }

  static findOne = async (req, res, next) => {
    try {
      const movies = await MovieService.findOne(req.params.id);
      res.json(movies);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MovieController;