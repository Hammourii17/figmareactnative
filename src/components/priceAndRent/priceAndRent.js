import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './priceAndRent.styles';
const PriceAndRent = () => {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={{ uri: 'https://i.sstatic.net/HILmr.png' }} 
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >

        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>Rp. 2.500.000.000 / Year</Text>
        </View>


        <TouchableOpacity style={styles.buttonContainer}>
          <View style={styles.rentButton}>
            <Text style={styles.buttonText}>Rent Now</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default PriceAndRent;