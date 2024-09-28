import React from 'react';
import { View, Text } from 'react-native';
import styles from './description.styles';

const Description = () => {
  const description = "The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <Text style={styles.description}>
        {description}
        <Text style={styles.showMore}> Show More</Text>
      </Text>
    </View>
  );
};


export default Description;
