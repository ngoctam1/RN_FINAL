import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'; // đường dẫn đến file HomeScreen của bạn
import AddTaskScreen from './AddTaskScreen'; // tạo màn hình này nếu chưa có

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home"
            component={HomeScreen}
            options={{ headerShown: false }} />
          <Stack.Screen name="AddTask" 
          component={AddTaskScreen}
          options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
