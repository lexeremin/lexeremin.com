import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="bg-black flex flex-col items-center justify-center mx-auto md:w-5/5">
         <hr className="border-1 border-double border-neutral-700 w-full rounded-lg" />
         <div className="flex flex-col sm:flex-row py-3">
            <div className="py-2 px-8">
               <ul className="text-gray-500">
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
            <div className="py-2 px-8">
               <ul className="text-gray-500">
                  <li>
                     <Link
                        href="https://github.com/seexub"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        Github
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="https://www.instagram.com/lex.eremin"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        Instagram
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="https://www.reddit.com/user/Seeksubtleties"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        Reddit
                     </Link>
                  </li>
               </ul>
            </div>
            <div className="py-2 px-8">
               <ul className="text-gray-500">
                  <li>
                     <Link
                        href="https://unsplash.com/@lex_eremin"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        My Unsplash
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="https://pcpartpicker.com/b/2Z6RsY"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        PC Build
                     </Link>
                  </li>
                  <li>
                     <Link
                        href="https://devalex.gumroad.com/"
                        className="hover:text-teal-500 transition ease-in duration-300"
                     >
                        My wallpapers on Gumroad
                     </Link>
                  </li>
               </ul>
            </div>
         </div>
         <div>
            <p className="flex flex-auto text-xs items-center p-3 text-teal-900 md:p-0">
               &copy; {new Date().getFullYear()} - Alexander Eremin.
            </p>
         </div>
      </footer>
   );
}
