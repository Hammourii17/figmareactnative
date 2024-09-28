import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 4,
    },
    profileSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',

    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 15,
    },
    textSection: {
      // justifyContent: 'center',
    },
    name: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 20,
      color: '#000000',
    },
    title: {
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 15,
      color: '#858585',
    },
    actionIcons: {
      flexDirection: 'row',
      alignItems : 'center',
      // gap: 10,
    },
    iconButton: {
      backgroundColor: '#A0DAFB',
      padding: 10,
      borderRadius: 10,
      marginLeft: 10,
    },
  });

export default styles;