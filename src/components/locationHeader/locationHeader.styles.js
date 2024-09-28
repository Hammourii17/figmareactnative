import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    marginTop: 100,
      paddingHorizontal: 20,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    leftContainer: {
        // flexDirection: 'column',         
        // alignItems: 'flex-start',        
      },
    
    locationText: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 15,
      color:'#838383',
    },
    dropdown: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
    },
    cityText: {
      fontSize: 21,
      fontWeight: 500,
      lineHeight: 25,
      color:'#000000',
      marginRight: 5,
    },
    notification: {

      padding:8,
      alignSelf:'flex-start',
      
    },
    notificationBadge: {
      position: 'absolute',
      right: -2,
      top: -2,
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: 'red',
    },
  });

    export default styles;