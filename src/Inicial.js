import React from 'react';
import { View, Text } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const Inicial = ({ navigation }) => {
    console.log('fuiiiiii');
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    navigation.dispatch(resetAction);
    return (
        <></>
    )
};

Inicial.navigationOptions = {
    title: 'About',
}

export default Inicial;