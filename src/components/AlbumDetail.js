import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking
} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbContainer}>
          <Image style={{ width: 50, height: 50 }} source={{ uri: album.thumbnail_image }} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.artworkImage} source={{ uri: album.image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)} >
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  thumbContainer: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  artworkImage: {
    flex: 1,
    height: 300,
    width: null
  },
  headerText: {
    fontSize: 18
  },

  headerContainer: {
    paddingLeft: 10,
    justifyContent: 'space-around'
  }

});

export default AlbumDetail;
