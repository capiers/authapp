import React from 'react';
import { TextInput, View, Text } from 'react-native';

const FieldInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { viewStyle, textLabelStyle, textInputStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textLabelStyle}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                underlineColorAndroid='transparent'
                style={textInputStyle} 
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        flex: 1, 
        height: 40,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    textLabelStyle: {
        flex: 1,
        color: '#000',
        fontSize: 18,
        paddingLeft: 5
    },
    textInputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 10,
        paddingTop: 0, 
        paddingBottom: 0,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 20, 
        width: null
    },
};

export { FieldInput };