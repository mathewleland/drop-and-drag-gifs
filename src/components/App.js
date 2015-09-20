import React, { Component } from 'react';
import urls from '../constants/urls';
import './App.scss';

export class App extends Component {
  render() {
    let logoUrl = require('../../static/images/logo.svg');
    let results = [{ label: "Foo" }, { label: "Bar" }];
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
            <div className="dropzone">
              <img src="https://media.giphy.com/media/13p77tfexyLtx6/giphy.gif" />
            </div>
            <div className="dropzone">
              <img src="https://media.giphy.com/media/iLqpYAbKGOrqU/giphy.gif" />
            </div>
            <div className="dropzone">
              <img src="https://media.giphy.com/media/8ytDUrlW9JbG0/giphy.gif" />
            </div>
            <div className="dropzone">
              <img src="https://media.giphy.com/media/PekRU0CYIpXS8/giphy.gif" />
            </div>
          </main>
          <aside className="sidebar">
            <input className="search-input" name="search" placeholder="Search" />
            { results.map((r) => <div className="search-result" key={r.label}>{r.label}</div>) }
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
