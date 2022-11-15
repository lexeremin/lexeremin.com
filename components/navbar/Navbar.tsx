import Link from 'next/link';
// import Logo from './logo';
// import MobileButton from './mobileButton';

export default function Navbar() {
   return (
      <nav className=" px-2 sm:px-4 py-2.5 ">
         <div className="container flex flex-nowrap justify-between items-center mx-auto md:w-3/5">
            {/* <MobileButton /> */}
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
               <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                     <Link
                        href="/"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        Home
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/blog"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        Blog
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="/projects"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        Projects
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}
