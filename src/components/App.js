import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';

import urls from '../constants/urls';
import GifSwatch from './GifSwatch';
import GifDropzone from './GifDropzone';
import mockResponse from '../constants/mockResponse';

import './App.scss';

@DragDropContext(HTML5Backend)
export class App extends Component {

  renderSwatch(r) {
    const props = {
      key: r.id,
      id: r.id,
      thumbnailUrl: r.images.fixed_height_small_still.url,
    };
    return (<GifSwatch {...props} />);
  }

  render() {
    let logoUrl = require('../../static/images/logo.svg');

    // TODO connect results to search box and giphy API
    let resultSwatches = mockResponse.data.map(::this.renderSwatch);
    return (
      <div className="App">
        <header className="masthead">
          <h1>
            <a href="/">
              <img src={logoUrl} height={36} />
              <span>Expedite Gifs</span>
            </a>
          </h1>
        </header>
        <div className="content-container">
          <main className="main">
            <GifDropzone src="https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif"/>
            <GifDropzone src="https://media.giphy.com/media/iLqpYAbKGOrqU/giphy.gif"/>
            <GifDropzone src="https://media.giphy.com/media/8ytDUrlW9JbG0/giphy.gif"/>
            <GifDropzone src="https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif"/>
          </main>
          <aside className="sidebar">
            <input className="search-input" name="search" placeholder="Search" />
            { resultSwatches }
          </aside>
        </div>
        <footer className="footer">
          {<a href={urls.expediteHomepage} target="_blank">About Expedite</a>}
          {' | '}
          {<a href={urls.expediteCareers} target="_blank">Work at Expedite</a>}
          {' | '}
          {<a href={urls.expediteChallenge} target="_blank">The Expedite challenge</a>}
        </footer>
      </div>
    );
  }
}
