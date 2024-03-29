import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/User'

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })
    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      console.log(r)
      if (r.session) {
        let username = r.session.user.first_name
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username,
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4)
  }
}
