import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#1976D2',
  },
  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 20,
    marginLeft: 10,
  },
  iconContainer: {
    width: 30,
   
  },
  separator: {
    height: 1,
    backgroundColor: 'white',
    marginVertical: 10,
    opacity: 0.5, // Slightly transparent
  },
});

export default styles;
