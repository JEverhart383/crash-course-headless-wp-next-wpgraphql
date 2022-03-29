import Head from 'next/head'
import Footer from '../components/Footer'
import { getPostBySlug, getAllPosts } from '../lib/apollo';
import { client } from '../lib/apollo';
import { gql } from "@apollo/client";

export default function SlugPage({ post }) {

  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
      </Head>

      <main>
          <div className="siteHeader">
            <h1 className="title">
                {post.title}
            </h1>
            <p>✍️  &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p>
          </div>
            <article dangerouslySetInnerHTML={{__html: post.content}}>   
            </article>
      </main>

      <Footer></Footer>

    </div>
  )
}
const GET_POST = gql`
query GetPostByUri($uri: ID!) {
  post(id: $uri, idType: URI) {
    author {
      node {
        firstName
        lastName
      }
    }
    content
    title
    date
    featuredImage {
      node {
        mediaItemUrl
      }
    }
  }
}
`

export async function getStaticProps({params}){
    const response = await client.query({
      query: GET_POST,
      variables: {
        uri: params.uri
      }
    })
    const post = response?.data?.post
    return {
      props: {
        post
      }
    }
  }

export async function getStaticPaths(){
    const paths = []
    return {
        paths,
        fallback: 'blocking'
    }
}