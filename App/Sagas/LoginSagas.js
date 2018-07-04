import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import LoginActions from '../Redux/LoginRedux'

export function * loginUser (api, action) {
  const { username, password } = action 
  // make the call to the api
  const response = yield call(api.loginUser, username, password)
  //window.alert(`Here is the action: ${JSON.stringify(action, null, 2)}`);

  if (response.ok) {
    const profile = path(['data', 'profile'], response);
  //window.alert(`Profile: ${JSON.stringify(profile, null, 2)}`);

    // do data conversion here if needed
    yield put(LoginActions.loginSuccess(profile))
  } else {
    yield put(LoginActions.loginFailure())
    // window.alert(`Login unsuccessful`);
  }
}
