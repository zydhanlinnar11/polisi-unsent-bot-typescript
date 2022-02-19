// https://github.com/omniti-labs/jsend

export default interface APIResponse<Type> {
  status: 'success' | 'fail' | 'error'
  data?: Type
  message?: string
}
