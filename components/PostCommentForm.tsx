import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Post } from '../typings'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

const PostCommentForm = ({ post }: Props) => {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => setSubmitted(true))
      .catch((err) => {
        console.log(err)
        setSubmitted(false)
      })
  }

  return (
    <div>
      <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
      {submitted ? (
        <div className="flex flex-col p-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold">
            Thank you for submitting your comment!
          </h3>
          <p className="text-center pt-2">
            Once it has been approved, it will appear below!
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
        >
          <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below!</h4>
          <hr className="py-3 mt-2" />
          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />
          <label className=" block mb-5">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="shadow border-2 rounded py-2 px-3 form-input mt-1 block w-full focus:outline-none focus:border-yellow-500"
              placeholder="John Doe"
              type="text"
            />
          </label>
          <label className=" block mb-5">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="shadow border-2 rounded py-2 px-3 form-input mt-1 block w-full focus:outline-none focus:border-yellow-500"
              placeholder="email@email.com"
              type="text"
            />
          </label>
          <label className=" block mb-5">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="shadow border-2 rounded py-2 px-3 form-textarea mt-1 block w-full focus:outline-none focus:border-yellow-500"
              rows={8}
              placeholder="Type your comment here"
            />
          </label>
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-600">- The Name field is required</span>
            )}
            {errors.email && (
              <span className="text-red-600">
                - The Email field is required
              </span>
            )}
            {errors.comment && (
              <span className="text-red-600">
                - The Comment field is required
              </span>
            )}
          </div>
          <input
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      )}
    </div>
  )
}

export default PostCommentForm
