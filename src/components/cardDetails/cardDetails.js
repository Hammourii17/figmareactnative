// CardDetails.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './cardDetails.styles';  
const CardDetails = () => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground 
        source={{ uri: 'https://t3.ftcdn.net/jpg/01/19/78/22/240_F_119782294_CBQ2O9GuxqspZvnHjodICJct3c5hyPh0.jpg' }} 
        style={styles.image}
        imageStyle={styles.imageStyle}
      >

        <View style={styles.topLeftIcon}>
        <MaterialIcons name="arrowdown" size={24} color="white" />
        </View>


        <View style={styles.topRightIcon}>
          <MaterialIcons name="bookmark-border" size={24} color="white" />
        </View>


        <View style={styles.textContainer}>
          <Text style={styles.propertyTitle}>Dreamsville House</Text>
          <Text style={styles.propertyLocation}>JL Sultan Iskandar Muda, Jakarta selatan</Text>


          <View style={styles.propertyInfo}>
            <View style={styles.infoItem}>
              <MaterialIcons name="hotel" size={20} color="white" />
              <Text style={styles.infoText}>6 Bedroom</Text>
            </View>
            <View style={styles.infoItem}>
            <MaterialIcons name="bed" size={16} color="gray" />
              <Text style={styles.infoText}>4 Bathroom</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardDetails;