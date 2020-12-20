import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export const BigPhoto = ({ route }) => {
  const { photo } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(0, 0%, 0%, 0.9)',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
});
