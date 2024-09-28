import React, { useState } from 'react';
import { View, Text, Animated , Dimensions } from 'react-native';
import Sidebar from "../../components/sidebar/sidebar"; 
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import styles from './homescreen.styles';
import LocationHeader from "../../components/locationHeader/locationHeader";
import SearchBar from '../../components/searchBar/searchBar'; // Import the search bar
import CategorySelector from '../../components/categorySelector/categorySelector';
import NearFromYou from '../../components/nearFromYou/nearFromYou';
import BestPropertyList from '../../components/bestPropertyList/bestPropertyList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Homescreen = () => {  
    console.log("HomeScreen rendered");  

    const [isOpen, setIsOpen] = useState(false);
    const translateX = useState(new Animated.Value(-250))[0]; 
    const sidebarWidth = 250;


    const mainContentTranslateX = translateX.interpolate({
      inputRange: [-sidebarWidth, 0],
      outputRange: [0, sidebarWidth * 0.8], 
  });
  const mainContentScale = translateX.interpolate({
    inputRange: [-sidebarWidth, 0],
    outputRange: [1, 0.9],  
  });
  const backgroundColor = translateX.interpolate({
    inputRange: [-sidebarWidth, 0],
    outputRange: ['white', '#0A8ED9'], 
  });

    const menuItems = [
        { name: 'Home', icon: <MaterialIcons name="home" size={20} color="white" /> },
        { name: 'Profile', icon: <MaterialIcons name="person" size={20} color="white" /> },
        { name: 'Nearby', icon: <MaterialIcons name="place" size={20} color="white" /> },
        { name: 'Bookmark', icon: <MaterialIcons name="bookmark" size={20} color="white" /> },
        { name: 'Notification', icon: <MaterialIcons name="notifications" size={20} color="white" /> },
        { name: 'Message', icon: <MaterialIcons name="mail" size={20} color="white" /> },
        { name: 'Settings', icon: <MaterialIcons name="settings" size={20} color="white" /> },
        { name: 'Help', icon: <MaterialIcons name="help" size={20} color="white" /> },
        { name: 'Logout', icon: <MaterialIcons name="exit-to-app" size={20} color="white" /> },
    ];
    


    
    const handleGesture = (event) => {
        console.log('Gesture Event', event.nativeEvent.translationX);
        translateX.setValue(event.nativeEvent.translationX); 
      };

    const handleGestureEnd = (event) => {
        console.log("Gesture Ended", event.nativeEvent.translationX);

        if (event.nativeEvent.translationX > 100) {
            setIsOpen(true);
            Animated.timing(translateX, {
                toValue: 0, 
                duration: 300,
                useNativeDriver: false,
            }).start(); console.log("Sidebar Opened");
        } else if (event.nativeEvent.translationX < -100) {
            setIsOpen(false);
            Animated.timing(translateX, {
                toValue: -250, 
                duration: 300,
                useNativeDriver: false,
            }).start();console.log("Sidebar Closed");
        }
    };

    return (
        console.log("HomeScreen rendered"),
        <Animated.View style={[styles.container, { backgroundColor }]}>
              <PanGestureHandler
          onGestureEvent={handleGesture}
          onHandlerStateChange={(event) => {
            if (event.nativeEvent.state === State.END) {
              handleGestureEnd(event);
            }
          }}
        >
          <View style={styles.container}>
            <Animated.View style={[styles.sidebar, { left:  translateX }] }>
                <Sidebar menuItems={menuItems} onItemPress={console.log('pressed')}  />
                </Animated.View>
                <Animated.View 
                        style={[
                          styles.mainContent, 
                          { 
                            transform: [
                              { translateX: mainContentTranslateX },
                              { scale: mainContentScale }
                            ],
                            paddingVertical: translateX.interpolate({
                              inputRange: [-sidebarWidth, 0],
                              outputRange: [0, 30], // Adds space above and below
                            }),
                          }
                        ]}
                    >                
                <LocationHeader/>
                <SearchBar />
                <CategorySelector />
                <NearFromYou />
                <BestPropertyList />   
                </Animated.View>
          </View>
        </PanGestureHandler>
        </Animated.View>
      );
      
};

export default Homescreen;
