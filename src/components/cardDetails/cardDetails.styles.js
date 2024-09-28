import { StyleSheet } from 'react-native';  
const styles = StyleSheet.create({
    cardContainer: {
      width: '90%',
      borderRadius: 20,
      overflow: 'hidden',
      marginVertical: 20,
    },
    image: {
      width: '100%',
      height: 300,
      justifyContent: 'flex-end',
    },
    imageStyle: {
      borderRadius: 30,
    },
    textContainer: {
      padding: 20,
    },
    propertyTitle: {
      fontSize: 22,
      color: '#FFFFFF',
      fontWeight: '600',
      lineHeight: 25,
    },
    propertyLocation: {
      fontSize: 12,
      color: '#D4D4D4',
      lineHeight: 15,
      fontWeight: '400',
      fontFamily:'Ralway',
      marginVertical: 10,
    },
    propertyInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    infoItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 40,
    },
    infoText: {
      fontSize: 14,
      color: 'white',
      marginLeft: 5,
    },
    topLeftIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 20,
    },
    topRightIcon: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 10,
      borderRadius: 20,
    },
  });
  
  export default styles;