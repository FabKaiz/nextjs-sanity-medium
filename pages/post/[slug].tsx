import { GetStaticProps } from 'next'
import Navbar from '../../components/Navbar'
import { sanityClient, urlFor } from '../../sanity'
import { Post } from '../../typings'
import PostContent from '../../components/PostContent'
import PostCommentForm from '../../components/PostCommentForm'
import PostComment from '../../components/PostComment'

interface Props {
  post: Post
}

const PostPage = ({ post }: Props) => {
  return (
    <>
      <Navbar />
      <main>
        {/* Header img */}
        <img
          className="w-full h-60 object-cover"
          src={urlFor(post.mainImage).url()!}
          alt="post image"
        />

        <PostContent post={post} />
        <PostCommentForm post={post} />
        <PostComment post={post} />
      </main>
    </>
  )
}

export default PostPage

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
    current
    }
  }`
  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    createdAt,
    title,
    author-> {
      name,
      image
    },
    'comments': *[
    _type == "comment" &&
    psot.ref == ^.id &&
    approved == true],
    description,
    mainImage,
    slug,
    body
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // update the old cached version after 60 seconds
  }
}
