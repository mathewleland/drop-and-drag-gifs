import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';
import GifSwatch from './GifSwatch';
import GifDropzone from './GifDropzone';
import axios from 'axios';

import './App.scss';

@DragDropContext(HTML5Backend)
export class App extends Component {

  constructor() {
    super()

    this.state = {
      searchResults: [],
      query: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderSwatch(r) {
    const props = {
      key: r.id,
      id: r.id,
      thumbnailUrl: r.images.fixed_height_still.url,
      playingUrl: r.images.fixed_height.url,
      previewUrl: r.images.preview_gif.url,
    };
    return (<GifSwatch {...props} />);
  }

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/trending?api_key=FG64AKsSZ5rhYVB3oJbDKfSIz34v0RhO&limit=25')
         .then( res => {
           this.setState({ searchResults: res.data.data});
         })
         .catch( err => {
           console.log(err);
         });
  }

  searchGifs() {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=FG64AKsSZ5rhYVB3oJbDKfSIz34v0RhO&limit=25&q=${this.state.query}`)
      .then( res => {
        this.setState({ searchResults: res.data.data});
      })
      .catch( err => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.searchGifs();
  }

  render() {

    let resultSwatches = this.state.searchResults.map(::this.renderSwatch);
    return (
      <div className="App">
        <header className="masthead">
          <h1>
            My Day in GIFs
          </h1>
          <p> Grab a GIF and drag it to a box </p>
          <p> Powered By <a href='https://developers.giphy.com/'>GIPHY </a></p>
        </header>
        <div className="content-container">

          <aside className="search">
            <form onSubmit={this.handleSubmit}>
              <input 
                className="search-input" 
                name="search" 
                placeholder="Find the perfect GIF" 
                onChange={this.handleChange} 
                value={this.state.query}/>
            </form>
            <div className='gifResults'>
              { resultSwatches }
            </div>
        </aside>

          <main className="dropped">
            <div className='dropped-item'>
              <h3> How I imagined it would go</h3>
              <GifDropzone />
            </div>
            <div className='dropped-item'>
              <h3> How it started out </h3>
              <GifDropzone />
            </div>
            <div className='dropped-item'>
            <h3> What it immediately turned into</h3>
            <GifDropzone />
            </div>
            <div className='dropped-item'>
              <h3> Left me like </h3>
              <GifDropzone />
            </div>
            
            
            
          </main>
          
        </div>
        
      </div>
    );
  }
}
