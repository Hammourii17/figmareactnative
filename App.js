import React from 'react';
import HomeScreen from "./src/screens/homescreen/homescreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DetailsScreen from './src/screens/detailsscreen/detailsscreen';

console.log('App component is rendering');

const App = () => {
    console.log("App component rendered");  // Add this here

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          {/* <DetailsScreen /> */}
          <HomeScreen />
        </GestureHandlerRootView>
      );
};

export default App;
