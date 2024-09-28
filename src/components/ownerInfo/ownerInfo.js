import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styles from './ownerInfo.styles';
const OwnerInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://thumbs.dreamstime.com/b/house-icon-24661687.jpg' }} // Replace with actual profile URL
          style={styles.profileImage}
        />
        <View style={styles.textSection}>
          <Text style={styles.name}>Garry Allen</Text>
          <Text style={styles.title}>Owner</Text>
        </View>
      </View>


      <View style={styles.actionIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="phone" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="chat" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OwnerInfo;