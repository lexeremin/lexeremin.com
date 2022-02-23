import Link from 'next/link';

export default function Custom404() {
   return (
      <div className="text-center justify-center m-8">
         <div>
            <h1 className="text-3xl font-bold dark:text-gray-300">
               404 - Page Not Found
            </h1>
         </div>
         <div>
            <p className="text-xl dark:text-teal-700">
               Go back to
               <Link href="/">
                  <a className="underline"> the Home page</a>
               </Link>
            </p>
            <p className="text-xs dark:text-gray-800">
               I swear there is nothing fancy u can find...
            </p>
         </div>
      </div>
   );
}
