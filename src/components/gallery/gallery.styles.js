import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      marginVertical: 20,
      paddingHorizontal: 25,
    },
    title: {
      fontSize: 17,
      fontWeight: '400',
      lineHeight: 20,
      marginBottom: 10,
      color: '#000000',
    },
    galleryList: {
      flexDirection: 'row',
    },
    imageContainer: {
      marginRight: 15,
    },
    image: {
      width: 90,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageRounded: {
      borderRadius: 15, // Rounded corners for the images
    },
    overlay: {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 15,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    moreText: {
      fontSize: 22,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
export default styles;  