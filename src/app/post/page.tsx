import { getPosts } from '@/common/api/post'

getPosts()

export default async function Posts() {
  const posts = await getPosts()

  return (
    <>
      {posts.map((post) => (
        <div key={`post-item-${post.title}`}>{post.title}</div>
      ))}
    </>
  )
}
