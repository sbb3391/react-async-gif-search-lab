import React, { Component } from 'react';

class GifSearch extends Component {
  state = {
    searchValue: ""
  }

  handleChange = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitHandler(this.state.searchValue)
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e, this.state.searchValue)}>
          <input type="text" name="search_value" value={this.state.searchValue} onChange={this.handleChange}/>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;