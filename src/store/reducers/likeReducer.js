import {TOGGLE_LIKE} from "../actions/toggleAction";
export const initialState = { likedMovies: [] }

function toggleLike(state = initialState, action) {
  let nextState
  switch (action.type) {
    case TOGGLE_LIKE:
      const likedMovieIndex = state.likedMovies.findIndex(item => item.id === action.value.id)
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