import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
   return (
      <nav className="px-2 sm:px-4 py-2.5 rounded ">
         <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
               <a className="flex">
                  <span className="self-center">
                     <Image src="/static/logo.png" width={50} height={50} />
                  </span>
               </a>
            </Link>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
               <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                     <Link href="/">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           Home
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/blog">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           Blog
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/projects">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           Projects
                        </a>
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
