import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Gallery from './Gallery';

import '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {

    const BASE_URL = 'https://api.spotify.com/v1/';
    const ACCESS_TOKEN = ''; // include a valid access token

    let FETCH_URL = `${BASE_URL}search?q=${this.state.query}&type=artist&limit=1`;

    fetch(FETCH_URL, {
      methode: 'GET',
      headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN
      }
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({ artist });

      FETCH_URL = `${BASE_URL}artists/${artist.id}/top-tracks?country=US&`;

      fetch(FETCH_URL, {
        methode: 'GET',
        headers: {
          'Authorization': 'Bearer ' + ACCESS_TOKEN
        }
      })
      .then(response => response.json())
      .then(json => {
        const tracks = json.tracks;
        this.setState({ tracks });
      })
    });
  }

  render() {
    const { query, artist, tracks } = this.state;
    return(
      <div className="App">
        <h1>Music Master</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={ query }
              onChange={ event => { this.setState({query: event.target.value})} }
              onKeyPress={ event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={()=> this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          artist !== null
                 ? <div>
                     <Profile
                       artist={ artist }
                     />
                     <Gallery
                       tracks={ tracks }
                     />
                   </div>
                 : <div></div>
        }
      </div>
    )
  }

}

export default App;
