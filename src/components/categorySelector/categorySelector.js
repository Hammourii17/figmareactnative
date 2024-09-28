import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './categorySelector.styles';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component


const categories = [
  'House', 'Apartment', 'Hotel', 'Villa', 'Cottage'
];

const CategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState('House');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
         <LinearGradient
         key={index}
         colors={selectedCategory === category ? ['#A0DAFB', '#0A8ED9'] : ['#F5F5F5', '#F5F5F5']} // Gradient for selected, solid color for unselected
         style={styles.categoryItem} // Apply gradient to the entire button
       >
         <TouchableOpacity
           style={styles.touchableItem} // New touchable style for padding, since gradient is now outside
           onPress={() => handleCategoryPress(category)}
         >
           <Text style={selectedCategory === category ? styles.selectedCategoryText : styles.categoryText}>
             {category}
           </Text>
         </TouchableOpacity>
       </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategorySelector;
