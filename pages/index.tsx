// import type { NextPage } from 'next';
// import Head from 'next/head';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <div className={styles.container}>
         <main className={styles.main}>
            <h1 className="text-3xl font-bold underline dark:text-gray-300">
               Hey here!
            </h1>
            <p className="text-xl dark:text-teal-700">
               website is coming soon...
            </p>
         </main>
      </div>
   );
}
