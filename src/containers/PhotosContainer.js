import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { PhotoItem } from '../components/PhotoItem';
import { fetchData } from '../actions/PhotoActions';
import { connect } from 'react-redux';

const PhotosContainer = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <View style={styles.photosHolder}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <PhotoItem data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photosHolder: {
    backgroundColor: '#6a7091',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { fetchData })(PhotosContainer);
