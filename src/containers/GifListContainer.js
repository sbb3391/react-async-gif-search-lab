import React, { Component } from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    gifs: []
  }

  submitHandler = (searchValue = 'dolphins') => {
    const mainUrl = `https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=dc6zaTOxFJmzC&rating=g`

    fetch(mainUrl)
    .then(resp => resp.json())
    .then(json => {
      this.setState({
        gifs: json.data.map( gif => ({url: gif.images.original.url}) )
      })
    })
  }


  render() {
    return (
      <div>
        <GifSearch submitHandler={this.submitHandler}/>
        <GifList gifList={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;