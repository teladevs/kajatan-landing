import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useCustomFetch<T> (url: string, getMethod: string = '', payload: any, withToast: boolean = false) {
  const getToken = useCookie('token')
  const router = useRouter()
  const config = useRuntimeConfig()

  var options = {}

  if (getMethod == 'get'){
    options = {
      method: `${getMethod}`,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'Same-Origin',
      },
    }
  } else {
    options = {
      method: `${getMethod}`,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' },
      body: payload,
    }
  }

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,

    headers: getToken.value
      ? { Authorization: `Bearer ${getToken.value}` }
      : {},

    onResponse (_ctx) {
      let responseStatus = _ctx.response.status;
      let message = _ctx.response._data.message;

      if (responseStatus == 200 && withToast){
      }
    },

    onResponseError (_ctx) {
      if (_ctx.response.status == 401){
        router.push('/auth/signin');
      }
    }
  }

  const params = defu(options, defaults)

  return useFetch(url, params)
}