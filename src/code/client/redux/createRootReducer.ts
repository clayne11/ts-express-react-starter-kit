import {routerReducer} from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

export default () => ({
  form: formReducer,
  router: routerReducer,
})
