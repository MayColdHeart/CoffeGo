import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function layoutTabs(){
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'black'}}>

            <Tabs.Screen name='menu' options={{title: 'Cardápio', tabBarIcon: ()=> <Image style={styles.icon} source={require('@/assets/images/icons/foodTruck.png')} />}}/>

            <Tabs.Screen name='index' options={{title: 'Início', tabBarIcon: ()=> <Image style={styles.icon} source={require('@/assets/images/icons/home.png')}/>}}  />

            <Tabs.Screen name='profile' options={{title: 'Perfil', tabBarIcon: ()=> <Image style={styles.icon} source={require('@/assets/images/icons/profileIcon.png')} />}}/>
                    
        </Tabs>
    )
}




const styles = StyleSheet.create({
    container:  {
        flex: 1,
    },
    icon:{
        width: 30,
        height: 30,
    }
})