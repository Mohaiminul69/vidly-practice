import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./Like";
import Pagination from "./Pagination";
import { paginate } from "./../utils/Paginate";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./ListGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    PageSize: 4,
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Movies" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
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
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      movies: allMovies,
      currentPage,
      PageSize,
      genres,
      selectedGenre,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filtered, currentPage, PageSize);
    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            genres={genres}
            onGenreSelect={this.handleGenreSelect}
            selectedGenre={selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showin {filtered.length} movies in the list.</p>
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
          <Pagination
            itemsCount={filtered.length}
            currentPage={currentPage}
            PageSize={PageSize}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
