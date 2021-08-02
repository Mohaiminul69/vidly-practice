import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./Like";
import Pagination from "./Pagination";

class Movies extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.setState({ movies: getMovies() });
  }
  handleLike = (movie) => {
    const movies = this.state.movies;
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const { movies } = this.state;
    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th className="text-capitalize">title</th>
                <th className="text-capitalize">genre</th>
                <th className="text-capitalize">stock</th>
                <th className="text-capitalize">rate</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <td className="text-capitalize">{movie.title}</td>
                  <td className="text-capitalize">{movie.genre.name}</td>
                  <td className="text-capitalize">{movie.numberInStock}</td>
                  <td className="text-capitalize">{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onLike={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-sm btn-danger text-capitalize"
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination />
        </div>
      </div>
    );
  }
}

export default Movies;
