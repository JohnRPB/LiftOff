/ * mocked verification system */
export default {
  // Functions return fixtures
  loginUser: (username, password) => {
    if (username == "John" && password == "password") {
      return {
        ok: true,
        data: require('../Fixtures/LoginSuccessful.json')
      }
    } else {
      return {
        ok: false,
        data: "login fail"
      }
    }
  }
}
