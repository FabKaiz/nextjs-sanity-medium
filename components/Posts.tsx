import { Post } from '../typings'
import PostCard from './PostCard'

interface Posts {
  posts: [Post]
}

const Posts = ({ posts }: Posts) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
        {posts && posts.map((post) => <PostCard key={post._id} post={post} />)}
      </div>
      {!posts && (
        <h2 className="flex text-center justify-center text-lg mt-6">
          No post yet
        </h2>
      )}
    </>
  )
}

export default Posts
