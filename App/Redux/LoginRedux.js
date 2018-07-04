import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['profile'],
  loginFailure: ['error'],  
  logout: null,
})

export const LoginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  profile: null,
  fetching: null,
  error: null,
  username: null
})

/* ------------- Selectors ------------- */

export const LoginSelectors = {
  selectAvatar: state => state.user.profile /* never used AFAICT */
}

/* ------------- Reducers ------------- */

// request to log in a user
export const loginRequest = (state, action) => {
  return state.merge({ fetching: true, username: action.username, profile: null })
}

// successful user login returns profile
export const loginSuccess = (state, action) => {
  window.alert(`Action: ${JSON.stringify(action, null, 2)}`);
  return state.merge({ fetching: false, error: null, profile: action.data })
}

// failed to login user
export const loginFailure = (state, action) => {
  window.alert(`Action: ${JSON.stringify(action, null, 2)}`);
  return state.merge({ fetching: false, error: true, profile: null })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure
})
