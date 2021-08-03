import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const {
      genres,
      onGenreSelect,
      selectedGenre,
      textProperty,
      valueProperty,
    } = this.props;
    return (
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            style={{ cursor: "pointer" }}
            key={genre[valueProperty]}
            onClick={() => onGenreSelect(genre)}
            className={
              selectedGenre === genre
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
