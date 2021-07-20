import React, { Component } from 'react';

class GifList extends Component {

  render() {
    return (
      <div>
        {this.props.gifList.slice(0,3).map( gif => {
          return (
            <img key={gif.url} src={gif.url} alt="gif" />
          )
        })}
      </div>
    );
  }
}

export default GifList;