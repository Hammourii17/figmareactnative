import React from 'react';
import styles from './gallery.styles';1
import { View, Text, ImageBackground, FlatList, StyleSheet } from 'react-native';

const images = [
  { id: '1', uri: 'https://thumbs.dreamstime.com/b/house-icon-24661687.jpg' },
  { id: '2', uri: 'https://thumbs.dreamstime.com/b/house-icon-24661687.jpg' },
  { id: '3', uri: 'https://thumbs.dreamstime.com/b/house-icon-24661687.jpg' },
  { id: '4', uri: 'https://thumbs.dreamstime.com/b/house-icon-24661687.jpg' },
  { id: '5', uri: 'https://thumbs.dreamstime.com/b/house-icon-24661687.jpg', more: true },
];

const Gallery = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: item.uri }}
          style={styles.image}
          imageStyle={styles.imageRounded}
        >
          {item.more && (
            <View style={styles.overlay}>
              <Text style={styles.moreText}>+5</Text>
            </View>
          )}
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.galleryList}
      />
    </View>
  );
};
export default Gallery;