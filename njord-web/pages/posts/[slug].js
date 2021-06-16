import { ApolloClient, InMemoryCache, createHttpLink, gql } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'


export default function Post( {data} ) {
  
  console.log({data});

  const post = data.post;

  return (
    <div>
      <h1 className="text-3xl text-center">{post.title}</h1>
      <div className="flex justify-center">
        <Image width="640" height="480" src={post.featuredImage.node.sourceUrl} />
      </div>
      <article className="text-center" dangerouslySetInnerHTML={{__html: post.content}}></article>
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

export async function getServerSideProps( context ) {

  const { data } = await client.query({
    query: gql`
      query SinglePost( $id: ID!, $idType: PostIdType! ) {
        post(id: $id, idType: $idType) {
          title
          slug
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `,
    variables: {
      id: context.params.slug,
      idType: 'SLUG'
    }
  });

  if (!data) {
    return { notFound: true };
  }
  return { props: { data } };
}