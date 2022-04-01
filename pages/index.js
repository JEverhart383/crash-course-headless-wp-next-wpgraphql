import Head from 'next/head';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { useQuery } from '@apollo/client';
import { client } from '../lib/apollo';
import { gql } from "@apollo/client";

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">
          Headless WordPress Next.js Starter
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          {
            posts.map((post) => {
              return (
                <PostCard key={post.id} post={post}></PostCard>
              )
            })
          }
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

const GET_POSTS = gql`
  query GET_POSTS {
    posts {
      nodes {
        id
        content
        author {
          node {
            id
          }
        }
        title
        uri
      }
    }
  }
`;

export async function getStaticProps(){

  const response = await client.query({
    query: GET_POSTS
  })

  const posts = response?.data?.posts?.nodes
  return {
    props: {
      posts
    }
  }
}
