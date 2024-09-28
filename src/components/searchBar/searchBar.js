import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './searchBar.styles';
import { Icon } from 'react-native-elements';


const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
      <Icon name="search" type="material" size={20} color="#B0B0B0" style={styles.searchIcon} />
      <TextInput
          style={styles.searchInput}
          placeholder="Search address, or near you"
          placeholderTextColor="#A0A0A0"
        />
      </View>


      <TouchableOpacity style={styles.filterButton}>
        <MaterialCommunityIcons name="tune" size={24}  />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
