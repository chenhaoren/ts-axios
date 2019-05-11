import { AxionsInstance } from './types/index'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function createInstance(): AxionsInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxionsInstance
}

const axios = createInstance()

export default axios
