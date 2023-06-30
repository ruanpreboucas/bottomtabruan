import * as React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens

import AgendaScreen from './screens/AgendaScreen'
import DetailsScreen from './screens/DetailsScreen'
import PostScreen from './screens/PostScreen'
import SettingsScreen from './screens/SettingsScreen'

//Screen names

const agenda= "Agenda";
const detailsName= "Details";
const postName= "Post";
const settingsName= "Settings";

const Tab = createBottomTabNavigator();

const CustomTabBarButton =({childrean, onPress}) =>{
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent:'center',
        alignItems:'center',
        ...styles.shadow
    }}
    onPress= {onPress}   
    >
        <View style={{
            width:70,
            height:70,
            borderRadius:35,
            backgroundColor:'red',
        }} >
            {childrean}
        </View>
    </TouchableOpacity>
};


const Tabs =() =>{
    return(
       <NavigationContainer>
       <Tab.Navigator
       tabBarOptions={{
        showLabel:false,
        style:{
            positions:'absolute',
            bottom:25,
            left:20,
            right:20,
            elevation:0,
            backgroundColor:'white',
            borderRadius:15,
            height:90,
            ...style.shadow
            
        }
    }}
       >
            <Tab.Screen name={agenda} component={AgendaScreen} options={{
                tabBarIcon:({focused}) =>(
                   <View style={{alignItems:'center', justifyContent:'center'}}>
                    <Image source={require('../../assets/img/IconAgenda.png')}
                    resizeMode='contain'
                    style={{
                        width:50,
                        height:25,
                        tintColor: focused ? '#e32f45':'#748c94'
                    }} />
                    <Text> </Text>
                   </View> 
                )
            }} />
            <Tab.Screen name={postName} component={PostScreen}
            options={{
                tabBarIcon:({focused}) =>(
                  <Image
                  source={require('../../assets/img/IconP.png')}
                  />  
                ),
            }}
            >

            </Tab.Screen>
            <Tab.Screen name={detailsName} component={DetailsScreen}
                options={{
                    tabBarIcon:({focused}) =>(
                       <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image source={require('../../assets/img/IconP.png')}
                        resizeMode='contain'
                        style={{
                            width:50,
                            height:25,
                            tintColor: focused ? '#e32f45':'#748c94'
                        }}
                         />
                        <Text> </Text>
                       </View> 
                    )
                }}
            />
          

       </Tab.Navigator>
       </NavigationContainer>
    );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:'red',
        shadowOffset:{
            width:0,
            height:10,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5,
    }
})


export default Tabs;

