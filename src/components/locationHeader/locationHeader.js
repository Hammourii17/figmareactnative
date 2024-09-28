import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './locationHeader.styles';

const LocationHeader = () => {
  return (
    <View style={styles.container}>
      {/* Left Side: Location and Dropdown */}
      <View style={styles.leftContainer}>
        <Text style={styles.locationText}>Location</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.cityText}>Jakarta</Text>
          <MaterialIcons name="arrow-downward" size={20} color="#838383" />
        </TouchableOpacity>
      </View>

      {/* Right Side: Notification */}
      <TouchableOpacity style={styles.notification}>
      <MaterialIcons name="notifications-none" size={24} color="black" />
      <View style={styles.notificationBadge} />
      </TouchableOpacity>
    </View>
  );
};

export default LocationHeader;