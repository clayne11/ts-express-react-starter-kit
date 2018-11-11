import {WebAuth} from 'auth0-js'

const auth0 = new WebAuth({
  domain: 'clayne.auth0.com',
  clientID: 'TieIA6GBVx9J2994YKe2EFAmfytXrsb8',
  redirectUri: 'http://localhost:3000/callback',
  responseType: 'token id_token',
  scope: 'openid',
})

const login = () => {
  auth0.authorize()
}

export {login}
