export default function BlogPost() {
   return (
      <main className="flex justify-center p-8">
         <div className="post">
            <div className="flex flex-col md:flex-row justify-center items-start md:w-3/5">
               <div className="p-4 items-center">
                  <h1 className="text-xl text-center dark:text-gray-200">
                     Test blog post
                  </h1>
               </div>
               <div className="text-justify py-10 text-lg dark:text-gray-400 p-4">
                  <p>
                     I&lsquo;m just a person who makes this website with such
                     technology stack as: Typescript, Next.js and TailwindCSS.
                     This is just a begining of the list... MDX, Prisma and
                     Planetscale is comming in future for the blog section.
                  </p>
               </div>
            </div>
         </div>
      </main>
   );
}
