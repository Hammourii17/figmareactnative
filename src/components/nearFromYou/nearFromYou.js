import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PropertyCard from '../propertyCard/propertyCard';
import PropertySvg from '../../assets/images/property.svg';
import styles from './nearFromYou.styles';

const NearFromYou = () => {
  const properties = [
    {
      image: PropertySvg,
      distance: '1.8 km',
      title: 'Dreamsville House',
      address: 'JL Sultan Iskandar Muda',
    },
    {
      image: PropertySvg,
      distance: '2.1 km',
      title: 'Ascot House',
      address: 'JL Cilandak Tengah',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Near from you</Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>

      {/* Property Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={PropertySvg}
            distance={property.distance}
            title={property.title}
            address={property.address}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NearFromYou;