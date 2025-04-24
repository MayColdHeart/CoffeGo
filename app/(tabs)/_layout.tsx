import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function layoutTabs(){
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'black'}}>

            <Tabs.Screen name='index' options={{title: 'Home', tabBarIcon: ()=> <Image source={require('@/assets/images/icons/home.png')}/>}}  />

            <Tabs.Screen name='profile' options={{title: 'Profile'}}/>

            <Tabs.Screen name='menu' options={{title: 'Cardápio'}}/>
        
        </Tabs>
    )
}