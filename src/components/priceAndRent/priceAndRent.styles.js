import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      borderRadius: 15,

 
    },
    backgroundImage: {
      width: 350,
      height: 150, // Adjust this based on your design
      justifyContent: 'flex-end',
      padding: 20, // Padding for the price and button
    },
    backgroundImageStyle: {
      borderRadius: 15, // Rounded corners for the map image
    },
    priceContainer: {
      flex: 1,
      justifyContent: 'center',
      position: 'absolute',
    bottom: 20,
    left:10,
    },
    priceLabel: {
      fontSize: 14,
      color: '#858585', 
      marginBottom: 5,
    },
    priceValue: {
      fontSize: 17,
      lineHeight:20,
      fontWeight: '500',
      color: '#000000', 
    },
    buttonContainer: {
      alignSelf: 'flex-end',
      

    },
    rentButton: {
      width: 120,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0A8ED9', 
      borderRadius: 20,
      shadowColor: '#363B64',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
export default styles;  