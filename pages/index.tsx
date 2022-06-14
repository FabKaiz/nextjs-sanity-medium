import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Posts from '../components/Posts'
import { sanityClient } from '../sanity.js'
import { Post } from '../typings'
import Footer from '../components/Footer'

interface Props {
  posts: [Post]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div className="relative pt-11">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Header />
      <div className="max-w-7xl mx-auto">
        <Posts posts={posts} />
      </div>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: {
      posts,
    },
  }
}

export default Home
