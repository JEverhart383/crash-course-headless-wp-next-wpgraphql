import '../styles/index.css'
import { ApolloProvider } from '@apollo/client/react'
import { client } from "../lib/apollo"

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}


export default MyApp
