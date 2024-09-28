import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sidebar: {
      justifyContent: 'center',
      width: 200, 
      backgroundColor: '#0A8ED9',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: -250, 
      zIndex: 2,


    },
    mainContent: {
      flex: 1,
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: '600',
    },
    mainContent: {
      flex: 1,
      backgroundColor: 'white',  // Ensure the main content always has a white/light background
      borderRadius: 20, // Optional: Can be added to match the screenshot rounded corner effect
marginTop:20, 

  },
  });

  export default styles;
