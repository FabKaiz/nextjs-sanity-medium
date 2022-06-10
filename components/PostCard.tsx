import Link from 'next/link'
import { urlFor } from '../sanity'
import { Post } from '../typings'

interface post {
  post: Post
}

const PostCard = ({ post }: post) => {
  return (
    <Link key={post._id} href={`/post/${post.slug.current}`}>
      <div className="border rounded-lg group cursor-pointer overflow-hidden">
        <img
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
          src={urlFor(post?.mainImage).url()!}
          alt="post image"
        />
        <div className="flex justify-between items-center p-5 bg-white">
          <div>
            <p className="text-lg font-bold">{post.title}</p>
            <p className="text-sm">
              {post.description} by {post.author.name}
            </p>
          </div>
          <img
            className="h-14 w-14 rounded-full ml-4"
            src={urlFor(post.author.image).url()}
            alt="author avatar"
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
