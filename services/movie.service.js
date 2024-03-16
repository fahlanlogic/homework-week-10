const MoviesRepo = require("../repositories/movie.repo");
const { param } = require("../routers");

class MovieService {
  static findAll = async () => {
    try {
      const movies = await MoviesRepo.findAll();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }

  static findOne = async (id) => {
    try {
      const movies = await MoviesRepo.findOne({ where: { id } });
      return movies;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MovieService;