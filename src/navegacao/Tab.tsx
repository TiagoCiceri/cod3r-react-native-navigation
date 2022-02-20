import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                            ? 'ios-home'
                            : 'ios-home-sharp'
                        break;
                    case 'TelaB':
                        iconName = focused
                            ? 'ios-bar-chart'
                            : 'ios-bar-chart-sharp'
                        break;
                    case 'TelaC':
                        iconName = focused ? 'ios-person' : 'ios-person-sharp'
                        break;
                }                        
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })}

        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel : true,
            //labelStyle: { fontSize: 30 }
        }}
    >
        <Tab.Screen name="TelaA" component={TelaA} options={{ title: 'Home'}} />
        <Tab.Screen name="TelaB" component={TelaB} options={{ title: 'Gráfico'}}/>
        <Tab.Screen name="TelaC" component={TelaC} options={{ title: 'Perfil'}}/>
    </Tab.Navigator>
)