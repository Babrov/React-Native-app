import { FETCH_DATA } from '../actions/PhotoActions';

const initialState = {
  data: [],
};

const PhotosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: [...action.payload],
      };
    default:
      return state;
  }
};

export default PhotosReducer;
