import ReactLoadable from 'react-loadable'
import {LoadableLoading} from './LoadableLoading'

export default options => {
  return ReactLoadable({
    loading: LoadableLoading,
    delay: 500,
    timeout: 10000,
    ...options,
  })
}
