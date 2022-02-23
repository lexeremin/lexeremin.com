import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
   return (
      <Html lang="en">
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="anonymous"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Slab&display=swap"
               rel="stylesheet"
            />
            <link rel="icon" href="static/icons/favicon.ico" />
            {/* <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
            /> */}
            {/* <title>Lex Eremin - Personal Website</title> */}
         </Head>
         <body className="selection:bg-teal-700 selection:text-black dark:bg-neutral-900 dark:text-gray-100">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
