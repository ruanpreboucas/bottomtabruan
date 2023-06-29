import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens

import AgendaScreen from './screens/AgendaScreen'
import DetailsScreen from './screens/DetailsScreen'
import SettingsScreen from './screens/SettingsScreen'

//Screen names

const agenda= "agenda";
const detailsName= "Details";
const settingsName= "Settings";

const Tab = createBottomTabNavigator();

const Tabs =() =>{
    return(
        <Tab.Navigator>

        </Tab.Navigator>
    )
}
        
export default Tabs;
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
                        ...styles.shadow

                    }
                }}
            >
                <Tab.Screen name={agenda} component={AgendaScreen} options={{
                    tabBarIcon:({focused}) =>(
                       <View>

                       </View> 
                    ),
                }} />
                <Tab.Screen name={detailsName} component={DetailsScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>
                
            </Tab.Navigator>
      </NavigationContainer>
    );
}