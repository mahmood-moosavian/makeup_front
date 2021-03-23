export default function({$axios , store}){
  $axios.onError(error =>{
    if(error.response.status === 422){
      store.dispatch('validation/setErrors', error.response.data.errors)
    }
    // AuthServer response
    if(error.response.status === 400){
      const errors = {'active_code':[error.response.data.message]}
      store.dispatch('validation/setErrors', errors)
    }

    return Promise.reject(error);
  })

  $axios.onRequest(()=>{
    store.dispatch('validation/clearErrors')
  })
}
