// import type { NextPage } from 'next';
// import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <main className="flex flex-col justify-center p-8">
         <div className="flex flex-col justify-center items-start mx-auto">
            <div className="p-4">
               <Image
                  className="rounded-full"
                  src="/static/avatar_compressed.jpg"
                  width="164"
                  height="164"
                  alt="avatar image"
               />
               <h1 className="text-xl text-center dark:text-gray-200">
                  Alexander Eremin
               </h1>
               <p className="text-center dark:text-gray-400">@lexeremin</p>
            </div>

            {/* <p className="text-lg dark:text-teal-700 m-8">
                  
               </p> */}
            <div className="text-justify py-10  content-end text-lg dark:text-gray-400 p-4">
               <p>
                  I&lsquo;m just a person who makes this website with such
                  technology stack as: Typescript, Next.js and TailwindCSS. This
                  is just a begining of the list... MDX, Prisma and Planetscale
                  is comming in future for the blog section.
               </p>
            </div>
         </div>
      </main>
   );
}
