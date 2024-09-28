import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    cardContainer: {
      width: 250,
      height: 200,
      borderRadius: 20,
      overflow: 'hidden',
      marginRight: 15,
      backgroundColor: '#f0f0f0',
    },
    propertyImage: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay on the image
      justifyContent: 'space-between',
      padding: 10,
    },
    distanceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 15,
      alignSelf: 'flex-end',
    },
    distanceText: {
      color: 'white',
      marginLeft: 5,
    },
    infoContainer: {
      position: 'absolute',
      bottom: 10,
      left: 10,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 17,
      fontWeight: '500',
      lineHeight: 20,
    },
    address: {
      color: '#D7D7D7',
      fontSize: 12,
      fontWeight: '500',
        lineHeight: 15,
      marginTop: 5,
    },
  });

    export default styles;