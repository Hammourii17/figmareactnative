// DetailsScreen.js
import React from 'react';
import {  ScrollView } from 'react-native';
import CardDetails from '../../components/cardDetails/cardDetails'; 
import styles from './detailsscreen.styles'; 
import Description from '../../components/description/description';  
import OwnerInfo from '../../components/ownerInfo/ownerInfo';
import Gallery from '../../components/gallery/gallery';
import PriceAndRent from '../../components/priceAndRent/priceAndRent';

const DetailsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CardDetails />
      <Description />
      <OwnerInfo />
      <PriceAndRent />
      <Gallery />

    </ScrollView>
  );
};



export default DetailsScreen;
