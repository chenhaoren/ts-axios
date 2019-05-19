import { AxiosRequestConfig } from './types/index'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

const MethodsNoData = ['get', 'delete', 'options', 'head']

MethodsNoData.forEach(method => {
  defaults.headers[method] = {}
})

const MethodsWithData = ['put', 'post', 'patch']

MethodsWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
