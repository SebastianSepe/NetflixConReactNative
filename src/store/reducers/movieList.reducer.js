import { SET_MOVIES } from '../actions/movieList.action';


const initialState = {
  movies: [],
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default movieListReducer;
