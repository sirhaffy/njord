import Head from 'next/head';
import client from '../src/Controller/apollo/client';
import { GET_MENUS } from '../queries/get-menu';

export default function Header( ) {

  // console.log( 'menus', menus );

  return (
    <div>
      <Head>
        <title>NJORD title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="header">
        <nav>
          Nav
        </nav>
      </header>
    </div>
  )
}


export async function getServerSideProps( context ) {

  const { data } = await client.query({
    query: GET_MENUS
  });

  console.log('data', data);

  return {
    props: { 
      
    } // Will be passed to the page component as props.
  }
}