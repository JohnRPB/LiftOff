import { takeLatest, all } from 'redux-saga/effects'
import githubAPI from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import FixtureLoginAPI from '../Services/FixtureLoginApi'
import DebugConfig from '../Config/DebugConfig'
import FixtureLoginApi from '../Services/FixtureLoginApi';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { LoginTypes } from '../Redux/LoginRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { loginUser } from './LoginSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const githubApi = DebugConfig.useFixtures ? FixtureAPI : githubAPI.create()
const loginApi = FixtureLoginAPI

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, githubApi),
    takeLatest(LoginTypes.LOGIN_REQUEST, loginUser, loginApi)
  ])
}
