const { Movie } = require("../models")

class MoviesRepo {
  static findAll = async () => {
    try {
      const movies = await Movie.findAll();
      return movies;
    } catch (error) {
      console.log(error);
    }
  }

  static findOne = async (params) => {
    try {
      const movies = await Movie.findOne(params);
      return movies;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = MoviesRepo;