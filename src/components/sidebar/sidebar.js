import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './sidebar.styles';

const Sidebar = ({ menuItems,  onItemPress }) => {
    return  (
        <View style={styles.container}>
            {menuItems.map((item, index) => (  
                
                <React.Fragment key={index}>

                <TouchableOpacity
                    key={index}
                    style={styles.menuItem}
                    onPress={() => onItemPress(item)}>

<View style={styles.iconContainer}>
            {item.icon}
          </View>
          <Text style={styles.menuText}>{item.name}</Text>

                    </TouchableOpacity>
                                        {/* Render a separator after every 3 items */}
                                        {(index + 1) % 3 === 0 && (
                        <View style={styles.separator} />
                    )}
                </React.Fragment>

            ))}
        </View>
    );
}


export default Sidebar;
            

