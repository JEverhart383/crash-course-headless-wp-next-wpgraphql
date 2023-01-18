import Head from 'next/head'
import Footer from '../components/Footer'
import { getPostByUri } from '../lib/test-data';
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';

export default function SlugPage({ post }) {

    return (
        <div>
        <Head>
            <title>Headless WP Next Starter</title>
            <link rel="icon" href="favicon.ico"></link>
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


export async function getStaticProps({ params }){
    const GET_POST_BY_URI = gql`
        query GetPostURI($id: ID!) {
            post(id: $id, idType: URI) {
                title
                content
                date
                uri
                author {
                    node {
                    firstName
                    lastName
                    }
                }
            }
        }
    `
    const response = await client.query({
        query: GET_POST_BY_URI,
        variables: {
            id: params.uri
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
