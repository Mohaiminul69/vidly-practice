import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { genres, onGenreSelect, selectedGenre } = this.props;
    return (
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            style={{ cursor: "pointer" }}
            key={genre._id}
            onClick={() => onGenreSelect(genre)}
            className={
              selectedGenre === genre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
