import Head from 'next/head'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'

export default function Home( {data} ) {
  // console.log({data});

  return (
    <div>
      <Head>
        <title>NJORD</title>
      </Head>

      <main className="container bg-gray-200 mt-5 max-w-md mx-auto rounded-lg p-5">
        <h1 className="text-5xl text-center pt-3">
          NJORD
        </h1>

        <p className="text-center pt-5">
          Print some data from WP:
        </p>

        <p className="text-center pt-5 pb-8">
          {
            data.posts.nodes.map( post => {
              return (
                <ul key="{post.slug}">
                  <li>
                   <Link href={`/posts/${post.slug}`}>{post.title}</Link> {/* <---- TROR FELET ÄR HÄR  */}
                  </li>
                </ul>
              )
            })
          }
        </p>
      </main>
        

      <footer className="">
      </footer>
    </div>
  )
}

// Run out query inside here.
const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.WORDPRESS_LOCAL_SITE_URL,
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache(),
});

export async function getServerSideProps() {

  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          nodes {
            slug
            title
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  if (!data) {
    return { notFound: true };
  }
  return { props: { data } };
}

