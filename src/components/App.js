import React from "react";
import Search from "./Search";
import { books, cities } from "./data";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBook: "",
      selectedCity: ""
    };
  }

  // when a city is clicked, it should show a div below all the search results with the selected city displayed
  handleCityClick = e => {
    const value = e.target.getAttribute("value");
    this.setState({ selectedCity: value });
  };

  // when a book is clicked, it should show a div below all the search results with the selected book displayed
  handleBookClick = e => {
    const value = e.target.getAttribute("value");
    this.setState({ selectedBook: value });
  };

  // render all the cities that match the value inside of the search box. If no result is found, let users know
  renderCitiesData = value => {
    const result = cities
      .filter(city => {
        return city.toLowerCase().indexOf(value.toLowerCase()) === 0;
      })
      .map(city => {
        return (
          <div
            key={city}
            className="search-item"
            value={city}
            onClick={this.handleCityClick}
          >
            {city}
          </div>
        );
      });

    if (result.length) {
      return result;
    }
    // let users know if result is empty
    return <div className="search-item">No results found</div>;
  };

  // render all the books that match the value inside of the search box. If no result is found, let users know
  renderBooksData = value => {
    const result = books
      .filter(book => {
        return book.title.toLowerCase().indexOf(value.toLowerCase()) === 0;
      })
      .map(book => {
        return (
          <div
            key={book.title}
            className="search-item"
            value={book.title}
            onClick={this.handleBookClick}
          >
            {book.title} by {book.author}
          </div>
        );
      });

    if (result.length) {
      return result;
    }

    // let users know if result is empty
    return <div className="search-item">No results found</div>;
  };

  getInputRef = node => {
    if (node) {
      node.focus();
    }
  };

  render() {
    return (
      <div className="app">
        <Search
          title="Search Cities"
          renderData={this.renderCitiesData}
          selected={this.state.selectedCity}
          inputRef={this.getInputRef}
        />
        <Search
          title="Search Books"
          renderData={this.renderBooksData}
          selected={this.state.selectedBook}
        />
      </div>
    );
  }
}

export default App;
