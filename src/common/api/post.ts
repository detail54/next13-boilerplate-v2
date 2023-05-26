import { api } from '.'
import API_URL from '../constant/apiUrl'

export const getPosts = async () => {
  const posts = await api<IPost[]>({
    method: 'GET',
    url: API_URL.POSTS,
  })

  console.log('posts:::', posts)

  return posts
}
