import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 10,
    // justifyContent: 'space-between',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginRight: 10, // Space between search bar and filter button
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  filterButton: {
    backgroundColor: '#0A8ED9',
    padding: 10,
    borderRadius: 12, // Rounded edges for the filter button
  },
});

export default styles;
