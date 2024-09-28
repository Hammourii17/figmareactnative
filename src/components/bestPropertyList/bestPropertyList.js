import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import BestPropertyCard from '../bestPropertyCard/bestPropertyCard'; 
import styles from './bestPropertyList.styles'; 

const BestPropertyList = () => {
  const properties = [
    {
      image: 'https://example.com/orchadhouse.jpg',
      title: 'Orchad House',
      price: 'Rp. 2.500.000.000',
      bedrooms: 6,
      bathrooms: 4,
    },
    {
      image: 'https://example.com/hollieshouse.jpg',
      title: 'The Hollies House',
      price: 'Rp. 2.000.000.000',
      bedrooms: 5,
      bathrooms: 2,
    },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Best for you</Text>
        <TouchableOpacity>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
      </View>


      {properties.map((property, index) => (
        <BestPropertyCard
          key={index}
          image={property.image}
          title={property.title}
          price={property.price}
          bedrooms={property.bedrooms}
          bathrooms={property.bathrooms}
        />
      ))}
    </View>
  );
};

export default BestPropertyList;
