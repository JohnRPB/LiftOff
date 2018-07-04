export default {
  // Functions return fixtures
  loginUser: (username, password) => {
    return {
      ok: true,
      data: require('../Fixtures/LoginSuccessful.json')
    }
  }
}
