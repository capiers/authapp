// Import libraries for components
import React from 'react';
import { 
    Text, 
    View, 
    StyleSheet } 
    from 'react-native';

// Create component
const Header = (props) => {
    const { 
        HeaderViewStyle,
        HeaderTextStyle 
    } = styles;
    
    return (
        <View style={HeaderViewStyle}>
            <Text style={HeaderTextStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    HeaderViewStyle: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8F8',
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        // Android shadow
        elevation: 6,
        position: 'relative',
    },
    HeaderTextStyle: {
        
        fontSize: 20,
    }
};

// Make the component available to the app
export {Header};
