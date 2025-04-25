import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function layoutTabs() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }}>

            <Tabs.Screen name='menu' options={{ title: 'Sabores de Cafe', tabBarIcon: () => <Image style={styles.icon} source={require('@/assets/images/icons/coffeCup.png')} /> }} />

            <Tabs.Screen name='index' options={{ headerBackground: () => <Image style={styles.theme} source={require('@/assets/images/themes/coffeMain.jpg')} />, title: 'Coffe Go', tabBarIcon: () => <Image style={styles.icon} source={require('@/assets/images/icons/home.png')} /> }} />

            <Tabs.Screen name='profile' options={{ title: 'Perfil', tabBarIcon: () => <Image style={styles.icon} source={require('@/assets/images/icons/profileIcon.png')} /> }} />

        </Tabs>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
    },
    theme: {
        width: 400,
        height: 60,

    },



})