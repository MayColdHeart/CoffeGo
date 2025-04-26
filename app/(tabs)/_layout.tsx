import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';
import Index from '.';
import { Header } from 'react-native/Libraries/NewAppScreen';


export default function layoutTabs() {
    return (
    <Tabs screenOptions = {{ tabBarActiveTintColor: 'black' }} initialRouteName='index' >
         
        <Tabs.Screen name = 'menu' options = {{ 
            
            title: 'Sabores de Cafe', 
            tabBarIcon: () => <Image style={styles.icon} source = {require('@/assets/images/icons/coffeCup.png')}/>
            }}/>
                    
        <Tabs.Screen name = 'index' options = {{
            title: 'CoffeGo',
            headerTitleStyle: styles.headersty,
            headerTitleAlign: 'center',
            headerBackground: () => <Image style = {styles.theme} 
            source = {require('@/assets/images/themes/coffeMain.jpg')}/>,
            tabBarIcon: () => <Image style={styles.icon} source={require('@/assets/images/icons/home.png')}/>
            }}/>


        <Tabs.Screen name = 'profile' options = {{ 
            title: 'Perfil', 
            tabBarIcon: () => <Image style={styles.icon} source = {require('@/assets/images/icons/profileIcon.png')}/> 
            }}/>        
    </Tabs>
    )
}




const styles = StyleSheet.create({

    headersty:{
        color: 'white',
        fontSize: 40,    
    },
    container: {
        flex: 1,
        display: 'flex',
    },

    icon: {
        width: 30,
        height: 30,
    },
    theme: {
        width: 670,
        height: 90,
        right: 125,

    },

})