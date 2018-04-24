import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

import AlbumDetail from './src/components/AlbumDetail';

const App = () => (
  <View>
    < Header headerTitle="Albums" />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
