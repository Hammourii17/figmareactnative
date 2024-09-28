import React from 'react';
import { View, Text, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './bestPropertyCard.styles';

const BestPropertyCard = ({ image, title, price, bedrooms, bathrooms }) => {
  return (
    <View style={styles.cardContainer}>

      <Image source={{ uri: image }} style={styles.propertyImage} />


      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price} / Year</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialIcons name="bed" size={16} color="gray" />
            <Text style={styles.infoText}>{bedrooms} Bedroom</Text>
          </View>
          <View style={styles.infoItem}>
          <MaterialIcons name="bathtub" size={16} color="gray" />
          <Text style={styles.infoText}>{bathrooms} Bathroom</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BestPropertyCard;
