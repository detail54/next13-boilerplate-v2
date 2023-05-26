interface IApi {
  method: HTTP_METHOD
  url: string
  option?: Omit<RequestInit, 'method'>
}

interface IReValidApi {
  method: HTTP_METHOD
  url: string
  revalidTime: number
  option?: Omit<RequestInit, 'method' | 'next'>
}
