import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="flex flex-col items-center justify-center mx-auto md:w-3/5">
         <hr className="border-1 border-double border-neutral-700 w-full rounded-lg" />
         <div className="flex flex-col sm:flex-row py-3">
            <div className="py-2 px-8">
               <ul className="text-gray-500">
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
            <div className="py-2 px-8">
               <ul className="text-gray-500">
                  <li>
                     <Link href="https://github.com/seexub">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           Github
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="https://www.instagram.com/lex.eremin">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           Instagram
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="https://twitter.com/lexeremin">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           Twitter
                        </a>
                     </Link>
                     (misinformative garbage)
                  </li>
               </ul>
            </div>
            <div className="py-2 px-8">
               <ul className="text-gray-500">
                  <li>
                     <Link href="https://opensea.io/seeksub">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           NFTs
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="https://pcpartpicker.com/b/2Z6RsY">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           mITX Build
                        </a>
                     </Link>
                  </li>
                  <li>
                     <Link href="https://devalex.sellfy.store/p/iphone-edge-wallpaper-pack/">
                        <a className="hover:text-teal-500 transition ease-in duration-300">
                           My wallpaper
                        </a>
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
