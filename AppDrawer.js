import * as React from 'react';
import { Button, View } from 'react-native';
import { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppScreen from './components/Screens/AppScreen';
import { AuthContext } from './components/context/AuthContext';
import CreatePostScreen from './components/Screens/createpost';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

    const LogoutButton =()=>{  
         const { logout } = useContext(AuthContext);
         return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <button style={{height:50, width: 100,borderRadius: 10,backgroundColor: 'skyblue',}} onClick={() => {logout()}}>logout</button>
            </View> )
    }

export default function AppDrawer() {
    
  return (

      <Stack.Navigator initialRouteName="createpost">
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="createpost" component={CreatePostScreen} options={{headerShown:false}}/>
      </Stack.Navigator>

  );
}
