import {hello, data as d} from './58-export.js'
// import all
import * as bundle from './58-export.js'

bundle.hello();
console.log(bundle.data)