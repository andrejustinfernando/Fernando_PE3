import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
    <View>
        <Button title="Inspire Me!" onPress={() => {
          navigation.navigate('QOTD');
          }}
          />
        <Button title="Favorite Quotes"onPress={() => {
          navigation.navigate('Fave');
          }}/>
    </View>);
};

const styles = StyleSheet.create({
    button:{
        flex: 1
    }


});

export default HomeScreen;