import { Post } from '../typings'

interface Props {
  post: Post
}

const PostComment = ({ post }: Props) => {
  return (
    <div className="flex flex-col mb-10 p-10 max-w-2xl mx-auto shadow-yellow-500 shadow">
      <h3 className="text-4xl">Comments</h3>
      <hr className="pb-2" />

      {post.comments.map((comment) => (
        <div key={comment._id}>
          <p className="pb-2">
            <span className="text-yellow-500">{comment.name}: </span>
            {comment.comment}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PostComment
