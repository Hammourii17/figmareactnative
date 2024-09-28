import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  propertyImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  detailsContainer: {
    paddingVertical: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
  price: {
    color: '#0A8ED9',
    fontSize: 12,
    marginVertical: 6,
    lineHeight: 15,
    fontWeight: '400',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 6,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 35,
  },
  infoText: {
    marginLeft: 6,
    fontSize: 12,
    color: 'gray',
  },
});

export default styles;
