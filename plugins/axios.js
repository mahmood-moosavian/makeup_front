import qs from 'qs'
import { handleErrors, handleResponse } from '@/helpers/responseHelper'
import { CLIENT_ID, CLIENT_SECRET } from '@/constants/auth'

const createInstance = ({ $axios, ...context }) => {
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'application/json',
      },
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'brackets' })
    },
  })

  // Set baseURL to something different
  api.setBaseURL(process.env.baseUrl)

  api._post = function (url, body, config = {}) {
    const { cc, ...requestConfig } = config
    return api
      .post(url, body, requestConfig)
      .then((response) => {
        return handleResponse(response, cc)
      })
      .catch((e) => {
        handleErrors(e, cc, context)
      })
  }
  api._get = function (url, config = {}) {
    const { cc, ...requestConfig } = config
    return api
      .get(url, requestConfig)
      .then((response) => {
        return handleResponse(response, cc)
      })
      .catch((e) => {
        handleErrors(e, cc, context)
      })
  }
  return api
}


export default function (context, inject) {
  const { store } = context
  // Create a custom axios instance
  const api = createInstance(context)
  const auth = createInstance(context)
  auth.onRequest((config) => {
    config.headers.Authorization = 'Bearer ' + store.getters['auth/getToken']
  })

  //* ****handle error *********
  let isRefreshing = false
  let failedQueue = []

  const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
      if (error) {
        prom.reject(error)
      } else {
        prom.resolve(token)
      }
    })

    failedQueue = []
  }
  auth.onResponseError((error) => {
    // console.log('onResponseError called***********')
    const originalRequest = error.config
    if (error.response?.status === 401 && !originalRequest._retry) {
      // console.log('isRefreshing', isRefreshing)
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = 'Bearer ' + token
            return auth(originalRequest)
          })
          .catch((err) => {
            return Promise.reject(err)
          })
      }

      originalRequest._retry = true
      isRefreshing = true
      const refreshToken = store.getters['auth/getRefreshToken']
      return new Promise(function (resolve, reject) {
        const body = {
          grant_type: 'refresh_token',
          refresh_token: refreshToken,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }
        const authUrl = '/oauth2/rest/token'
        const requestConfig = {
          method: 'post',
          url: process.env.baseUrl + authUrl,
          data: body,
          headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${store.getters['auth/getToken']}`,
          },
        }
        context
          .$axios(requestConfig)
          // .post(authUrl, body, { baseURL: myBaseUrl, headers })
          .then(async (response) => {
            // console.log('reset response data', response.data)
            if (response?.status === 200 && response.data) {
              const {
                // eslint-disable-next-line camelcase
                access_token,
                // eslint-disable-next-line camelcase
                refresh_token,
                // eslint-disable-next-line camelcase
                expires_in,
              } = response.data
              await store.dispatch('auth/saveToken', {
                access_token,
                refresh_token,
                expires_in,
              })
              // eslint-disable-next-line camelcase
              auth.setToken('Bearer ' + access_token)

              // eslint-disable-next-line camelcase
              originalRequest.headers.Authorization = 'Bearer ' + access_token
              processQueue(null, access_token)
              resolve(auth(originalRequest))
            }
          })
          .catch((err) => {
            console.log('response error change manual to 401 when reset failed')
            err.response.status = 401
            processQueue(err, null)
            reject(err)
          })
          .then(() => {
            isRefreshing = false
          })
      })
    }
    return Promise.reject(error)
  })

  // Inject to context as $api
  inject('api', api)
  inject('auth', auth)
}


// export default function({$axios , store}){
//   $axios.onError(error =>{
//     if(error.response.status === 422){
//       store.dispatch('validation/setErrors', error.response.data.errors)
//     }
//     // AuthServer response
//     if(error.response.status === 400){
//       const errors = {'active_code':[error.response.data.message]}
//       store.dispatch('validation/setErrors', errors)
//     }

//     return Promise.reject(error);
//   })

//   $axios.onRequest(()=>{
//     store.dispatch('validation/clearErrors')
//   })
// }
