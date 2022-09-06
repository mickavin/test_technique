import {TOGGLE_LIKE} from "../actions/toggleAction";
const initialState = { likedMovies: [] }

function toggleLike(state = initialState, action) {
  let nextState
  switch (action.type) {
    case TOGGLE_LIKE:
      const likedMovieIndex = state.likedMovies.findIndex(item => item === action.value)
      if (likedMovieIndex !== -1) {
        nextState = {
          ...state,
          likedMovies: state.likedMovies.filter( (item, index) => index !== likedMovieIndex)
        }
      }
      else {
        nextState = {
          ...state,
          likedMovies: [...state.likedMovies, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleLike