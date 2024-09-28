import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  categoryItem: {
    backgroundColor: '#F5F5F5', // Light grey background for unselected
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategory: {
    // paddingVertical: 8,
    // paddingHorizontal: 16,
    borderRadius: 20,
    shadowColor: '#363B64',
    shadowOffset: { width: 0, height: 8.55 },
    shadowOpacity: 0.2,
    elevation: 4,
  },
  categoryText: {
    fontSize: 16,
    color: '#A0A0A0', // Light grey for unselected
  },
  selectedCategoryText: {
    color: 'white', // White text for selected category
  },
});

export default styles;
