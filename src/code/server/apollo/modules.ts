import {fooModule} from './foo/fooModule'
import {mergeModules} from './utils/mergeModules'

export const modules = mergeModules([fooModule])
