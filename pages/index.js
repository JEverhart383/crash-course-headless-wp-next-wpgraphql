import Head from 'next/head';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { getAllPosts } from "../lib/test-data"
import { client } from '../lib/apollo';
import { gql } from "@apollo/client";

export default function HomePage({ posts }) {
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
                <PostCard key={post.uri} post={post}></PostCard>
              )
            })
          }
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps(){

  // Format your GraphQL query using backticks `` and prepend gql
  const GET_POSTS = gql`
    query AllPostsQuery {
      posts {
        nodes {
          title
          content
          date
          uri
        }
      }
    }
  `;
  // Here we make a call with the client and pass in our query string to the 
  // configuration objects 'query' property
  const response = await client.query({
    query: GET_POSTS
  });
  // Once we get the response back, we need to traverse it to pull out the 
  // data we want to pass into the HomePage

  
  const posts = response?.data?.posts?.nodes; 

  // const posts = await getAllPosts()

  return {
    props: {
      posts
    }
  }
}
