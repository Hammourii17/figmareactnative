import React from 'react';
import { View, Text, Image} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './propertyCard.styles';
import PropertySvg from "../../assets/images/property.svg"  

const PropertyCard = ({ image, distance, title, address }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={PropertySvg} style={styles.propertyImage} />
      <View style={styles.overlay}>
        <View style={styles.distanceContainer}>
          <MaterialIcons name="location-on" size={16} color="white" />
          <Text style={styles.distanceText}>{distance}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyCard;