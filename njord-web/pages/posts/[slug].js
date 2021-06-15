import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'
import Link from 'next/link'

export default function Post( {data} ) {

  // console.log({data});

  // FLYTTA TILL INDEX OCH GÖR OM TILL SINGLE-POST.

  return (
    <div>
      <ul>  
      
        {
          data.posts.nodes.map( post => {
            return (
              <ul>
                <li>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </li>
              </ul>
            )
          })
        }

      </ul>
    </div>
  )
  
}


const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.WORDPRESS_LOCAL_SITE_URL,
    credentials: 'same-origin'
  }),
  cache: new InMemoryCache(),
});

const SsgApollo = ({ data }) => {
  //data will be rendered here 
}

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