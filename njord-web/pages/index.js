import Head from 'next/head'
import Link from 'next/link'

export default function Home( {posts} ) {
  console.log({posts})

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
            posts.nodes.map( post => {
              return (
                <ul key="{post.slug}">
                  <li>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
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
export async function getStaticProps() {

  const res = await fetch( process.env.WORDPRESS_LOCAL_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      query: `
        query Posts {
          posts {
            nodes {
              slug
              title
            }
          }
        }
      `,
    })
  })

  const json = await res.json()

  return {
    props: {
      posts: json.data.posts,
    },
  }

}

