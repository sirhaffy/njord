export default function menuPages({ pages }) {
  return (
    <ul>
      {posts.map((page) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: '/pages/[slug]',
              query: { slug: page.slug },
            }}
          >
            <a>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}