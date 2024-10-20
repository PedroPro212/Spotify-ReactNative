import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./modules/home";
import Search from "./modules/pesquisa";
import Biblioteca from "./modules/biblioteca";

type RootStackParamList = {
    Home: undefined,
}

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName: string = '';

                            if (route.name === 'Home') {
                                iconName = focused ? 'home' : 'home-outline'; 
                            } else if (route.name === 'Search') {
                                iconName = focused ? 'search' : 'search-outline'; 
                            } else if (route.name === 'Biblioteca') {
                                iconName = focused ? 'library' : 'library-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarStyle: {
                            backgroundColor: 'rgba(18, 18, 18, 0.93)',
                            position: 'absolute', 
                            borderTopWidth: 0,
                            height: 60,
                        },
                        tabBarLabel: ({ focused, color }) => (
                            <Text style={{ color, fontSize: focused ? 15 : 14 }}>
                                {route.name}
                            </Text>
                        ),
                        tabBarActiveTintColor: 'white',   
                        tabBarInactiveTintColor: 'gray', 
                    })}
                >
                    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
                    <Tab.Screen name="Biblioteca" component={Biblioteca} options={{ headerShown: false }} />
                    
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default App;