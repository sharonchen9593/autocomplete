import React, { Component } from "react";
import SearchBar from "./SearchBar";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      displayData: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.setState({ value: nextProps.selected });
    }
  }

  handleChange = e => {
    const value = e.target.value;
    const displayData = value.length >= 3 ? true : false;
    this.setState({ value, displayData });
  };

  renderPrompt = () => {
    if (this.state.value.length > 0) {
      return <div> Please enter at least 3 characters. </div>;
    }
    return null;
  };

  renderData = () => {
    const { value } = this.state;
    return (
      <div>
        <div className="results">Results:</div>
        {this.props.renderData(value)}
      </div>
    );
  };

  render() {
    const { displayData } = this.state;
    const { title, selected, inputRef } = this.props;
    return (
      <div className="search">
        <div className="title">{title}</div>
        <SearchBar
          onChange={this.handleChange}
          value={this.state.value}
          inputRef={inputRef}
        />
        <div className="search-results">
          {!displayData && this.renderPrompt()}
          {displayData && this.renderData()}
        </div>
      </div>
    );
  }
}

export default Search;
