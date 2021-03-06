import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from "./routes/Game";
import ListScreen from "./routes/List";
import TextScreen from "./routes/Text";
import VideoScreen from "./routes/Video";
import SplashScreen from "./routes/Splash";
import SignInScreen from "./routes/SignIn";
import SignUpScreen from "./routes/SignUp";
import AccountScreen from "./routes/Account";
import FirstSuccess from "./user-data/success/FirstSuccess";
import SecondSuccess from "./user-data/success/SecondSuccess";
import ThirdSuccess from "./user-data/success/ThirdSuccess";
import FirstReward from "./user-data/reward/FirstReward";
import SecondReward from "./user-data/reward/SecondReward";
import Maps from "./routes/Maps";
import FirstEvent from "./user-data/events/FirstEvent";
import SecondEvent from "./user-data/events/SecondEvent";
import ThirdEvent from "./user-data/events/ThirdEvent";

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
          />
          
          <Stack.Screen
            name='Account'
            component={AccountScreen}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            name="List"
            component={ListScreen}
          />
          <Stack.Screen
            name="Text"
            component={TextScreen}
          />
          <Stack.Screen
            name="Video"
            component={VideoScreen}
          />
          <Stack.Screen
            name="Maps"
            component={Maps}
          />
          <Stack.Screen
            name="FirstSuccess"
            component={FirstSuccess}
          />
          <Stack.Screen
            name="SecondSuccess"
            component={SecondSuccess}
          />
          <Stack.Screen
            name="ThirdSuccess"
            component={ThirdSuccess}
          />
          <Stack.Screen
            name="FirstReward"
            component={FirstReward}
          />
          <Stack.Screen
            name="SecondReward"
            component={SecondReward}
          />
          <Stack.Screen
            name="FirstEvent"
            component={FirstEvent}
          />
          <Stack.Screen
            name="SecondEvent"
            component={SecondEvent}
          />
          <Stack.Screen
            name="ThirdEvent"
            component={ThirdEvent}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;