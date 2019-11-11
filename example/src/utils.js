import axios from 'axios'

const RequestConfig = {
  headers: {
      'Content-Type': 'multipart/form-data'
  }
}

const Config = {
  BASE_URL: 'http://localhost:9000'
}

class Request {

  setAuthrization(token) {
      axios.interceptors.request.use(config => {
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = token;
        }
          return config
    })
  }

  async $get(url, options) {
      const Access = await  Session.getToken()
      const token = Access.access_token
      const AllParams = {...options.params}
      let requestUrl = Config.BASE_URL + url
      this.setAuthrization(token)
      return await axios.get(requestUrl, { ...options, params: AllParams})
  }

  async $post(url, options) {
      const Access = await Session.getToken()
      const token = Access.access_token
      this.setAuthrization(token)
      let requestUrl = Config.BASE_URL + url
      return await axios.post(requestUrl, options, RequestConfig)
  }
}

export default new Request()
