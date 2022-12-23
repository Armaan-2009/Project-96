import React from 'react';
import {createDrawerNavigation} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigation();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={TabNavigator}/>
            <Drawer.Screen name='Profile' componet={Profile}/>
        </Drawer.Navigator>
    )
};