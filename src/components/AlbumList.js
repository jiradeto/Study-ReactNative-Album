import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {

  state = {
    albums: []
  };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          albums: json
        });
      }).catch((error) => {
        console.error(error);
      });
  }


  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail album={album} key={album.title} />
    );
  }

  render() {
    console.log('render !!');
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
