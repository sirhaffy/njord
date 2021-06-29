import 'tailwindcss/tailwind.css'
import client from '../src/Controller/apollo/client'

  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />

    // return (
    //   <ApolloProvider client={client}>
    //     <Component {...pageProps} />
    //   </ApolloProvider>
    // )
  }

  export default MyApp
