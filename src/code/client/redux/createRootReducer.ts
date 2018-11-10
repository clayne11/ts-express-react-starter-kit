import {connectRouter} from 'connected-react-router'
import {History} from 'history'
import {reducer as formReducer} from 'redux-form'

export default ({history}: {history: History}) => ({
  form: formReducer,
  router: connectRouter(history),
})
