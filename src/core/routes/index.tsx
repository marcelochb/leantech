import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../modules/posts/presenter/screens/login/view';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
        />
    </Stack.Navigator>
)
