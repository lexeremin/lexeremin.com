import Link from 'next/link';
import Layout from '../components/layouts/Layout';

export default function Custom404() {
   return (
      <div className="text-center justify-center m-8">
         <div>
            <h1 className="text-3xl font-bold underline dark:text-gray-300">
               404 - Page Not Found
            </h1>
         </div>
         <div>
            <p className="text-xl dark:text-teal-700">
               Go back to
               <Link href="/">
                  <a> the Home page</a>
               </Link>
            </p>
         </div>
      </div>
   );
}
