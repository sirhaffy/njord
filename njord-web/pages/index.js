import Head from 'next/head'
import Link from 'next/link'
import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'
import Header from './header';

export default function Home( {data} ) {
  // console.log({data});

  return (
    <div>

      <Header></Header>
    
      <main className="container bg-gray-200 mt-5 max-w-md mx-auto rounded-lg p-5">
        <h1 className="text-5xl text-center pt-3">
          NJORD
        </h1>

        <p className="text-center pt-5">
          Print some data from WP:
        </p>

          {
            data.posts.nodes.map( post => {
              return (
                <ul key={post.slug}>
                  <li className="text-center">
                   <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </li>
                </ul>
              )
            })
          }
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
      query Posts {
        posts {
          nodes {
            slug
            title
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

