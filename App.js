import React from 'react';
import { StyleSheet } from 'react-native';
import PhotosContainer from './src/containers/PhotosContainer';
import { BigPhoto } from './src/components/BigPhoto';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Photo Gallery" component={PhotosContainer} />
          <Stack.Screen name="Photo" component={BigPhoto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
});
