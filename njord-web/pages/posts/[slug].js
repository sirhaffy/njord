import Image from 'next/image'

export default function Post( data ) {
  
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

export async function getStaticProps( context ) {

  const res = await fetch( 'http://localhost:8888/njord/njord-cms/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    query: `
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
    })
  })

  const json = await res.json()

  return {
    props: {
      post: json.data.post,
    },
  }

}

export async function getStaticPaths() {
  const res = await fetch( process.env.WORDPRESS_LOCAL_API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
      query: `
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
    })
  })

  const json = await res.json()
  const posts = json.data.posts.nodes;

  // Will give us an array of paths.
  const paths = posts.map(( post ) => ({
    params: { slug: post.slug },
  }))

  return { paths, fallback: false } // untill we have fallback, use false.
}