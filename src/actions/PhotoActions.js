export const FETCH_DATA = 'FETCH_DATA';
const API =
  'https://api.unsplash.com/search/photos?query=cars&client_id=j3aQzbaBUPHwpfBvvEUkO5ar2AVkHWZIX-_Mr-tJJck';

export const fetchData = () => (dispatch) => {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      return dispatch({
        type: FETCH_DATA,
        payload: data.results,
      });
    });
};
