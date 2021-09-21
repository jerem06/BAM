import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../Pages/List.js';
import Featured from '../Pages/Featured.js';
import Icon from 'react-native-vector-icons/Ionicons';  

const Tab = createBottomTabNavigator();

function BottomTab(){
  return (
    <Tab.Navigator
     screenOptions={{
        tabBarActiveTintColor: '#ff2b2a',
      }}>
      <Tab.Screen 
      name="List" 
      component={List} 
      options={{
        tabBarLabel: 'Liste',
        tabBarIcon: () => (
          <Icon name="ios-home" color={'black'} size={25}/> )
      }}
      
      />
      <Tab.Screen 
      name="Featured" 
      component={Featured} 
      options={{
        tabBarLabel: 'Favoris',
        tabBarIcon: () => (
          <Icon name="star-outline" color={'black'} size={25}/> )
      }}/>
    </Tab.Navigator>
  );
}

export default BottomTab; 