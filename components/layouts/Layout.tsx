import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function Layout({ children }) {
   return (
      <div>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            />
            <title>Lex Eremin Portfolio</title>
         </Head>
         <div>
            <Navbar />
            {children}
            <Footer />
         </div>
      </div>
   );
}
