import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const PhotoItem = (props) => {
  const { alt_description, urls, user } = props.data;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Photo', { photo: urls.regular })}
      style={styles.photo}
    >
      <ImageBackground source={{ uri: urls.regular }} style={styles.image}>
        <View style={styles.text_block}>
          <Text style={styles.text}>
            {alt_description.charAt(0).toUpperCase() + alt_description.slice(1)}
          </Text>
          <Text style={styles.text}>{user.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  photo: {
    height: 250,
    backgroundColor: 'white',
    marginBottom: 5,
  },
  text_block: {
    padding: 5,
    backgroundColor: 'hsla(0, 0%, 0%, 0.46)',
  },
  text: {
    color: 'white',
    fontSize: 22,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
});
